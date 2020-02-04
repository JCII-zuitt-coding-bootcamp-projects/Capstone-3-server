const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({

	firstName : {
		type: String,
		required : true
	},
	middleName : {
		type: String,
		required : true
	},
	lastName : {
		type: String,
		required : true
	},
	birthday : {
		type: Date,
		required : false
	},
	address : {
		type: String,
		required : false
	},
	nationality : {
		type: String,
		required : false
	},
	gender : {
		type: String,
		required : true
	},
	adminId : {
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

module.exports = mongoose.model("Person" , PersonSchema)