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
		required : false
	},
	lastName : {
		type: String,
		required : false
	},
	gender : {
		type: String,
		required : false
	},
	birthday : {
		type: Date,
		required : false
	},
	position : {
		type: String,
		required : false
	},
	superAdmin : {
		type: Boolean,
		required : false,
		default : false,
	},
	deletedAt : {
		type: Date,
		required : false,
		default : null
	},


},{
	timestamps : true
});

module.exports = mongoose.model("Admin" , AdminShema)