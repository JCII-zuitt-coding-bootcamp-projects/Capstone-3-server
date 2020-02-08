// import mongoose models...

const Action = require("../../models/Action")
const Admin = require("../../models/Admin")
const Detection = require("../../models/Detection")
const Face = require("../../models/Face")
const Person = require("../../models/Person")
const Watchlist = require("../../models/Watchlist")

const uuid = require('uuid/v1');
const fs = require('fs');


const mutationResolvers = {

  	createAdmin : ( _ , args) =>{
		let newAdmin = Admin({
			email : args.email ,
			username : args.username ,
			password : args.password ,
			firstName : args.firstName ,
			middleName : args.middleName ,
			lastName : args.lastName ,
			gender : args.gender ,
			birthday : args.birthday ,
			position : args.position ,
			roles : args.roles ,
			superAdmin : args.superAdmin ,
			deletedAt : args.deletedAt ,
			
		});

		console.log( newAdmin	 )

		return newAdmin.save()
	},

	createPerson : ( _ , args) =>{
		
		console.log('arssssss', args)

		//Image uploading!
		let imageString = args.image;
		let imageBase = imageString.split(';base64,').pop()
		console.log("encoded file " + imageBase)
		let imageLocation = "faces/" + uuid() + ".jpg";
		fs.writeFile(imageLocation , imageBase , {encoding : "base64" } , err=>{
			console.log(err)
		})

				let newPerson = Person({
					
					firstName : args.firstName ,
					middleName : args.middleName ,
					lastName : args.lastName ,
					birthday : args.birthday ,
					address : args.address ,
					nationality : args.nationality ,
					gender : args.gender ,
					adminId : args.adminId ,
					deletedAt : args.deletedAt ,
					image : imageLocation //'/images/hello.png'
				});

				//make the profile pic uploaded be the first face in faces
				let newFace = Face({

					personId : newPerson._id ,
					image : newPerson.image ,

				});

				newFace.save()

		console.log( newFace )
		console.log( newPerson )

		return newPerson.save()
	},



	createFace : ( _ , args) =>{

		let newFace = Face({

			personId : args.personId ,
			image : args.image ,
			position : args.position ,
			emotion : args.emotion ,
			source : args.source ,
			deletedAt : args.deletedAt ,
		});

		console.log( newFace )

		return newFace.save()
	},

	createWatchlist : ( _ , args) =>{

		let newWatchlist = Watchlist({

			personId : args.personId ,
			adminId : args.adminId ,
			case : args.case ,
			label : args.label ,
			closeAt : args.closeAt ,
			deletedAt : args.deletedAt ,
			
		});

		console.log( newWatchlist )

		return newWatchlist.save()
	},

	createDetection : ( _ , args) =>{

		let newDetection = Detection({
			
			personId : args.personId ,
			image : args.image ,
			captureAt : args.captureAt ,
			deletedAt : args.deletedAt ,
			
		});

		console.log( newDetection )

		return newDetection.save()
	},

	createAction : ( _ , args) =>{

		let newAction = Action({

			watchlistId : args.watchlistId ,
			action : args.action ,
			adminId : args.adminId ,
			deletedAt : args.deletedAt ,
			
		});

		console.log( newAction )

		return newAction.save()
	},


	loginAdmin : (_ , args) =>{
		// console.log(args);
		console.log("tryying to Login")

		return Admin.findOne({username : args.username })
								.then( admin =>{
									console.log(admin)

									if(admin == null){
										console.log("admin not found")
										return null
									}
									// else{
									// 	return admin;
									// }

									// Compare the hashed password and the plain password from login page
									// let passwordMatched = bcrypt.compareSync(args.password , admin.password)
									let passwordMatched = admin.password === args.password; // For testing!

									if(!passwordMatched){
										console.log("wrong password")
										return null;
									}else{
										console.log("Correct password")

										return admin;
									}


								})
		
	} ,


	toggleWatchlist : (_ , args) =>{
			// console.log(args);
			// console.log("tryying to Login")

			console.log('toggling...')
			console.log(args);

			let  condition = { _id : args.id }
			let updates = {
					isWatched : args.isWatched
			};

			return Person.findOneAndUpdate(condition, updates)
	},


	updatePerson :(_ , args) =>{
	
		console.log("updating person....")

					let  condition = { _id : args.id }
					let updates = {
							firstName : args.firstName,
							middleName : args.middleName,
							lastName : args.lastName,
							address : args.address,
							gender : args.gender,
							nationality : args.nationality,
							// image : args.image,
					};

					return Person.findOneAndUpdate(condition, updates)

	}




  };//Mutation resolver end


  module.exports = mutationResolvers;