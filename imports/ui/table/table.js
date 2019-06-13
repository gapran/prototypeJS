import {Projects} from "../../api/projects.js";
import {Template} from "meteor/templating";


Template.tableHeader.rendered = function () {

    console.log(this.data.headers);
    console.log(this.data.keyNames);
    console.log(this.data.keyNames[0]);

    var keyNamesFull;
    keyNamesFull = "";

    for (let i = 0; i < this.data.keyNames.length; i++) {

        keyNamesFull = keyNamesFull + " <td>{{" + this.data.keyNames[i] + "}}</td> ";

        Session.set("keyNamesHTML", keyNamesFull);

        // return keyNamesFull;
    }
};


Template.bugsListRow.helpers({

    renderKeysHTML: function () {

        //return Session.get("keyNamesHTML");
        return "<b>{{name}}</b>";
    }
});

Template.bodyComponent.helpers({

    bugsList() {
        return Projects.find({name: {$exists: true}}, {sort: {Progress: 1}});
    }
});