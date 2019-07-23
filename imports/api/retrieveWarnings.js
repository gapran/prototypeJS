import "../ui/databaseInsert/databaseInsert.js";

import {SarifFiles} from "./sarifFiles.js";

export function getSarifData(fileName)
{

    var warnings = [{id:"1234", lineNumber: 2, type:"error"},
    {id:"6783", lineNumber: 5, type:"error"},
    {id:"1209", lineNumber: 5, type:"info"},
    {id:"3497", lineNumber: 5, type:"error"},
    {id:"1011", lineNumber: 22, type:"warning"},] ;

    var tempSarifData = SarifFiles.find({"runs.tool.name" : "Checkmarx"}) ;

    rawData = tempSarifData.map(function(tempSarifData) {
        var runs = tempSarifData.runs;
        console.log("Runs ", runs);
        for(var i=0;i<runs.length;i++){
            var tempRun = runs[i];
            var results = tempRun.results ;
            console.log("Results of runs", results);
            for(var j=0;j<results.length;j++){
                var tempResult = results[i];
                var locations = tempResult.locations;
                var ruleId = tempResult.ruleId;
                var shortMessage  = tempResult.message;
                console.log("Rule Id ", ruleId);
                console.log("locations", locations);
                console.log("Short message", shortMessage);
            }

        }
    });




    return warnings;

}