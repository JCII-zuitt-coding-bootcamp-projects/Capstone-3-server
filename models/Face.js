const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FaceSchema = new Schema({

	personId : {
		type: String,
		required : true
	},
	image : {
		type: String,
		required : true
	},
	position : {
		type: String,
		required : true
	},
	emotion : {
		type: String,
		required : true
	},
	source : {
		type: String,
		required : true
	},
	deletedAt : {
		type: Date,
		required : false
	},

},{
	timestamps : true
});

module.exports = mongoose.model("Face" , FaceSchema)