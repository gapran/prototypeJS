
/*global Meteor*/
/*eslint no-undef: "error"*/

import { Mongo } from "meteor/mongo"; 

export const SarifFiles = new Mongo.Collection("SarifFiles");

if(Meteor.isServer) {

       Meteor.publish("SarifFiles", function() {
       return SarifFiles.find({});
    });
 }
 
 if (Meteor.isClient) {
    Meteor.subscribe("SarifFiles");
 }



