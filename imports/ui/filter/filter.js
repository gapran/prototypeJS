import {Template} from "meteor/templating";

Template.filter.events({
    "click .filterValue"(e) {

        // Get a checked filter name
        var x = e.target.getAttribute("value");
        Session.set("checkValue", x);
        console.log(Session.get("checkValue"));


    },
});