// Sample code for updating a sarif file

/*import {SarifFiles} from "./sarifFiles.js";


// For updating one result

// SarifFiles.update({version : "1.0.0"}, {$set : {version : "1.1.1"}}) ;

// For updating many results 

SarifFiles.update({version : "1.0.0"}, {$set : { sarifFileName : "sarif_file_1", sarifFileId :"1234"}}, {multi: true});

// For updating the error inside Sarif Files

SarifFiles.update({"runs.tool.name" : "FindBugs" }, {$set : {"runs.$.tool.name" : "Findbugs V1.0 "}}, {multi: true}) ;

*/