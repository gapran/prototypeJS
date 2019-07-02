import { Template } from "meteor/templating";

/* Sorts the table based on selected table header column value
* @param columnNumber - The column number in a table.
* */
function sortTable(columnNumber, tableId) {
    var rows, i, x, y, shouldSwitch;
    var switchcount = 0;
    var table = document.getElementById(tableId);
    var switching = true;
    var dir = "asc";

    // Bubble sort
    // Make a loop that will continue until no switching has been done
    while (switching) {
        // Start by saying: no switching is done
        switching = false;
        rows = table.rows;
        // Loop through all table rows (except the first, which contains table headers)
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            // Get the two elements you want to compare one from current row and one from the next
            x = rows[i].getElementsByTagName("TD")[columnNumber];
            y = rows[i + 1].getElementsByTagName("TD")[columnNumber];
            // Check if the two rows should switch place, based on the direction, asc or desc
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // If a switch has been marked, make the switch and mark that a switch has been done
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1
            switchcount++;
        } else {
            // If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

Template.table.helpers({
    getData(row, columnId) {
        return row[columnId];
    }
});

Template.table.events({
    "click .tableHeader"(e) {
        var i;
        var colId = e.target.getAttribute("columnId");
        for(i = 0; i < this.columns.length; i++) {
            if(this.columns[i].id === colId) {
                sortTable(i, this.id);
                break;
            }
        }
    },
    "click td"(e, template) {
        if(template.data.callbacks !== undefined && template.data.callbacks.cellClickCallback !== undefined)
            template.data.callbacks.cellClickCallback.call(e.target);
    },
});