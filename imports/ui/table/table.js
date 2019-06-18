import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

/* Shows the selected table header in console
* @param idValue - The id value of selected header name.
* */
function showConsole(idValue) {
    var hello = document.getElementById(idValue);
    Session.set("sort_query", hello.innerText);
    console.log("selected sort name is " + Session.get("sort_query"))
}

/* Sorts the table based on selected table header column value
* @param columnNumber - The column number in a table.
* */
function sortTable(columnNumber) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("bugsTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[columnNumber];
            y = rows[i + 1].getElementsByTagName("TD")[columnNumber];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
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
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }

}


Template.bodyComponent.helpers({

    /* Retrieves the documents from Projects collection in database */
    bugsList() {
        return Projects.find({});
    }
});


Template.tableElement.events({

    /* By clicking on first table header i.e., pointed by id - nameID, sorts the table based on it */
    "click #nameID"() {

        showConsole("nameID");
        sortTable(0);

    },

    /* By clicking on second table header i.e., pointed by id - statusID, sorts the table based on it */
    "click #statusID"() {

        showConsole("statusID");
        sortTable(1);

    },

    /* By clicking on third table header i.e., pointed by id - progressID, sorts the table based on it */
    "click #progressID"() {

        showConsole("progressID");
        sortTable(2);

    }
});

