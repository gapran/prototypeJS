// Libraries
// ...

// File

import "./profile.html";
import {Template} from "meteor/templating";

import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";

Template.prototype7_profile.helpers({

});

Template.prototype7_profile.created = function () {
};

Template.prototype7_profile.events({

    "click .progressArea" () {
        const value = document.getElementById("progressBar").innerText;
        // sAlert.info("You have fixed "+value+" percent of assigned bugs. Good Job!", { effect: "stackslide", position: "bottom-left",timeout: 3000});
}
});