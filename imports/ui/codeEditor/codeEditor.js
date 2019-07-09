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
            if (warningMap.hasOwnProperty(type)) {
                warningString += "<span class=\" warningIcon " + type+
                    "\" title=\""+ warningMap[type] +"\"></span>";
            }
        }
        return warningString;
    }
});

Template.codeEditor.events({
    "click .warningIcon"(e, template) {
        if(typeof template.data.callbacks !== "undefined" &&
            typeof template.data.callbacks.iconClickCallback !== "undefined"){
            template.data.callbacks.iconClickCallback.call(e.target);
        }
    },
});
