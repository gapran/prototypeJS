import {Template} from "meteor/templating";

Template.badge.events({

  click() {
      //sAlert.info("Image \"" + this.alt + "\" clicked.", {timeout: 2000});
      //var myWindow = window.open("./imports/ui/imageLayout/imageLayout.html", "_self");
      window.location.replace("/imageLayout.html");
      //location.href='imports/ui/imageLayout/imageLayout.html'
      //window.location.href = '/imageLayout.html'

      //FlowRouter.go('/imageLayout');
   },
});