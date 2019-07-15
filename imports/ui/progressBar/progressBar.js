import {Template} from "meteor/templating";

    Template.progressBar.helpers({
        Progress()
        {
            return this.val;
        },
        Percent()
        {
            return this.val * 100 / (this.max - this.min);
        },
    });
