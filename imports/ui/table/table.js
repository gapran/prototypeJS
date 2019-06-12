import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";


Template.tableHeader.rendered = function () {

    console.log(this.data.heads);
    console.log(this.data.keyNames);
    console.log(this.data.keyNames[0]);

    var keyNamesFull;
    keyNamesFull = "";

    for (let i = 0; i < this.data.keyNames.length; i++) {

        keyNamesFull = keyNamesFull + " <td>{{" + this.data.keyNames[i] + "}}</td> ";
    }

    console.log(keyNamesFull);
};


Template.bugsListRow.helpers({

    keyValue() {
        //document.getElementById("keyName").innerHTML("<td>{{+keyNames[0]+}}</td>");

        const hello = "{{status}}";

        return hello;
    }
});

Template.bodyComponent.helpers({

    bugsList() {
        return Projects.find({name: {$exists: true}}, {sort: {Progress: 1}});
    }
});