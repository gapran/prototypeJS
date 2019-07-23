import "../ui/databaseInsert/databaseInsert.js";

import {SarifFiles} from "./sarifFiles.js";

export function getSarifData(codeFileName)
{

    console.log("Get sarif data");
    var warnings = [
        // TODO(rashmi): retrieve list of warnings from database.
        {id:"1234", lineNumber: 2, type:"error"},
        {id:"6783", lineNumber: 5, type:"error"},
        {id:"1209", lineNumber: 5, type:"info"},
        {id:"3497", lineNumber: 5, type:"error"},
        {id:"1011", lineNumber: 22, type:"warning"},
    ] ;

   /* var tempSarifData = SarifFiles.find({"runs.tool.name" : "Checkmarx"}) ;

    rawData = tempSarifData.map(function(tempSarifData) 
    {
        var runs = tempSarifData.runs;
        for(var i=0;i<runs.length;i++)
        {
            var tempRun = runs[i];
            var results = tempRun.results ;
            for(var j=0;j<results.length;j++)
            {
                var tempResult = results[j];
                var locations = tempResult.locations;
                for(var k=0;k<locations.length;k++)
                {
                    var tempLocation = locations[k];
                    var uri = tempLocation.analysisTarget.uri;
                    var startLine = tempLocation.analysisTarget.region.startLine ;
                    var ruleId = tempResult.ruleId;
                    var shortMessage  = tempResult.message;
                    var tempFileName = uri.split("/");
                    var fileName = tempFileName[tempFileName.length-1];
                    fileName = fileName.replace("_",".");

                    console.log("File Name ", fileName);

                    if(fileName == "credentials.js")
                    {
                       var tempWarning = {id: ruleId , lineNumber: startLine, type:"error", message : shortMessage};
                       warnings.push(tempWarning);

                       console.log("Warnings ", warnings);
                        
                    }
                }

                tempLocation = [];
                uri = "";
                startLine = "";
                ruleId = "";
                shortMessage = "";
                tempFileName = [];
                fileName = "";
                
            }

        }
        console.log("Warnings ", warnings);
    });
*/
    return warnings;

}