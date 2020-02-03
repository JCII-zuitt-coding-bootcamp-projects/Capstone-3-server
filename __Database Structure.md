

<!-- ------ TABLES ------ -->


1.	admin  (trackers) - accounts of authorized person to track a certain person , admin side

2.	persons - record of person 

3.	faces - persons faces, one to many...

4.	watchlists - tagging a person about good/bad identity 
			>ex. tag person as criminal
			>ex. tag a person as lost person(if looking of a child).
			>ex. tag person to notify the admin/tracker monitor about the person

5.	detections - record of realtime detections of faces
			>can be used in attendance monitoring (time IN and OUT) depending on the time
			>can be used to monitor person certain activity






6. actions (actions to watchlists to close the case)
			>ex. Criminal caught by police
			>ex. The child is now under custody


<!----- Table Fields ----->


>>> admin (trackers)

-id
-firstName
-middleName
-lastName
-position
-birthday
-superAdmin (bol)
-gender
-createdAt
-updatedAt


>>> persons
-id
-firstName
-middleName
-lastName
-birthday
-address
-nationality ??
-gender
-createdAt
-updatedAt
-admin_id (fk) // the one who added the person record in db


>>> faces (faces records of person , 1 person many faces angle)
-id
-personId (fk)
-image - the image file name... ( complete path? )
-position - face position/angle (left , right)
-emotion
-source (ex. webcam , upload )
-createdAt
-updatedAt


 >>> detections (face detections)
-id
-personId (fk)
-image - the img screenshot when the face was detected.
-captureAt
-createdAt
-updatedAt


>>> watchlists (person to monitor)
-id
-personId (fk)
-case [ex. Lost child, Criminal- murder etc.... ]
-label  [ danger, warning , etc]
-close [if case is close] , boolean
-closeAt
-createdAt
-updatedAt


>>> actions
-id
-watchlistId (fk)
-action ( ex. Criminal cought by police )
-adminId (fk)
-createdAt
-updatedAt