import "../ui/databaseInsert/databaseInsert.js";

import {SarifFiles} from "./sarifFiles.js";

export function getSarifData(codeFileName)
{

    console.log("Get sarif data");
    var warnings = [];
    var tempSarifData = SarifFiles.find({"runs.tool.name" : "Checkmarx"}) ;

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
                    if(fileName == codeFileName)
                    {
                       var tempWarning = {id: ruleId , lineNumber: startLine, type:"error", message : shortMessage};
                       warnings.push(tempWarning);
                        
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
    });

    console.log("warnings", warnings);
    return warnings;

}