// Libraries

import {Template} from "meteor/templating";
// Prototype 6
import "./prototype6.html";
import {Projects} from "../../api/projects";

import "../table/table.html";
import "../table/table.js";

Template.prototype6.created = function () {

    sAlert.info("Welcome to 'Gamifying Program Analysis' Prototype Builder!", {position: 'bottom', timeout: 3000});
};
