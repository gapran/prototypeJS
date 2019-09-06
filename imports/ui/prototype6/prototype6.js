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

Template.prototype6.rendered = function (){

    if(Session.get('fixed')>0)
    {
        document.getElementById("badge1").style.display = "inline";
    }
    if(Session.get('fixed')>=100)
    {
        document.getElementById("badge2").style.display = "inline";
    }
    if(Session.get('fixed')>=200)
    {
        document.getElementById("badge3").style.display = "inline";
    }
    if(Session.get('fixed')>=300)
    {
        document.getElementById("badge4").style.display = "inline";
    }
    if(Session.get('fixed')>=400)
    {
        document.getElementById("badge5").style.display = "inline";
    }
       
}