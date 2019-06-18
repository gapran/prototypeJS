import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";


Template.bodyComponent.helpers({

    bugsList() {
        return Projects.find({name: {$exists: true}});
    }
});

Template.tableElement.events({

    'click #nameID': function () {

        var hello = document.getElementById("nameID");
        console.log(hello.innerText);
    },

    'click #statusID': function () {

        var hello = document.getElementById("statusID");
        console.log(hello.innerText);
    },

    'click #progressID': function () {

        var hello = document.getElementById("progressID");
        console.log(hello.innerText);
    }

});