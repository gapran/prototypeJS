import {Template} from "meteor/templating";

Template.tabs.events({

  "click .tabHeader"(e){

      // Mark other tabs as inactive.
      var headers = e.target.parentElement.getElementsByClassName("tabHeader");
      for (var i = 0; i < headers.length; i++) {
        var headerStyle = headers[i].className;
        headers[i].className = headerStyle.replace(" active", "");
      }

      // Mark tab as active.
      e.target.className += " active";

      // Make the other contents invisible.
      for (var i = 0; i < this.tabData.length; i++) {
        var tabElementId = this.tabData[i].id;
        var tabElement = document.getElementById(tabElementId);
        tabElement.style.display = "none";
      }

      // Place the content in the main container.
      var mainElement = document.getElementById(e.target.getAttribute("tabId"));
      var tabContainer = e.target.parentElement.parentElement.getElementsByClassName("tabContent")[0];
      tabContainer.appendChild(mainElement);

      // Make the content visible.
      mainElement.style.display = "block";
  },
});
