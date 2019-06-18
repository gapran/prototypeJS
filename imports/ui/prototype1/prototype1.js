// Libraries

import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";

import "../table/table.html";
import "../table/table.js";

import "../charts/Chart.js";
import "../charts/barChart.html";
import "../charts/barChart.js";

import "../tabs/tabs.html";
import "../tabs/tabs.js";

import "../image/image.html";
import "../image/image.js";

// Prototype 1

import "./prototype1.html";


Template.prototype1.helpers({

  // Bar chart data
  proficiencyBarChartLabels: ["Bronze", "Silver", "Gold", "Master", "Profesional"],
  proficiencyBarChartValues: [20, 40, 50, 80, 95],

  // Tab data
  bottomTabData: [
    {label:"Analyze", id:"tabAnalyze"},
    {label:"Categorize", id:"tabCategorize"},
    {label:"Highlights", id:"tabHighlights"},
    {label:"Monitor & Visualize", id:"tabMonitorVisualize"}
  ],

  // Table data
  resultsTableLabels: ["Name", "Status", "Progress"],
  resultsTableData: Projects.find({}),

});

