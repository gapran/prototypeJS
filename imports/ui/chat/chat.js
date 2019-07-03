import {Template} from "meteor/templating";

Template.chat.events({

    "click .open-button": function () {
        document.getElementById("chatForm").style.display = "block";
    },

    "click .btn.cancel": function () {
        document.getElementById("chatForm").style.display = "none";
    }

});