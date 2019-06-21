import {Template} from "meteor/templating";

Template.filter.events({
    "click .filterValue"(e) {

        const filtersNumber = document.getElementsByClassName("filterValue").length;
        console.log(filtersNumber);

        //var filterList = document.getElementsByClassName("filterValue");
        // for(var i = 0; i < filtersNumber; i++) {
        //     if(inputs[i].type == "checkbox") {
        //         inputs[i].checked = true;
        //     }
        // }

        // Get selected ( checked ) filter names
        const selectedList = [];
        const filterList = document.getElementsByTagName("input");
        for (let p = 0; p < filterList.length; p++) {
            if (filterList[p].checked) {
                selectedList.push(filterList[p].value);
            }
        }
        console.log(filterList);
        console.log(selectedList);

        // If all filters are selected - default
        if (selectedList.length === filtersNumber) {

            const table = document.getElementById(this.tableID);
            const rows = table.rows;

            // Loop through all rows in a table (except the first one, which contains the table headers)
            for (let r = 1; r < rows.length; r++) {
                rows[r].style.display = "display";

            }
        }

        // If no filter is selected
        if (selectedList.length === 0) {

            const table = document.getElementById(this.tableID);
            const rows = table.rows;

            // Loop through all rows in a table (except the first one, which contains the table headers)
            for (let r = 1; r < rows.length; r++) {
                rows[r].style.display = "none";

            }
        }


        // Compare each value in selectedList ( list of checked items ) with the values in table
        for (let i = 0; i < selectedList.length; i++) {

            const filterValue = selectedList[i];

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