// import mongoose models...

const Action = require("../../models/Action")
const Admin = require("../../models/Admin")
const Detection = require("../../models/Detection")
const Face = require("../../models/Face")
const Person = require("../../models/Person")
const Watchlist = require("../../models/Watchlist")


const queryResolvers = {
    // hello: () => 'Hello world!',

    /*---------|	 Multiple results 	|---------*/
	    getAdmins : ()=>{
	    	console.log("zzzz")
			return Admin.find({});
		},
		getAllPeople : ()=>{
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




  } //Query resolver end


// console.log(queryResolvers)
  module.exports = queryResolvers;