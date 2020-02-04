const { ApolloServer } = require('apollo-server-express');

// const bcrypt = require('bcrypt')


const typeDefs = require("./typeDefs")
const queryResolvers = require("./resolvers/queryResolvers")
const mutationResolvers = require("./resolvers/mutationResolvers")


// Provide resolver functions for your schema fields
const resolvers = {
  // ------------ Query Resolvers  ------------ //
  Query: queryResolvers,
  // ---------- MUTATIONS Resolvers  ---------- //
  Mutation : mutationResolvers,

}




const apolloServer = new ApolloServer({ typeDefs , resolvers});

module.exports = apolloServer;