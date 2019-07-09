// Libraries

import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";

import "../table/table.html";
import "../table/table.js";

// import "../charts/Chart.js";
// import "../charts/barChart.html";
// import "../charts/barChart.js";

import "../tabs/tabs.html";
import "../tabs/tabs.js";

import "../image/image.html";
import "../image/image.js";

import "../filter/filter.html";
import "../filter/filter.js";

// Prototype 4
import "./prototype4.html";
import "./profile.html";
import "./project.html";
import "./mobilechat.html";
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
  }

  
});