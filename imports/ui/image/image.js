import {Template} from "meteor/templating";

Template.badge.events({

    'click': function () {
       // alert("Click: " + this.alt);
        sAlert.info("Image \"" + this.alt + "\" clicked.", {timeout: 2000});
     },
});