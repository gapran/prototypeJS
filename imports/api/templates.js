import {Template} from "meteor/templating";

// https://github.com/Progressor/ProgressorMeteor/tree/6b627ea0580324603a70b1303485c6edad6fd26b

// This allows us to write inline objects in Blaze templates
// like so: {{> template param=(object key="value") }}
// => The template's data context will look like this:
// { param: { key: "value" } }
Template.registerHelper('object', function({ hash }) {
  return hash;
});

// This allows us to write inline arrays in Blaze templates
// like so: {{> template param=(array 1 2 3) }}
// => The template's data context will look like this:
// { param: [1, 2, 3] }
Template.registerHelper('array', function() {
  return Array.from(arguments).slice(0, arguments.length-1);
});