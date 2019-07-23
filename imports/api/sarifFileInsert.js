
import {SarifFiles} from "./sarifFiles.js";

import {getTextFromFile} from "./sarifFilesData.js";


var findbugs = getTextFromFile("sarifFiles/findbugsXmltoSarif.json");
console.log("FINDBUGS SARIF FILE DATA ", findbugs);

var checkmarx = getTextFromFile("sarifFiles/checkmarxCsvtoSarif.json");
var checkstyle = getTextFromFile("sarifFiles/checkstyleXmltoSarif.json");
 

// For inserting Json data in the mongo db collection 

SarifFiles.insert(findbugs);
SarifFiles.insert(checkmarx);
SarifFiles.insert(checkstyle);