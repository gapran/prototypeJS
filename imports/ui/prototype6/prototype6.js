// Libraries

import {Template} from "meteor/templating";
// Prototype 6
import "./prototype6.html";


Template.prototype6.events({

    "click .btn-right-group": function (event) {

        // Prevent default browser form submit
        event.preventDefault();

        // Get value from element
        const target = event.target;
        const text = target.innerText;
        console.log(text);

        if (text === "User Profile") {

            // console.log("hello");
            // window.location.href = '/profile';
        }
    }

});