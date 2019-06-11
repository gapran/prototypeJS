import { Projects } from "../../api/projects.js";
import { Template } from "meteor/templating";

Template.bodyComponent.helpers({
  bugsList()
  {
      return Projects.find({},{sort: {Progress: 1} });
  }
});

