// Libraries
// ...

// File

import "./project.html";
import {getTextFromFile} from "../../api/files";

import "../codeEditor/codeEditor.html";
import "../codeEditor/codeEditor.js";
import {Template} from "meteor/templating";

function getDetailedWarningsInfo(ids){
    var info = ids.length + " warning" + (ids.length === 1 ? "" : "s") + ":";
    var i;
    for(i = 0; i<ids.length; i++){
        // TODO(rashmi): retrieve detailed warning info from database.
        info += "\n- " + ids[i];
    }
    return info;
}

Template.prototype6_project.helpers({

   //code view data

    // ABCOptions editor data
    fileContents: getTextFromFile("code/ABCOptions.java"),
    warnings: [
        // TODO(rashmi): retrieve list of warnings from database.
        {id:"1234", lineNumber: 2, type:"error"},
        {id:"6783", lineNumber: 5, type:"error"},
        {id:"1209", lineNumber: 5, type:"info"},
        {id:"3497", lineNumber: 5, type:"error"},
        {id:"1011", lineNumber: 22, type:"warning"},
    ],
    codeEditorCallbacks(){
        return {
            iconClickCallback(){
                // Position of the icon.
                var warningInfoElem = document.getElementById("ABCOptionsCodeEditorWarningInfo");
                var xElem = this.elem.getBoundingClientRect().left;
                var yElem = this.elem.getBoundingClientRect().top;
                var wElem = this.elem.offsetWidth;

                // Position of the editor.
                var editorElem = document.getElementById("ABCOptionsCodeEditor");
                var xEdit = editorElem.getBoundingClientRect().left;
                var yEdit = editorElem.getBoundingClientRect().top;

                // Put warningInfo popup at the correct position.
                warningInfoElem.style.display = "block";
                warningInfoElem.style.left = (xElem-xEdit+wElem)+"px";
                warningInfoElem.style.top = (yElem-yEdit+20)+"px";

                // Add warning data to warningInfo popup.
                var textElem = warningInfoElem.getElementsByTagName("DIV")[0];
                textElem.innerText = getDetailedWarningsInfo(this.data.ids);
            },
            iconTooltipCallback(){
                // TODO(rashmi): retrieve basic warning info from database.
                return "Tooltip for " + this.ids;
            }
        };
    }

});

Template.prototype6_project.events({
    "click .close"(e) {
        e.target.parentElement.style.display = "none";
    },
});