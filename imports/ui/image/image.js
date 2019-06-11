import {Template} from "meteor/templating";

Template.badge.events({

    'click': function () {
        alert("Click: " + this.alt);
    },
});