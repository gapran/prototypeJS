// Libraries

import {Projects} from "../../api/projects.js";
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

import "../filter/filter.html";
import "../filter/filter.js";

import "../image/image.html";
import "../image/image.js";

// Project
import "./project.html";

Template.project.helpers({

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
    filterIds: ["status", "progress"]
});
