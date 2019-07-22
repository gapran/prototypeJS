import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

import "./visualize.html";
import "../charts/Chart.js";
import "../charts/barChart.html";
import "../charts/barChart.js";

Template.visualize1.helpers({

    // Bar chart data
    proficiencyBarChartData: [
        // Label for the bar label, and a numeric value
        {label: "Bronze", value: 20},
        {label: "Silver", value: 40},
        {label: "Gold", value: 50},
        {label: "Master", value: 80},
        {label: "Professional", value: 95}
    ]

});