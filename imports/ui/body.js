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


// Pages of prototype 7
import "./prototype7/prototype7.js";
import "./prototype7/profile.js";
import "./prototype7/activity.js";
import "./prototype7/community.js";
import "./prototype7/project.js";
import "./prototype7/settings.js";
import "./prototype7/analysis.js";

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
  },
  // Navigation rules for prototype 7
  "click .link_prototype7"() {
    Session.set("templateName", "prototype7");
  },
  "click .link_prototype7_project"() {
    Session.set("templateName", "prototype7_project");
  },
  "click .link_prototype7_analysis"() {
    Session.set("templateName", "prototype7_analysis");
  },
  "click .link_prototype7_settings"() {
    Session.set("templateName", "prototype7_settings");
  },
  "click .link_prototype7_profile"() {
    Session.set("templateName", "prototype7_profile");
  },
  "click .link_prototype7_activity"() {
    Session.set("templateName", "prototype7_activity");
  },
  "click .link_prototype7_community"() {
    Session.set("templateName", "prototype7_community");
  }
});