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
		birthday : String
		position : String
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
	


	#Query , SELECTING DATA.............. 
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



  	#CUD , Create , Update , Delete -- mutating the server/database

  	type Mutation{
	
  		createAdmin(
			email : String!
			username : String!
			password : String!
			firstName : String!
			middleName : String!
			lastName : String!
			gender : String!
			birthday : String
			position : String
			superAdmin : Boolean
			deletedAt : String

		) : AdminType


		createPerson(
			firstName : String!
			middleName : String!
			lastName : String!
			birthday : String!
			address : String!
			nationality : String!
			gender : String!
			adminId : String!
			deletedAt : String

		) : PersonType


		createFace(
			personId : String!
			image : String!
			position : String!
			emotion : String!
			source : String!
			deletedAt : String

		) : FaceType


		createWatchlist(
			personId : String!
			adminId : String!
			case : String!
			label : String!
			closeAt : String
			deletedAt : String

		) : WatchlistType


		createDetection(
			personId : String!
			image : String!
			captureAt : String!
			deletedAt : String

		) : DetectionType


		createAction(
			watchlistId : String!
			action : String!
			adminId : String!
			deletedAt : String

		) : ActionType

		
		
		
		
		
		

	}
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    // hello: () => 'Hello world!',

    /*---------|	 Multiple results 	|---------*/
	    getAdmins : ()=>{
			return Admin.find({});
		},
		getPersons : ()=>{
			return Person.find({});
		},
		getFaces : ()=>{
			return Face.find({});
		},
		getWatchlists : ()=>{
			return Watchlist.find({});
		},
		getDetections : ()=>{
			return Detection.find({});
		},
		getActions : ()=>{
			return Action.find({});
		},

	/*---------|	 Single result via ID? 	|---------*/

		getAdmin : ( _ , args)=>{
			console.log(args);
			return Admin.findById({ _id : args.id });
		},
		getPerson : ( _ , args)=>{
			console.log(args);
			return Person.findById({ _id : args.id });
		},
		getFace : ( _ , args)=>{
			console.log(args);
			return Face.findById({ _id : args.id });
		},
		getWatchlist : ( _ , args)=>{
			console.log(args);
			return Watchlist.findById({ _id : args.id });
		},
		getDetection : ( _ , args)=>{
			console.log(args);
			return Detection.findById({ _id : args.id });
		},
		getAction : ( _ , args)=>{
			console.log(args);
			return Action.findById({ _id : args.id });
		},




  }, //Query resolver end




  // ============ MUTATIONS Resolver  ============ //
  Mutation : {


  },//Mutation resolver end

};



const server = new ApolloServer({ typeDefs , resolvers});

module.exports = server;