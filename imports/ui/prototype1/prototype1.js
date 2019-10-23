// Libraries

import {Projects} from "../../api/projects.js";
//import {SarifFiles} from "../../api/sarifFiles.js";
import {getTextFromFile} from "../../api/files.js";
import {Template} from "meteor/templating";
import {Warnings} from "../../api/warnings.js";


import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";

import "../table/table.html";
import "../table/table.js";

import "../chat/chat.html";
import "../chat/chat.js";

import "../charts/Chart.js";
import "../charts/barChart.html";
import "../charts/barChart.js";

import "../tabs/tabs.html";
import "../tabs/tabs.js";

import "../image/image.html";
import "../image/image.js";

import "../filter/filter.html";
import "../filter/filter.js";

import "../codeEditor/codeEditor.html";
import "../codeEditor/codeEditor.js";

import "./prototype1.html";

// Prototype 1
function getDetailedWarningsInfo(ids){
    var info = ids.length + " warning" + (ids.length === 1 ? "" : "s") + ":";
    var i;
    for(i = 0; i<ids.length; i++)
    {
        var warningData = Warnings.find({"ruleId" : ids[i]});
        warningData.map(function(tempWarningData)
        {
            var ruleId = tempWarningData.ruleId;
            var message = tempWarningData.longMessage;
            info += "\n- " + message;
            
        });
    }
    return info;
}


function getTooltipData(ids)
{
    var info = "";
    
    for(var i = 0; i<ids.length; i++)
    {
        var warningData = Warnings.find({"ruleId":ids[i]});
        warningData.map(function(tempWarningData)
        {
            var ruleId = tempWarningData.ruleId ;
            var adds = (info === "" ? "" : "\n");
            info = info + adds + tempWarningData.shortMessage ;
            
        });
    }
    return info;
}

Template.prototype1.helpers({

    // Bar chart data
    proficiencyBarChartData: [
        // Label for the bar label, and a numeric value
        {label: "Bronze", value: 20},
        {label: "Silver", value: 40},
        {label: "Gold", value: 50},
        {label: "Master", value: 80},
        {label: "Professional", value: 95}
    ],

    // Tab data
    bottomTabData: [
        // Label for the tab title, and id of the invisivble div that contains the contents of the tab
        {label: "Analyze", id: "tabAnalyze"},
        {label: "Categorize", id: "tabCategorize"},
        {label: "Highlights", id: "tabHighlights"},
        {label: "Monitor & Visualize", id: "tabMonitorVisualize"}
    ],

    // Table data
    resultsTableColumns: [
        // Label for the table header, and id of the column in the database
        {label: "Warning", id: "name"},
        {label: "Status", id: "status"},
        {label: "Progress", id: "progress"}
    ],
    // From the Mongo database. Results should be accessed with result.id
    resultsTableData: Projects.find({}),
    // Alert callback: on click on a cell.
    alertCallback(cell) {
        alert("Click event on cell " + cell);
    },
    tableCallbacks(){
        return {
            cellClickCallback(){
                alert("Clicked on cell: " + this.innerText);
            }
        };
    },

    // Filter data
    // Ids on which to filter from a table. Must match the ones in resultsTableColumns
    filterIds: ["status", "progress"],
    fileContents: getTextFromFile("code/CreateDB.java"),
    warnings(){
       var warnings =[];
       var warningData = Warnings.find({"fileName": "CreateDB_java"});
       warningData.map(function(tempWarningData){
            var startLine, ruleId;
            var tempWarning;
            startLine = tempWarningData.startLine ;

            ruleId = tempWarningData.ruleId; 
            tempWarning = {id: ruleId , lineNumber: parseInt(startLine,10) , type:"error"};
            warnings.push(tempWarning);       
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
                return getTooltipData(this.ids);
            }
        };
    }
});

Template.prototype1.events({
    "click .close"(e) {
        e.target.parentElement.style.display = "none";
    },
});

