import {Template} from "meteor/templating";

function chat(textarea, inputElement, discussionElement) {
    if(inputElement.value === "") {
        inputElement.className += " missingFormData";
    } else {
        inputElement.className = inputElement.className.replace(" missingFormData", "");
        var text = textarea.value.replace(/<[^>]*>?/gm, "").replace(/(\r\n|\n|\r)/gm, "");
        if(text !== ""){
            discussionElement.innerHTML += "<br /> &gt; " + text;
        }
        textarea.value = "";
    }
}

Template.mobilechat.events({

    "click .send"(e, template) {
        chat(e.target.parentElement.getElementsByTagName("TEXTAREA")[0],
            e.target.parentElement.getElementsByTagName("INPUT")[0],
            document.getElementById(template.data.id));
    },

    "keypress textarea"(e, template) {
        if (e.which === 13) {
            chat(e.target,
                e.target.parentElement.getElementsByTagName("INPUT")[0],
                document.getElementById(template.data.id));
        }
    },
    "click .backbtn"() {
        Session.set("templateName", "prototype4");
      }
});