// Libraries

import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

import "../progressBar/progressBar.html";
import "../progressBar/progressBar.js";

import "../image/image.html";
import "../image/image.js";

import "./prototype6.html";

// Prototype 6

Session.setDefault('fixed', 0);

Template.prototype6.helpers({

    thePoints() {
        return Session.get('fixed');
    }

});