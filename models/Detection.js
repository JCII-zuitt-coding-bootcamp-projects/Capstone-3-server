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

},{
	timestamps : true
});

module.exports = mongoose.model("Detection" , DetectionSchema)