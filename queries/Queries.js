const { ApolloServer ,gql } = require('apollo-server-express');

// const bcrypt = require('bcrypt')

//	Import all mongoose model Schema for resolver
const Action = require("../models/Action")
const Admin = require("../models/Admin")
const Detection = require("../models/Detection")
const Face = require("../models/Face")
const Person = require("../models/Person")
const Watchlist = require("../models/Watchlist")


// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};



const server = new ApolloServer({ typeDefs , resolvers});

module.exports = server;