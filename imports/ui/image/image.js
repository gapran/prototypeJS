import {Template} from "meteor/templating";

Template.badge1.events({

    'click #levelImg': function () {
        console.log("The badge 1 image is clicked.");
    },
});
Template.badge2.events({

    'click #levelImg': function () {
        console.log("The badge 2 image is clicked.");
    },
});
Template.badge3.events({

    'click #levelImg': function () {
        console.log("The badge 3 image is clicked.");
    },

});