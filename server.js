const express = require('express')
const app = express()
const mongoose = require('mongoose')



/* --------------------------------|	ApolloServer gql 	|-------------------------------- */
	//inport the instantiation of the apollo server
	const server = require("./queries/Queries.js")

	//make the express app be serve by ApolloServer
	server.applyMiddleware({
		 app,
		 path :  "/capstone3-gql" // playground, endpoint 
	});

/* --------------------------------|	ApolloServer gql 	|-------------------------------- */




/* --------------------------------|	MONGO DB connection		|-------------------------------- */

	let databaseURL = "mongodb+srv://admin1:123@b47cluster-27o5e.mongodb.net/capstone3?retryWrites=true&w=majority"

	mongoose.connect(databaseURL , {
		 useNewUrlParser : true,
		 useUnifiedTopology: true 
	});
	mongoose.connection.once("open", ()=>{
		console.log("========  Now connected to DB server =====")
	})

/* --------------------------------|	MONGO DB connection		|-------------------------------- */



// app.get("/" , (req,res) =>{
// 	console.log("homepage requested")
// 	res.send("<h1 style='color:red; text-align:center;'>Hello Express</h1>")
// })


const port = 4000;
app.listen(port, () =>{
	 console.log(`🚀 Server ready at ${port}${server.graphqlPath}`); // ${server.graphqlPath}
})