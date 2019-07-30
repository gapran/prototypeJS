// Libraries

import {Projects} from "../../api/projects.js";
import {getTextFromFile} from "../../api/files.js";
import {Template} from "meteor/templating";

import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";

import "../table/table.html";
import "../table/table.js";

import "../chat/chat.html";
import "../chat/chat.js";

import "../tabs/tabs.html";
import "../tabs/tabs.js";

import "../image/image.html";
import "../image/image.js";

import "../filter/filter.html";
import "../filter/filter.js";

import "../codeEditor/codeEditor.html";
import "../codeEditor/codeEditor.js";
// Prototype 4
import "./prototype4.html";
import "./profile.html";
import "./project.html";
// import "./mobilechat.html";

import "../codeEditor/codeEditor.html";
import "../codeEditor/codeEditor.js";
Template.prototype4.helpers({

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
   // ABCOptions editor data
   fileContents1: getTextFromFile("ABCOptions.java"),
   warnings: [
       {lineNumber: 2, type:"error", description: "Warning 2"},
       {lineNumber: 5, type:"error", description: "Warning 5.1"},
       {lineNumber: 5, type:"info", description: "Warning 5.2"},
       {lineNumber: 5, type:"error", description: "Warning 5.3"},
       {lineNumber: 22, type:"warning", description: "Warning 22"},
   ],
   codeEditorCallbacks(){
       return {
           iconClickCallback(){
               alert("Clicked on icon: " + this.getAttribute("title"));
           }
       };
   },
   // Table data
   resultsTableColumns1: [
    // Label for the table header, and id of the column in the database
    {label: "Warning", id: "name"},
    {label: "Status", id:"status"},
    {label: "Progress", id:"progress"}
],

// From the Mongo database. Results should be accessed with result.id
resultsTableData1: Projects.find({}),

// Filter data
// Ids on which to filter from a table. Must match the ones in resultsTableColumns
filterIds: ["status", "progress"],
    // ABCOptions editor data
    fileContents: getTextFromFile("ABCOptions.java"),
    warnings: [
        {lineNumber: 2, type:"error", description: "Warning 2"},
        {lineNumber: 5, type:"error", description: "Warning 5.1"},
        {lineNumber: 5, type:"info", description: "Warning 5.2"},
        {lineNumber: 5, type:"error", description: "Warning 5.3"},
        {lineNumber: 22, type:"warning", description: "Warning 22"},
    ],
    codeEditorCallbacks(){
        return {
            iconClickCallback(){
                alert("Clicked on icon: " + this.getAttribute("title"));
            }
        };
    },
});

Template.prototype4.events({
"click .btnProfile"() {
    Session.set("templateName", "profile");
  },
  "click .btnProject"() {
    Session.set("templateName", "project");
  },
  "click .btnchat"() {
    Session.set("templateName", "mobilechat");
  },

});