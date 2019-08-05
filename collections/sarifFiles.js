
import { Mongo } from "meteor/mongo"; 

export const SarifFiles = new Mongo.Collection("SarifFiles");

if(Meteor.isServer) {

       Meteor.publish("SarifFiles", function() {
       console.log(SarifFiles.find({}).fetch());
       return SarifFiles.find({});
    });
 }
 
 if (Meteor.isClient) {
    Meteor.subscribe("SarifFiles");
    console.log(SarifFiles.find({}).fetch());
 };



