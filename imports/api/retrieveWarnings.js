import {SarifFiles} from "./sarifFiles.js";

export function getSarifData(codeFileName)
{
    console.log("Get sarif data");
    var warnings = [];
    var test = SarifFiles.find().count();
    console.log("count data", test);
    var SarifData = SarifFiles.find({"runs.tool.name":"Checkmarx"}).map(function(tempSarifData) 
    {
        console.log("map data");
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
                    var line = parseInt(startLine);
                    var ruleId = tempResult.ruleId;
                    var shortMessage  = tempResult.message;
                    var tempFileName = uri.split("/");
                    var fileName = tempFileName[tempFileName.length-1];
                    fileName = fileName.replace("_",".");
                    if(fileName == codeFileName)
                    {
                       var tempWarning = {id:ruleId , lineNumber: line, type:"error"};
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
    console.log("sarif data", SarifData);
    console.log("warnings", warnings);
    return warnings;

}