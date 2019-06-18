import {Template} from "meteor/templating";

Template.tabs.events({

  "click .tabHeader"(e){
    var headers = e.target.parentElement.getElementsByClassName("tabHeader");
    selectTab(headers, e.target, this.tabData);
  },
});

Template.tabs.rendered = function (){
    var headers = document.getElementById(this.data.id).getElementsByClassName("tabHeader");
    var targetElement = headers[0];
    var i;
    for (i = 0; i < headers.length; i++) {
        if(headers[i].getAttribute("tabId") === this.data.defaultTab)
            targetElement = headers[i];
    }
    selectTab(headers, targetElement, this.data.tabData);
};

function selectTab(headerElements, targetElement, tabData){
    var i;
    for (i = 0; i < headerElements.length; i++) {
        var headerStyle = headerElements[i].className;
        headerElements[i].className = headerStyle.replace(" active", "");
    }

    // Mark tab as active.
    targetElement.className += " active";

    // Make the other contents invisible.
    for (i = 0; i < tabData.length; i++) {
        var tabElement = document.getElementById(tabData[i].id);
        tabElement.style.display = "none";
    }

    // Place the content in the main container.
    var mainElement = document.getElementById(targetElement.getAttribute("tabId"));
    var tabContainer = targetElement.parentElement.parentElement.getElementsByClassName("tabContent")[0];
    tabContainer.appendChild(mainElement);

    // Make the content visible.
    mainElement.style.display = "block";
}
