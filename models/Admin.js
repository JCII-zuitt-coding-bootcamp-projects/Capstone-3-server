const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminShema = new Schema({

	email : {
		type: String,
		required : true
	},

	username : {
		type: String,
		required : true
	},

	password : {
		type: String,
		required : true
	},



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
	gender : {
		type: String,
		required : true
	},
	birthday : {
		type: Date,
		required : true
	},
	position : {
		type: String,
		required : true
	},
	superAdmin : {
		type: Boolean,
		required : true,
		default : false,
	},
	deletedAt : {
		type: Date,
		required : false
	},


},{
	timestamps : true
});

module.exports = mongoose.model("Admin" , AdminShema)