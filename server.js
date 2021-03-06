const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const keys = require('./config/keys')


const bodyParser = require('body-parser')


/* --------------------------------|	Increase the file upload to 15mb		|-------------------------------- */
	// DAPAT NASA TOP TO para di mag error gql apollo....
	app.use(bodyParser.json({ limit : "15mb"}))

/* --------------------------------|	Increase the file upload to 15mb		|-------------------------------- */


app.use(cors())
app.use("/faces" , express.static('faces') ) // allow images

/* --------------------------------|	ApolloServer gql 	|-------------------------------- */
	//imnport the instantiation of the apollo server gql
	const apolloServer = require("./apollo_server/apolloServer.js")


	//make the express app be serve by ApolloServer
	apolloServer.applyMiddleware({
		 app,
		 path :  "/capstone3-gql" // playground, endpoint 
	});

/* --------------------------------|	ApolloServer gql 	|-------------------------------- */




/* --------------------------------|	MONGO DB connection		|-------------------------------- */

	let databaseURL = process.env.DATABASE_URL || keys.mongoURI


	

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


const port = process.env.PORT || keys.port ;
app.listen(port, () =>{
	 console.log(`🚀 Server ready at ${port}${apolloServer.graphqlPath}`); // ${server.graphqlPath}
})