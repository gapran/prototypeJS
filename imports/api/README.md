	1.	Database used in the application is MongoDB and for the database we have two different collections 	"Projects" and "SarifFiles" in the form of JSON structure.

	2.	For each project there could be multiple sarifFiles and are inserted via command line (Powershell for windows).

	3.	To insert a sarif file, please follow the below instructions : 
		(i)	Copy (Ctrl+V) the contents of the file.
		(ii)	Run Powershell using administrator rights and go to the directory where .meteor folder is available
		(iii)	Run "meteor mongo" from the powershell. MongoDB would be connected to the application.
		(iv)	Run SarifFiles.insert(filecontents)

	4.	Please remove autopublish feature from meteor. To do so, go to the directory where .meteor folder is available from Windows Powershell using Administrator rights.
	Run the command :  "meteor remove autopublish"

	5.	There were some changes made in the sarif file that was parsed previously and all the changes are listed below : 

		Sarif File Changes for 

			1.	FindBugs 

				(i)	Rule Id change from de.upb.gpa.FindBugs.1 to de:upb:gpa:FindBugs:1
		
				(ii)	File extension change from .java to _java
			2.	Checkstyle

				(i)	Rule Id change from de.upb.gpa.Checkstyle.1 to de:upb:gpa:Checkstyle:1
		
				(ii)	File extension change from .java to _java
			3.	Checkmarx

				(i)	Rule Id change from de.upb.gpa.Checkstyle.1 to de:upb:gpa:Checkstyle:1
		
				(ii)	File extension change from .java to _java, .js to _js, .html to _html
		
				(iii)	Folder name change from WebGoat-8.0.0.M23 to WebGoat-8-0-0-M23

	6.	Insert Operations
    	1.  Database file name for Project related details : 'projects.js'
    
    	2.  Use Projects.insert() for inserting any json object inside project details.
    
    	3.  Database file name for Sarif Files related details : 'sarifFiles.js'
    
    	4.  Use SarifFiles.insert() for inserting any json object inside sarif file details.

	7.	Update Operations
    	1.  Database file name for Project update related details : 'projectsUpdate.js'
    
    	2.  Use Projects.update() for inserting any json object inside project details.
    
    	3.  Database file name for Sarif Files update related details : 'sarifUpdate.js'
    
    	4.  Use SarifFiles.update() for inserting any json object inside sarif file details.