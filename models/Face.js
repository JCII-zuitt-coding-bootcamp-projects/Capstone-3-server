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
		required : false
	},
	emotion : {
		type: String,
		required : false
	},
	source : {
		type: String,
		required : false
	},
	deletedAt : {
		type: Date,
		required : false,
		default : null
	},

},{
	timestamps : true
});

module.exports = mongoose.model("Face" , FaceSchema)