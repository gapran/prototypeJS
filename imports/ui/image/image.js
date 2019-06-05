import { Template } from "meteor/templating";

Template.badge3.events({

    'click #levelImg': function() {
        console.log("The badge 3 image is clicked.");
    },

});