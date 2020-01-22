const { ApolloServer } = require('apollo-server')
const fs = require('fs')
const path = require('path')

// Import typeDefs and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')
const resolvers = require('./resolvers')

// import environment variables and mogoose Models
const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })
const User = require('./models/User')
const Post = require('./models/Post')

// connect to Mongodb (mit daten aus envmongo)
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err))

// create Apollo/Graphql server using typedefs, resolvers and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
})
// server starts listening
server.listen().then(({ url }) => {
  console.log(`Server listening on Port ${url}`)
})
