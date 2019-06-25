import "../api/templates.js";
import "./body.html";

import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import { Session } from "meteor/session";

// Pages of prototype 1
import "./prototype1/prototype1.js";
import "./prototype1/about.js";

// Pages of prototype 2
import "./prototype2/prototype2.js";
// ...
// Pages of prototype 3
import "./prototype3/prototype3.js";

// Helper for navigation
Template.body.helpers({
  templateName(){
    return Session.get("templateName");
  }
});

// Navigation rules: default prototype
Meteor.startup(function () {
  Session.setDefault("templateName", "default_menu");
});

Template.body.events({
  // Navigation rules for the default menu
  "click .default_menu"() {
    Session.set("templateName", "default_menu");
  },

  // Navigation rules for prototype 1
  "click .link_prototype1"() {
    Session.set("templateName", "prototype1");
  },
  "click .link_prototype1_about"() {
     Session.set("templateName", "prototype1_about");
  },
  // ...

  // Navigation rules for prototype 2
  "click .link_prototype2"() {
    Session.set("templateName", "prototype2");
  },

  // Navigation rules for prototype 3
  "click .link_prototype3"() {
    Session.set("templateName", "prototype3");
  }

});