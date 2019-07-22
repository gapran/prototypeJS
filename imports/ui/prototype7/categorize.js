import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

import "./categorize.html";
import "../table/table.html";
import "../table/table.js";
import "../filter/filter.html";
import "../filter/filter.js";

Template.categorize1.helpers({

    // Table data
    resultsTableColumns: [
        // Label for the table header, and id of the column in the database
        {label: "Warning", id: "name"},
        {label: "Status", id:"status"},
        {label: "Progress", id:"progress"}
    ],
    // From the Mongo database. Results should be accessed with result.id
    //resultsTableData: Projects.find({}),

    // Filter data
    // Ids on which to filter from a table. Must match the ones in resultsTableColumns
    filterIds: ["status", "progress"]

});