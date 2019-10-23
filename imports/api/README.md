	1.	Database used in the application is MongoDB and for the database we have two different collections 	"Projects" and "Warnings" in the form of JSON structure.

	2.	For each project there could be multiple Error files and are inserted via command line (Powershell for windows).

	3.	To insert an Error file, please follow the below instructions : 
		(i)	Run Powershell using administrator rights and go to the directory where .meteor folder is available
		(ii)	Run "meteor mongo" from the powershell. MongoDB would be connected to the application.
		(iii)	Run db.createCollection("Warnings")
		(iv)	To insert the contents of Error file (Error.json file is present inside api/sarifFiles directory) , please follow the below steps : 
			(a)	var file=cat('/path/to/Error/file.json'); 
			(b)	var o=JSON.parse(file); 
			(c)	db.Warnings.insert(o);

	4.	Please remove autopublish feature from meteor. To do so, go to the directory where .meteor folder is available from Windows Powershell using Administrator rights.
	Run the command :  "meteor remove autopublish"

	5.	There were some changes made in the sarif file that was parsed previously and all the changes are listed below : 

		Sarif File Changes for 

			1.	FindBugs 

				(i)	Rule Id change from de.upb.gpa.FindBugs.1 to de_upb_gpa_FindBugs_1
		
				(ii)	File extension change from .java to _java
			2.	Checkstyle

				(i)	Rule Id change from de.upb.gpa.Checkstyle.1 to de_upb_gpa_Checkstyle_1
		
				(ii)	File extension change from .java to _java
			3.	Checkmarx

				(i)	Rule Id change from de.upb.gpa.Checkmarx.1 to de_upb_gpa_Checkmarx_1
		
				(ii)	File extension change from .java to _java, .js to _js, .html to _html

	6.	Insert Operations
    	1.  Database file name for Project related details : 'projects.js'
    
    	2.  Use Projects.insert() for inserting any json object inside project details.
    
    	3.  Database file name for Error Files related details : 'warnings.js'
    
    	4.  Use Warnings.insert() for inserting any json object inside error file details.

	7.	Update Operations
    	1.  Database file name for Project update related details : 'projectsUpdate.js'
    
    	2.  Use Projects.update() for inserting any json object inside project details.
