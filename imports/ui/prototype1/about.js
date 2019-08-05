// Libraries

import {Projects} from "../../../collections/projects.js";
import {Template} from "meteor/templating";

import "../table/table.html";
import "../table/table.js";

import "./about.html";

Template.prototype1_about.helpers({

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
    }
});
