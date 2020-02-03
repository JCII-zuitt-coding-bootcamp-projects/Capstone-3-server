mutation {
	createAdmin( 
  	email : "sample@gmail.com"
    username : "udomoo31"
    password : "mrbean31"
    firstName : "Udo"
    middleName : "YAyz"
    lastName : "Moo"
    gender : "Male"
    # birthday : "11/1/2001"
    # position : "Manager"
    # superAdmin : ""
    # deletedAt : ""
  
  ){
		id
    email
    username
    password
    firstName
    middleName
    lastName
    gender
    birthday
    position
    superAdmin
    deletedAt

	}
}


{
    getAdmins{
    id
    email
    username
    password
    firstName
    middleName
    lastName
    gender
    birthday
    position
    superAdmin
    deletedAt
  }
}