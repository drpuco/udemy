const { ApolloServer } = require('apollo-server')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')

const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })

const resolvers = require('./resolvers')
const User = require('./models/User')
const Post = require('./models/Post')

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
})

server.listen().then(({ url }) => {
  console.log(`Server listening on Port ${url}`)
})
