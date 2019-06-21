import {Template} from "meteor/templating";

Template.filter.events({

    "click .filterValue"(event) {

        // Retrieve the table to be filtered
        const table = document.getElementById(this.tableID);
        const rows = table.rows;
        // Create a headers list for the current table
        const headerRow = table.rows[0];

        // Retrieve the selected item
        const selectedItem = event.target.getAttribute("value");
        // List of items in a filter
        const filterList = document.getElementsByTagName("input");

        if (selectedItem === "Select all") {

            for (let element of filterList) {
                // All filter items are checked
                element.checked = true;
            }
        } else if (selectedItem === "Deselect all") {

            for (let element of filterList) {
                // All filter items are unchecked
                element.checked = false;
            }
        } else {

            // Get selected ( checked ) filter names
            const selectedList = [];
            for (let element of filterList) {
                if (element.checked) {
                    selectedList.push(element.value);
                }
            }


            // Loop through all rows in a table
            for (let row of rows) {

                if (row === headerRow) { // Skips the first one, which contains the table headers
                    continue;
                }

                // Boolean to whether show the current row or not
                let showRow = false;
                // Get the row elements you want to compare with current filterValue
                // const columns = table.row.cells.length; // Number of td ( column ) values in a row
                const rowSet = new Set();
                for (let cell of row.cells) {
                    const tableString = cell.innerText;
                    rowSet.add(tableString);
                }

                // Compare each value in selectedList ( list of checked items ) with the values in current table row
                for (let element of selectedList) {

                    if (rowSet.has(element)) {
                        showRow = true;
                    }
                }

                // Display the table row if it has one of the selected ( checked ) item
                if (showRow === true) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            }
        }
    }
});