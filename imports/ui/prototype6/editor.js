// Libraries

import {Projects} from "../../api/projects.js";
import {SarifFiles} from "../../api/sarifFiles.js";
import {getTextFromFile} from "../../api/files.js";
import {Template} from "meteor/templating";
import { Session } from "meteor/session";
import { Mongo } from 'meteor/mongo'


import "./editor.html";

import "../image/image.html";
import "../image/image.js";

import "../codeEditor/codeEditor.html";
import "../codeEditor/codeEditor.js";

import "./categorize.html";
import "./categorize.js";

function getDetailedWarningsInfo(ids){
    var info = ids.length + " warning" + (ids.length === 1 ? "" : "s") + ":";
    var i;
    for(i = 0; i<ids.length; i++){
        // TODO(rashmi): retrieve detailed warning info from database.
        info += "\n- " + ids[i];
    }
    return info;
}

Template.editor.helpers({



    fileContents: getTextFromFile("code/CreateDB.java"),
    warnings(){
        var warnings =[];
        var SarifData = SarifFiles.find({"runs.tool.name":"Checkmarx"});
        SarifData.map(function(tempSarifData) 
        {
            var runs, tempRun,results ,tempResult,locations,shortMessage,longMessage, tempFileName;
            var fileName, tempWarning, uri, lineNumber, line, ruleId;

            runs = tempSarifData.runs;
            for(var i=0;i<runs.length;i++)
            {
                tempRun = runs[i];
                results = tempRun.results ;
                for(var j=0;j<results.length;j++)
                {
                    tempResult = results[j];
                    locations = tempResult.locations;
                    for(var k=0;k<locations.length;k++)
                    {
                        shortMessage  = tempResult.message;
                        longMessage = tempResult.message;
                        uri = locations[k].analysisTarget.uri;
                        lineNumber = locations[k].analysisTarget.region.startLine;
                        line = parseInt(lineNumber, 10);
                        ruleId = tempResult.ruleId ;
                        tempFileName = uri.split("/");
                        fileName = tempFileName[tempFileName.length-1];
                        fileName = fileName.replace("_",".");
                        if(fileName === "CreateDB.java")
                        {
                            tempWarning = {id:ruleId , lineNumber: line, type:"error"};
                            warnings.push(tempWarning);
                            shortMessage = null;
                            longMessage = null;
                            uri = null;
                            lineNumber = null;
                            line = null;
                            ruleId = null;
                            tempFileName = null;
                            fileName = null;
                        }

                    }
                    tempResult = null;
                    locations = null;
                    
                }
                tempRun = null;
                results = null;

            }
            runs = null;

        });
        return warnings;
    },
    codeEditorCallbacks(){
        return {
            iconClickCallback(){
                // Position of the icon.
                var warningInfoElem = document.getElementById("ABCOptionsCodeEditorWarningInfo");
                var xElem = this.elem.getBoundingClientRect().left;
                var yElem = this.elem.getBoundingClientRect().top;
                var wElem = this.elem.offsetWidth;

                // Position of the editor.
                var editorElem = document.getElementById("ABCOptionsCodeEditor");
                var xEdit = editorElem.getBoundingClientRect().left;
                var yEdit = editorElem.getBoundingClientRect().top;

                // Put warningInfo popup at the correct position.
                warningInfoElem.style.display = "block";
                warningInfoElem.style.left = (xElem-xEdit+wElem)+"px";
                warningInfoElem.style.top = (yElem-yEdit+20)+"px";

                // Add warning data to warningInfo popup.
                var textElem = warningInfoElem.getElementsByTagName("DIV")[0];
                textElem.innerText = getDetailedWarningsInfo(this.data.ids);
            },
            iconTooltipCallback(){
                // TODO(rashmi): retrieve basic warning info from database.
                return "Tooltip for " + this.ids;
            }
        };
    }
});

Template.editor.events({
    "click .close"(e) {
        e.target.parentElement.style.display = "none";
    },
    "click .fixedbtn"(e,t) {
        sAlert.info("You got 50 points");
        Session.set("fixed",  Session.get("fixed") + 50);
        
        
        //sAlert.info(Session.get("cellClicked"));
        
        var session_value= Session.get("cellClicked"); 
        sAlert.info(session_value); 
        //db.Projects.remove(test1);
        var value = Projects.find({name: "test1"});
        window.alert(value);
        sAlert.info(Projects.find({name: "test1"}));

        const query = { name: "test1" };

        Projects.deleteOne(query);
        Projects.remove(query);
        //Projects.remove({ name: session_value});

    }
});
