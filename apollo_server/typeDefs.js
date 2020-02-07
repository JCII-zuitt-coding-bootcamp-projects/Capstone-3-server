const { gql } = require('apollo-server-express');
const { GraphQLDateTime } = require("graphql-iso-date")


const customScalarResolver = {
	Date : GraphQLDateTime
}

const typeDefs = gql`
	scalar Date	


	type AdminType{
		id : ID
		email : String!
		username : String!
		password : String!
		firstName : String!
		middleName : String!
		lastName : String!
		gender : String!
		birthday : Date
		position : String
		superAdmin : Boolean
		deletedAt : String
		roles : String

		createdAt : Date
		updatedAt : Date
	}

	type PersonType{
		id : ID
		firstName : String!
		middleName : String!
		lastName : String!
		birthday : String
		address : String
		nationality : String
		gender : String!
		adminId : String
		deletedAt : Date

		image : String!
		isWatched : Boolean

		createdAt : Date
		updatedAt : Date


		faces : [FaceType]

	}

	type FaceType{
		id : ID
		personId : String!
		image : String!
		position : String
		emotion : String
		source : String
		deletedAt : Date

		createdAt : Date
		updatedAt : Date

	}

	type WatchlistType{
		id : ID
		personId : String!
		adminId : String
		case : String!
		label : String!
		closeAt : Date
		deletedAt : Date

		createdAt : Date
		updatedAt : Date
	}

	type DetectionType{
		id : ID
		personId : String!
		image : String!
		captureAt : Date!
		deletedAt : Date

		createdAt : Date
		updatedAt : Date
	}

	type ActionType{
		id : ID
		watchlistId : String!
		action : String!
		adminId : String!
		deletedAt : Date

		createdAt : Date
		updatedAt : Date
	}
	


	#Query , SELECTING DATA.............. 
  	type Query {
    	hello: String

    	# ---------|	 Multiple results 	|---------

    	getAdmins : [AdminType]
    	getAllPeople : [PersonType]
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
			middleName : String
			lastName : String
			gender : String
			birthday : String
			position : String
			superAdmin : Boolean
			deletedAt : String
			roles : String
			

		) : AdminType


		createPerson(
			firstName : String!
			middleName : String!
			lastName : String!
			birthday : String
			address : String
			nationality : String
			gender : String!
			adminId : String
			deletedAt : String

			image : String

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
			adminId : String
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

		
		loginAdmin(username : String , password : String) :AdminType

		toggleWatchlist(id : String , isWatched : Boolean) :PersonType
		
		
		
		

	}
`;



module.exports = typeDefs;