import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";


Template.tableHeader.rendered = function () {

    console.log(this.data.heads);
    console.log(this.data.keys);
};


Template.bugsListRow.helpers({

    bugsListRowKey() {
        return "{{status}}";
    }
});

Template.bodyComponent.helpers({

    bugsList() {
        return Projects.find({name: {$exists: true}}, {sort: {Progress: 1}});
    }
});