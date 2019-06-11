import {Template} from "meteor/templating";

Template.badge.events({

  click() {
      sAlert.info("Image \"" + this.alt + "\" clicked.", {timeout: 2000});
   },
});