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
		required : true
	},
	address : {
		type: String,
		required : true
	},
	nationality : {
		type: String,
		required : true
	},
	gender : {
		type: String,
		required : true
	},
	admin_id : {
		type: String,
		required : true
	},



},{
	timestamps : true
});

module.exports = mongoose.model("Person" , PersonSchema)