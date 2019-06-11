import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";

Template.bodyComponent.helpers({
    bugsList() {
        return Projects.find({name: {$exists: true}}, {sort: {Progress: 1}});
    }
});

Template.headerComponent.helpers(
    {
        headersList() {
            return Projects.find({header: {$exists: true}});
        }

    });