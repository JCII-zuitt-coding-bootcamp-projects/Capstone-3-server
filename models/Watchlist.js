const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchlistSchema = new Schema({

	personId : {
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
	close : {
		type: Boolean,
		required : true
	},
	closeAt : {
		type: Date,
		required : true
	},

},{
	timestamps : true
});

module.exports = mongoose.model("Watchlist" , WatchlistSchema)