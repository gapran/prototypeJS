import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";


Template.tableHeader.rendered = function () {

    console.log(this.data.heads);

    const headerValues = this.data.heads;

    headerValues.forEach(headerFunction);

};

function headerFunction() {
}

Template.bodyComponent.helpers({
    bugsList() {

        return Projects.find({name: {$exists: true}}, {sort: {Progress: 1}});
    }
});

// Template.headerComponent.helpers(
//     {
//         // headersList() {
//         //     return Projects.find({header: {$exists: true}});
//         // }
//
//         headersList(){
//             return headersConst;
//         }
//     });