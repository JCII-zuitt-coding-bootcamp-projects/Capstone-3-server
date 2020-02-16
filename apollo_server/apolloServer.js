const { ApolloServer } = require('apollo-server-express');

// const bcrypt = require('bcrypt')

const Face = require("../models/Face")
const Person = require("../models/Person")



const typeDefs = require("./typeDefs")
const queryResolvers = require("./resolvers/queryResolvers")
const mutationResolvers = require("./resolvers/mutationResolvers")


// Provide resolver functions for your schema fields
const resolvers = {
  // ------------ Query Resolvers  ------------ //
  Query: queryResolvers,
  // ---------- MUTATIONS Resolvers  ---------- //
  Mutation : mutationResolvers,


  //Relationships resolver
  PersonType : {
    faces : (parent, args) => {
      // console.log(parent.firstname)

      return Face.find({ personId : parent.id })
    }
  },


  DetectionType : {
    person : (parent, args) => {
      // console.log(parent.firstname)

      return Person.findById( parent.personId )
    }
  },



}




const apolloServer = new ApolloServer({ typeDefs , resolvers});

module.exports = apolloServer;