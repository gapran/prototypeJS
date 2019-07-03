import {Template} from "meteor/templating";

Template.chat.events({

    "click .open-button"() {
        document.getElementById("chatForm").style.display = "block";
    },

    "click .btn.cancel"() {
        document.getElementById("chatForm").style.display = "none";
    }

});