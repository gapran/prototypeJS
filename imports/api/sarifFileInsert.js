
import {SarifFiles} from "./sarifFiles.js";

import {getJSONData} from "./sarifFilesData.js";


var checkmarx = getJSONData("sarifFiles/checkmarxCsvtoSarif.json");

SarifFiles.insert(checkmarx);
