import {Template} from "meteor/templating";

Template.tabs.events({

  "click .tabHeader": function(e){
      // Mark other tabs as inactive.
      var headers = e.target.parentElement.getElementsByClassName("tabHeader");
      for (i = 0; i < headers.length; i++) {
        headers[i].className = headers[i].className.replace(" active", "");
      }

      // Mark tab as active.
      e.target.className += " active";

      // Make the other contents invisible.
      for (i = 0; i < this.tabData.length; i++) {
        var tabElement = document.getElementById(this.tabData[i].id);
        tabElement.style.display = "none";
      }
      var tabElement = document.getElementById(e.target.getAttribute("tabId"));

      // Place the content in the main container.
      var tabContainer = e.target.parentElement.parentElement.getElementsByClassName("tabContent")[0];
      tabContainer.appendChild(tabElement);

      // Make the content visible.
      tabElement.style.display = "block";

  },
});
