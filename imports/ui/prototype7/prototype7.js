// Libraries

import {Template} from "meteor/templating";
// Prototype 7
import "./prototype7.html";
import {Projects} from "../../api/projects";

import "../table/table.html";
import "../table/table.js";

Template.prototype7.created = function () {

    sAlert.info("Welcome to 'Gamifying Program Analysis' Prototype Builder!", {position: 'bottom', timeout: 3000});
};
