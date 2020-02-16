// import mongoose models...
const bcrypt = require('bcryptjs')

const Action = require("../../models/Action")
const Admin = require("../../models/Admin")
const Detection = require("../../models/Detection")
const Face = require("../../models/Face")
const Person = require("../../models/Person")
const Watchlist = require("../../models/Watchlist")

const uuid = require('uuid/v1');
const fs = require('fs');

var cloudinary = require('cloudinary').v2


//https://cloudinary.com/ , udomoo31
cloudinary.config({ 
  cloud_name: 'eyesecure', 
  api_key: '914165596697934', 
  api_secret: '7BRAmgEGC4EpRjoDegKP41_xvds' 
});


const mutationResolvers = {

  	createAdmin : ( _ , args) =>{
		let newAdmin = Admin({
			email : args.email ,
			username : args.username ,
			// password : args.password ,
			password : bcrypt.hashSync(args.password,  10 ) ,


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

		let returnedPerson = null
		
		cloudinary.uploader.upload(
							imageLocation ,
							(error, result) => {
								console.log(result, error)

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
									// image : imageLocation //'/images/hello.png'
									image : result.secure_url //'/images/hello.png'

								});

								//make the profile pic uploaded be the first face in faces
								let newFace = Face({

									personId : newPerson._id ,
									image : newPerson.image ,

								});

								newFace.save()
								returnedPerson = newPerson.save()

							}
					);


			console.log("returnedPerson" , returnedPerson)
			return returnedPerson;
				

		// console.log( newFace )
		// console.log( newPerson )

		
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
									let passwordMatched = bcrypt.compareSync(args.password , admin.password)
									// let passwordMatched = admin.password === args.password; // For testing! // no incryption on db when creating...

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

	},

	updateAdmin :(_ , args) =>{
		console.log("updateAdmin ....")
		// console.log(args)

		let  condition = { _id : args.id }
		let updates = {
				
				email : args.email ,
				username : args.username ,

				firstName : args.firstName ,
				middleName : args.middleName ,
				lastName : args.lastName ,

				gender : args.gender ,
				roles : args.roles ,
				// image : args.image,
		};


		if(args.password != ''){
			updates.password = bcrypt.hashSync(args.password,  10 )
		}

		return Admin.findOneAndUpdate(condition, updates)
		

	},


	// updateAdminPassword :(_ , args) =>{
	// 	console.log("updateAdminPassword ....")


	// },

	deleteAdmin :(_ , args) =>{
		console.log("delete Admin ....")
		return Admin.findOneAndDelete({ _id : args.id })

	},

	deletePerson :(_ , args) =>{
		console.log("delete Person ....")
		// console.log(args)
		return Person.findOneAndDelete({ _id : args.id })


	},




  };//Mutation resolver end


  module.exports = mutationResolvers;