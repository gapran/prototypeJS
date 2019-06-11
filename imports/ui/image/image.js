import {Template} from "meteor/templating";

Template.badge.events({

    click() {
        alert("Click: " + this.alt);
    },
});