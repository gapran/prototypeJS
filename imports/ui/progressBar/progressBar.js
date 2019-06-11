import { Template } from "meteor/templating";

    Template.progressBar.helpers({
        Progress : function()
        {
            return this.val;
        },
        Percent : function()
        {
            return this.val * 100 / (this.max - this.min);
        },
    });
