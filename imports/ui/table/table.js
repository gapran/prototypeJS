import { Projects } from "../../api/projects.js";
import { Template } from "meteor/templating";

Template.bodyCom.helpers({
  'errorList': function(){
      return Projects.find({},{sort: {Progress: 1} });
    }
});

