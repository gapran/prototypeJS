import { Template } from "meteor/templating";

Template.codeEditor.helpers({
    inc(nb) {
        return ++nb;
    },

    addWarnings(index) {
        var warningString = "";
        var i;
        for(i = 0; i < this.warnings.length; i++) {
            if(this.warnings[i].lineNumber === index+1) {
                warningString += "<span class=\" warningIcon " + this.warnings[i].type + "\"></span>";
            }
        }
        return warningString;
    }
});
