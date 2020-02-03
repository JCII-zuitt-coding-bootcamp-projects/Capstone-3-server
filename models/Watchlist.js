const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({

	personId : {
		type: String,
		required : true
	},
	adminId : { // the auth admin who created the records
		type: String,
		required : true
	},
	case : {
		type: String,
		required : true
	},
	label : {
		type: String,
		required : true
	},
	closeAt : {
		type: Date,
		required : false
	},
	deletedAt : {
		type: Date,
		required : false
	},

},{
	timestamps : true
});

module.exports = mongoose.model("Watchlist" , WatchlistSchema)