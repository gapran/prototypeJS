import { Template } from "meteor/templating";

Template.codeEditor.helpers({
    inc(nb) {
        return ++nb;
    },

    addWarnings(index) {
        // Merge warning of the same type together.
        var warningMap = {};
        var i;
        for(i = 0; i < this.warnings.length; i++) {
            var warning = this.warnings[i];
            if(warning.lineNumber === index+1) {
                var tooltip = warning.description;
                if(warning.type in warningMap){
                    warningMap[warning.type] += "\n- " + tooltip;
                } else {
                    warningMap[warning.type] = "- " + tooltip;
                }
            }
        }

        // Create warning icons.
        var warningString = "";
        var type;
        for (type in warningMap) {
            warningString += "<span class=\" warningIcon " + type+
                "\" title=\""+ warningMap[type] +"\"></span>";
        }
        return warningString;
    }
});
