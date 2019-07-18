import { Mongo } from "meteor/mongo"; 

export const SarifFiles = new Mongo.Collection("SarifFiles");


var findbugs = JSON.parse(Assets.getText('findbugsXmltoSarif.json'));
var checkmarx = JSON.parse(Assets.getText('checkmarxCsvtoSarif.json'));
var checkstyle = JSON.parse(Assets.getText('checkstyleXmltoSarif.json'));
 

// For inserting Json data in the mongo db collection 

SarifFiles.insert(findbugs);
SarifFiles.insert(checkmarx);
SarifFiles.insert(checkstyle);

