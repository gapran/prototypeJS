// Libraries
// ...

// File

import "./profile.html";
import {Template} from "meteor/templating";

import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";
// import "./activity.html";
// import "./activity.js";
Template.prototype6_profile.helpers({

});

Template.prototype6_profile.created = function () {

    // sAlert.info("Badge Icons - Credits: Laura Reen, Licence - Creative Commons (Attribution-Noncommercial 3.0 Unported) ", {position: 'bottom', timeout: 3000});
};

Template.prototype6_profile.events({

    "click .progressArea" () {
        const value = document.getElementById("progressBar").innerText;
        // sAlert.info("You have fixed "+value+" percent of assigned bugs. Good Job!", { effect: "stackslide", position: "bottom-left",timeout: 3000});
}
});