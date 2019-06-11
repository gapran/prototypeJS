import {Template} from "meteor/templating";

// https://github.com/meteor/meteor/issues/5095#issuecomment-149053809

// This allows us to write inline objects in Blaze templates
// like so: {{> template param=(object key="value") }}
// => The template's data context will look like this:
// { param: { key: "value" } }
Template.registerHelper("object", function({ hash }) {
  return hash;
});

// This allows us to write inline arrays in Blaze templates
// like so: {{> template param=(array 1 2 3) }}
// => The template's data context will look like this:
// { param: [1, 2, 3] }
Template.registerHelper("array", function() {
  return Array.from(arguments).slice(0, arguments.length-1);
});