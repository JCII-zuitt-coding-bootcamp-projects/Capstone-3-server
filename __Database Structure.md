

<!-- ------ TABLES ------ -->


1.	trackers  (admins) - accounts of authorized person to track a certain person , admin side

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


>>> trackers (admins)

-id
-firstname
-middlename
-lastname
-position
-birthday
-super_admin (bol)
-gender
-created_at
-updated_at


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


>>> faces (faces records of person , 1 person many faces angle)
-id
-person_id (fk)
-image - the image file name... ( complete path? )
-position - face position/angle (left , right)
-emotion
-created_at
-updated_at


 >>> detections (face detections)
-id
-person_id (fk)
-image - the img screenshot when the face was detected.
-created_at
-updated_at


>>> watchlists (person to monitor)
-id
-person_id (fk)
-case [ex. Lost child, Criminal- murder etc.... ]
-label  [ danger, warning , etc]
-close [if case is close] , boolean
-close_at
-created_at
-updated_at


>>> actions
-id
-watchlist_id (fk)
-action ( ex. Criminal cought by police )
-tracker_id (fk)