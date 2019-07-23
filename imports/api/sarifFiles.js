/*global Assets findbugs:true*/
/*global Assets checkmarx:true*/
/*global Assets checkstyle:true*/
/*eslint no-undef: "error"*/

import { Mongo } from "meteor/mongo"; 

export const SarifFiles = new Mongo.Collection("SarifFiles");



