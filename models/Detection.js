const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetectionSchema = new Schema({

	personId : {
		type: String,
		required : true
	},
	image : {
		type: String,
		required : true
	},
	captureAt : {
		type: Date,
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

module.exports = mongoose.model("Detection" , DetectionSchema)