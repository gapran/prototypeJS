import {Template} from "meteor/templating";

Template.filter.helpers({

    // Checks the present label
    isSelectAll: function (label) {

        return label === "Select all";
    },

    isDeselectAll: function (label) {

        return label === "Deselect all";
    },

    isFilter: function (label) {

        return label !== "Select all" && label === "Deselect all";
    }

});


Template.filter.events({

    "click .filterValue"(event) {

        // Retrieve the table to be filtered
        const table = document.getElementById(this.tableID);
        const rows = table.rows;

        const checkedItem = event.target.getAttribute("value");

        //Select all option
        const selectCheck = document.getElementById("filterSelect");

        //Deselect all option
        const deselectCheck = document.getElementById("filterDeselect");


        alert(checkedItem);
        if (checkedItem === "Select all") {


            const checkList = document.getElementsByTagName("input");
            alert(checkList.length);
            for (let w = 0; w < checkList.length; w++) {

                if (checkList[w].value === "Deselect all") {
                    checkList[w].checked = false;
                } else {
                    checkList[w].checked = true;
                }
            }


        }

        if (checkedItem === "Deselect all") {


            const checkList = document.getElementsByTagName("input");
            for (let w = 0; w < checkList.length; w++) {

                if (checkList[w].value !== "Deselect all") {
                    checkList[w].checked = false;
                }
            }


        }


        // Number of items in a default filter list
        const filtersNumber = document.getElementsByClassName("filterValue").length;

        // Get selected ( checked ) filter names
        const selectedList = [];
        const filterList = document.getElementsByTagName("input");
        for (let p = 0; p < filterList.length; p++) {
            if (filterList[p].checked) {
                selectedList.push(filterList[p].value);
            }
        }

        var selectorSize = 0;
        for (var u = 0; u < selectedList.length; u++) {

            if (selectedList[u].value === "Select all" || selectedList[u].value === "Deselect all") {

                selectorSize++;
            }
        }

        alert(selectorSize);
        // If all filters are selected - default, check condition excluding select/deselect all
        // if (selectedList.length === (filtersNumber - selectorSize)) {
        //
        //     //Select all option is checked
        //     selectCheck.checked = true;
        //
        //     //Deselect all option is not checked
        //     // deselectCheck.checked = false;
        //
        //     // Loop through all rows in a table (except the first one, which contains the table headers)
        //     for (let r = 1; r < rows.length; r++) {
        //         rows[r].style.display = "display";
        //
        //     }
        //
        //
        // } else if (selectedList.length === 0) { // If no filter is selected
        //
        //     //Deselect all option is checked
        //     deselectCheck.checked = true;
        //
        //     //Select all option is not checked
        //     selectCheck.checked = false;
        //
        //     // Loop through all rows in a table (except the first one, which contains the table headers)
        //     for (let r = 1; r < rows.length; r++) {
        //         rows[r].style.display = "none";
        //
        //     }
        // } else { // If some filter is selected
        //
        //     //Select all option is not checked
        //     selectCheck.checked = false;
        //
        //     //Select all option is not checked
        //     deselectCheck.checked = false;
        //
        // }


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
            for (let i = 0; i < selectedList.length; i++) {

                const filterValue = selectedList[i];
                if (rowSet.has(filterValue)) {
                    // rows[j].style.display = "none";
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