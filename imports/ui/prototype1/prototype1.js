// Libraries
import {Projects} from "../../api/projects.js";
import {getTextFromFile} from "../../api/files.js";
import {getSarifData} from "../../api/retrieveWarnings.js";
import {Template} from "meteor/templating";

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
    for(i = 0; i<ids.length; i++){
        // TODO(rashmi): retrieve detailed warning info from database.
        info += "\n- " + ids[i];
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

    // ABCOptions editor data
    fileContents: getTextFromFile("ABCOptions.java"),
    warnings : getSarifData("CreateDB.java"),
    /*warnings: [
        // TODO(rashmi): retrieve list of warnings from database.
        {id:"1234", lineNumber: 2, type:"error"},
        {id:"6783", lineNumber: 5, type:"error"},
        {id:"1209", lineNumber: 5, type:"info"},
        {id:"3497", lineNumber: 5, type:"error"},
        {id:"1011", lineNumber: 22, type:"warning"},
    ],*/
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

Template.prototype1.events({
    "click .close"(e) {
        e.target.parentElement.style.display = "none";
    },
});

