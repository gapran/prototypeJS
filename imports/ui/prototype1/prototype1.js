// Libraries

import {Projects} from "../../api/projects.js";
import {getTextFromFile} from "../../api/files.js"
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
    warnings: [
        {lineNumber: 2, type:"error", description: "Warning 2"},
        {lineNumber: 5, type:"error", description: "Warning 5.1"},
        {lineNumber: 5, type:"info", description: "Warning 5.2"},
        {lineNumber: 5, type:"error", description: "Warning 5.3"},
        {lineNumber: 22, type:"warning", description: "Warning 22"},
    ]
});

