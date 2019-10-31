import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
 
export const Projects = new Mongo.Collection("Projects");

if(Meteor.isServer){
    Meteor.publish("Projects", function()
    {
        return Projects.find({});
    });
}

if(Meteor.isClient){
    Meteor.subscribe("Projects");
}





