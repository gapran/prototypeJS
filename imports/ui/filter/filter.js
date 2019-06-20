import {Template} from "meteor/templating";

var filterSet = new Set();

Template.filter.events({
    "click .filterValue"(e) {

        // Get a checked filter name
        const checkedFilter = e.target.getAttribute("value");

        // Creates filterSet with checked values
        const checkStatus = e.target.checked;
        if (checkStatus === true) {
            filterSet.add(checkedFilter);
        } else {
            filterSet.delete(checkedFilter);
        }

        // Convert current filterSet to filterArray
        const filterArray = Array.from(filterSet);

        // Compare each value in filterArray with the values in table
        for (let i = 0; i < filterArray.length; i++) {

            const filterValue = filterArray[i];

            const table = document.getElementById(this.tableID);
            const rows = table.rows;

            // Loop through all rows in a table (except the first one, which contains the table headers)
            for (let j = 1; j < rows.length; j++) {
                // Get the row elements you want to compare with current filterValue
                const columns = table.rows[j].cells.length; // Number of td ( column ) values in a row
                const rowSet = new Set();
                for (let k = 0; k < columns; k++) {
                    const tableString = rows[j].getElementsByTagName("TD")[k].innerHTML.toString();
                    rowSet.add(tableString);
                }
                if (!rowSet.has(filterValue)) {
                    rows[j].style.display = "none";
                } else {
                    rows[j].style.display = "table-row";
                }
            }
        }
    }
});