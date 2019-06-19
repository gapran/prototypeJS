import {Template} from "meteor/templating";

Template.filter.events({
    "click .filterValue"(e) {

        // Get a checked filter name
        var x = e.target.getAttribute("value");
        Session.set("checkValue", x);
        console.log(Session.get("checkValue"));

        // Alerts selected filter checked or not
        var checkStatus = e.target.checked;

        if (checkStatus === true){
            alert("I am checked"); }
        else {
            alert("I am unchecked");
        }

    },
});