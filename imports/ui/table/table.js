import { Projects } from "../../api/projects.js";
import { Template } from "meteor/templating";

Template.bodyCom.helpers({
  errorList()
  {
      return Projects.find({},{sort: {Progress: 1} });
  }
});

