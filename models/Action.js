const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActionSchema = new Schema({

	watchlistId : {
		type: String,
		required : true
	},
	action : {
		type: String,
		required : true
	},
	adminId : {
		type: String,
		required : true
	},
	deletedAt : {
		type: Date,
		required : false,
		default : null
	},

},{
	timestamps : true
});

module.exports = mongoose.model("Action" , ActionSchema)