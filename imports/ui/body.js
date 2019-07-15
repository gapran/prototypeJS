import "../api/templates.js";
import "./body.html";

import {Template} from "meteor/templating";
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

// Pages of prototype 5
import "./prototype5/prototype5.js";
import "./prototype5/about.js";
import "./prototype5/login.js";

// Pages of prototype 6
import "./prototype6/prototype6.js";

import "./prototype6/editor.js";
import "./prototype6/categorize.js";
import "./prototype6/highlights.js";
import "./prototype6/visualize.js";

// Pages of prototype 7
import "./prototype7/prototype7.js";
import "./prototype7/editor.js";
import "./prototype7/categorize.js";
import "./prototype7/highlights.js";
import "./prototype7/visualize.js";

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

  // Navigation rules for prototype 5
  "click .link_prototype5"() {
    Session.set("templateName", "prototype5");
  },
  "click .link_prototype5_about"() {
    Session.set("templateName", "prototype5_about");
  },
  // "click .loginbutton"() {
  //   Session.set("templateName", "prototype5");
  // },

  // Navigation rules for prototype 6
  "click .link_prototype6"() {
    Session.set("templateName", "loginPage");
  },
  "click .loginbutton"() {
    Session.set("templateName", "prototype6");
  },
  "click .link_editor"() {
    Session.set("templateName", "editor");
  },
  "click .link_categorize"() {
    Session.set("templateName", "categorize");
  },
  "click .link_highlights"() {
    Session.set("templateName", "highlights");
  },
  "click .link_visualize"() {
    Session.set("templateName", "visualize");
  },
  "click .link_profile"() {
    Session.set("templateName", "prototype6");
  },

  // Navigation rules for prototype 7
  "click .link_prototype7"() {
    Session.set("templateName", "prototype7");
  },
  "click .link_editor1"() {
    Session.set("templateName", "editor1");
  },
  "click .link_categorize1"() {
    Session.set("templateName", "categorize1");
  },
  "click .link_highlights1"() {
    Session.set("templateName", "highlights1");
  },
  "click .link_visualize1"() {
    Session.set("templateName", "visualize1");
  },
  "click .link_profile1"() {
    Session.set("templateName", "prototype7");
  }

});