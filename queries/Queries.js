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
	
	type AdminType{
		id : ID
		email : String!
		username : String!
		password : String!
		firstName : String!
		middleName : String!
		lastName : String!
		gender : String!
		birthday : String!
		position : String!
		superAdmin : Boolean
		deletedAt : String
	}

	type PersonType{
		id : ID
		firstName : String!
		middleName : String!
		lastName : String!
		birthday : String!
		address : String!
		nationality : String!
		gender : String!
		adminId : String!
		deletedAt : String

	}

	type FaceType{
		id : ID
		personId : String!
		image : String!
		position : String!
		emotion : String!
		source : String!
		deletedAt : String

	}

	type WatchlistType{
		id : ID
		personId : String!
		adminId : String!
		case : String!
		label : String!
		closeAt : String
		deletedAt : String
	}

	type DetectionType{
		id : ID
		personId : String!
		image : String!
		captureAt : String!
		deletedAt : String
	}

	type ActionType{
		id : ID
		watchlistId : String!
		action : String!
		adminId : String!
		deletedAt : String
	}
	


	#Query 
  	type Query {
    	hello: String

    	# ---------|	 Multiple results 	|---------

    	getAdmins : [AdminType]
    	getPersons : [PersonType]
    	getFaces : [FaceType]
    	getWatchlists : [WatchlistType]
    	getDetections : [DetectionType]
    	getActions : [ActionType]


    	# ---------|	 Single result 	|---------

    	getAdmin(id : String !) : AdminType
    	getPerson(id : String !) : PersonType
    	getFace(id : String !) : FaceType
    	getWatchlist(id : String !) : WatchlistType
    	getDetection(id : String !) : DetectionType
    	getAction(id : String !) : ActionType

  	}
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    // hello: () => 'Hello world!',

    /*---------|	 Multiple results 	|---------*/
	    ______ : ()=>{
			console.log("geting members...")
			return Member.find({});
		},

	/*---------|	 Single result 	|---------*/
  },
};



const server = new ApolloServer({ typeDefs , resolvers});

module.exports = server;