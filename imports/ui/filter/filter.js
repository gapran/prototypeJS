import {Template} from "meteor/templating";

Template.filter.helpers({
    // Returns a sorted array of unique values matching the column which id is filterId.
    getValues(filterId) {
        return this.tableData.fetch().map((a) => a[filterId]).filter(
            function (value, index, self) {
                return self.indexOf(value) === index;
            }).sort();
    },

    getTableLabelFromId(filterId){
        return this.tableColumns.find((a) => a.id === filterId).label;
    }
});

// Returns the index of the column which matches the columnId.
function getTableId(tableColumns, columnId) {
    for(i = 0; i < tableColumns.length; i++){
        if(tableColumns[i].id === columnId) {
            return i;
        }
    }
}

// Filter on the table's rows, based on the values contained in the column of
// index columnIndex. toggleOn is a boolean (true -> the matching rows appear,
// false -> the matching rows disappear).
function filter(table, columnIndex, value, toggleOn) {
    var tr = table.getElementsByTagName("TR");
    var i;
    for(i = 0; i < tr.length; i++){
        var td = tr[i].getElementsByTagName("TD")[columnIndex];
        if(td.innerText === value) {
           tr[i].style.display = toggleOn ? "table-row" : "none";
        }
    }
}

Template.filter.events({

    // If a category checkbox is selected/deselected, then select/deselect all
    // boxes in that same category, and trigger the filtering event.
    // Special case: if filterId is null, the target is the general filter,
    // so all other checkboxes must also be toggled.
    "click .filterLabel"(e) {
        var checked = e.target.checked;
        var filterId = e.target.getAttribute("filterId");
        var checkboxes = document.getElementById(this.id).getElementsByClassName("filterValue");
        var i;

        for(i = 0; i < checkboxes.length; i++) {
            if(!filterId || checkboxes[i].getAttribute("filterId") === filterId) {
                checkboxes[i].checked = checked;
                // Trigger the filtering event.
                filter(document.getElementById(this.tableId),
                    getTableId(this.tableColumns, checkboxes[i].getAttribute("filterId")),
                    checkboxes[i].getAttribute("value"),
                    checked);
            }
        }

        // If filterId is null, also update the check of the filterLabels.
        if(!filterId){
            checkboxes = document.getElementById(this.id).getElementsByClassName("filterLabel");
            for(i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = checked;
            }
        }
    },

    // Trigger the filtering event on individual filterValues.
    "click .filterValue"(e) {
        filter(document.getElementById(this.tableId),
            getTableId(this.tableColumns, e.target.getAttribute("filterId")),
            e.target.getAttribute("value"),
            e.target.checked);
    }
});
