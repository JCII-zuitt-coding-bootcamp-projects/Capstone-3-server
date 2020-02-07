const { ApolloServer } = require('apollo-server-express');

var cors = require('cors')

// const bcrypt = require('bcrypt')

const Face = require("../models/Face")



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

}



app.use(cors())
const apolloServer = new ApolloServer({ typeDefs , resolvers});

module.exports = apolloServer;