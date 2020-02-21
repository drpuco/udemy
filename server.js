const { ApolloServer, AuthenticationError } = require('apollo-server')
const fs = require('fs')
const path = require('path')

// Import typeDefs and resolvers
const filePath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')
const resolvers = require('./resolvers')
const jwt = require('jsonwebtoken')

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

// Verify JWT token passed from the clinet
const getUser = async token => {
  if (token) {
    try {
      let user = await jwt.verify(token, process.env.SECRET)
      console.log(user)
      return user
    } catch (err) {
      throw new AuthenticationError(
        'Your session is expired. Please Sign in again'
      )
    }
  }
}

// create Apollo/Graphql server using typedefs, resolvers and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // auth header in req
  context: async ({ req }) => {
    const token = req.headers['authorization']
    return {
      User,
      Post,
      currentUser: getUser(token)
    }
  }
})
// server starts listening
server.listen().then(({ url }) => {
  console.log(`Server listening on Port ${url}`)
})
