import {Template} from "meteor/templating";

Template.filter.events({

    "click .filterValue"(event) {

        // Retrieve the table to be filtered
        const table = document.getElementById(this.tableID);
        const rows = table.rows;

        // Retrieve the selected item
        const selectedItem = event.target.getAttribute("value");

        if (selectedItem === "Select all") {

            const checkList = document.getElementsByTagName("input");
            for (let element of checkList) {
                // All filter items are checked
                element.checked = true;
            }
        }

        if (selectedItem === "Deselect all") {

            const checkList = document.getElementsByTagName("input");
            for (let element of checkList) {
                // All filter items are unchecked
                element.checked = false;
            }
        }

        // Get selected ( checked ) filter names
        const selectedList = [];
        const filterList = document.getElementsByTagName("input");
        for (let element of filterList) {
            if (element.checked) {
                selectedList.push(element.value);
            }
        }


        // Loop through all rows in a table (except the first one, which contains the table headers)
        for (let j = 1; j < rows.length; j++) {

            // Boolean to whether show the current row or not
            let showRow = false;
            // Get the row elements you want to compare with current filterValue
            const columns = table.rows[j].cells.length; // Number of td ( column ) values in a row
            const rowSet = new Set();
            for (let k = 0; k < columns; k++) {
                const tableString = rows[j].getElementsByTagName("TD")[k].innerHTML.toString();
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
                rows[j].style.display = "table-row";
            } else {
                rows[j].style.display = "none";
            }
        }

    }
});