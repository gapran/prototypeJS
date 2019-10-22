import { Mongo } from "meteor/mongo";
export const Warnings = new Mongo.Collection("Warnings");

if(Meteor.isServer){
    Meteor.publish("Warnings", function()
    {
        return Warnings.find({});
    });
}

if(Meteor.isClient){
    Meteor.subscribe("Warnings");
}



