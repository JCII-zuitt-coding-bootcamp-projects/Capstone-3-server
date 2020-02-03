
<!-- Install dependecies for the server -->
	-apollo-server-express
	-bcrypt
	-express
	-mongoose
	-nodemon

> npm i apollo-server-express bcrypt express mongoose nodemon

> Add a .gitignore file and add "/node_modules"
> create serve.js
> import dependencies in server.js


 >Create models folder inside the server folder
 	>create mongoose model for EVERY! collections/table
 >Create Queries folder inside the server folder , create queries.js file
 	>create apollo server at queries.js for EVERY crud
 	>test in playground