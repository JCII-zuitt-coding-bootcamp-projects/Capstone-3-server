

<!-- ------ TABLES ------ -->

1.	persons - record of person 

2.	faces - persons faces, one to many...

2.	detections - record of realtime detections of faces
			>can be used in attendance monitoring (time IN and OUT) depending on the time
			>can be used to monitor person certain activity

3.	watchlists - tagging a person about good/bad identity 
			>ex. tag person as criminal
			>ex. tag a person as lost child(if looking of a child).
			>ex. tag person to notify the admin/tracker monitor about the person

4.	trackers (admins) - accounts of authorized person to track a certain person , admin side


<!----- Table Fields ----->


>>> persons
-id
-firstname
-middlename
-lastname
-birthday
-address
-nationality
-gender
-created_at
-updated_at


>>> faces
-id
-person_id
-image - the image file name... ( complete path? )
-position - face position/angle (left , right)
-emotion
-created_at
-updated_at


 >>> detections
-id
-person_id (fk)
-image - the img screenshot when the face was detected.
-created_at
-updated_at
