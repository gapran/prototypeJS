import {Template} from "meteor/templating";

Template.barChart.rendered = function (){

   var ctx = document.getElementById(this.data.id).getContext("2d");
   var myChart = new Chart(ctx, {
           type: "bar",
           data: {
               labels: this.data.labels,
               datasets: [{
                   label: this.data.title, // Name the series
                   data: this.data.data, // Specify the data values array
                   backgroundColor: [ // Specify custom colors
                       "rgba(255, 99, 132, 0.6)",
                       "rgba(54, 162, 235, 0.6)",
                       "rgba(255, 206, 86, 0.6)",
                       "rgba(75, 192, 192, 0.6)",
                       "rgba(153, 102, 255, 0.6)",
                       "rgba(255, 159, 64, 0.6)"
                   ],
                   borderColor: [
                       "rgba(255,99,132,1)",
                       "rgba(54, 162, 235, 1)",
                       "rgba(255, 206, 86, 1)",
                       "rgba(75, 192, 192, 1)",
                       "rgba(153, 102, 255, 1)",
                       "rgba(255, 159, 64, 1)"
                   ],
                   borderWidth: 1
               }]
           },
           options: {
                       responsive: true,
                       maintainAspectRatio: false,
                       scales :    {
                                       yAxes: [
                                           {
                                               ticks:
                                               {
                                                   min: 0,
                                                   max: 100,
                                                   stepSize: 10
                                               }
                                           }]
                                   }
                   }
       });
};