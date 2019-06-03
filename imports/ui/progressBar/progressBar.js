import { Template } from "meteor/templating";


    Template.progressBar.helpers({
        Progress : function()
        {
            return "70%";
        },
    });
