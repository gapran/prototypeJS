
import {SarifFiles} from "./sarifFiles.js";

import {getJSONData} from "./sarifFilesData.js";


var findbugs = getJSONData("sarifFiles/findbugsXmltoSarif.json");
var checkmarx = getJSONData("sarifFiles/checkmarxCsvtoSarif.json");
var checkstyle = getJSONData("sarifFiles/checkstyleXmltoSarif.json");
 

// For inserting Json data in the mongo db collection 

SarifFiles.insert(findbugs);
SarifFiles.insert(checkmarx);
SarifFiles.insert(checkstyle);