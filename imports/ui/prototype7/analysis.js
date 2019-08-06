// Libraries
// ...

// File

import "./analysis.html";
import {Projects} from "../../../collections/projects.js";
import {Template} from "meteor/templating";

import "../table/table.html";
import "../table/table.js";

import "../filter/filter.html";
import "../filter/filter.js";



Template.prototype7_analysis.helpers({
// Table data
    resultsTableColumns: [
        // Label for the table header, and id of the column in the database
        {label: "Warning", id: "name"},
        {label: "Status", id: "status"},
        {label: "Progress", id: "progress"},
        {label: "Assignee", id: "assignee"}
    ],
    // From the Mongo database. Results should be accessed with result.id
    resultsTableData: Projects.find({}),

    // Filter data
    // Ids on which to filter from a table. Must match the ones in resultsTableColumns
    filterIds: ["status", "progress"],

    theBug() {
        return Session.get('cellClicked');
    }


});

Template.prototype7_analysis.events({
    // Retrieve the clicked cell
    "click td"(e) {
        Session.set("cellClicked", e.target.innerText)
        }
});