// Libraries
// ...

// File

import "./analysis.html";
import {Projects} from "../../api/projects";
import {Template} from "meteor/templating";
import { Session } from "meteor/session";

import "../table/table.html";
import "../table/table.js";

import "../filter/filter.html";
import "../filter/filter.js";
import "./profile.html";
import "./profile.js";

Template.prototype6_analysis.helpers({
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

    bugName() {
        return Session.get("bugName");
    },
    bugPoints() {
        return Session.get("bugPoints");
    }

});

Template.prototype6_analysis.events({
    // Retrieve the clicked cell
    "click td"(e) {
        Session.set("bugName", "name of the bug");
        Session.set("bugPoints",123 );  
    },
    "click.fixedbutton"() {
        Session.set("fix", 123);
      }
});