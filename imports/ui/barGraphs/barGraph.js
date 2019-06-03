
window.onload = function()
{

    var ctx = this.document.getElementById("myChart").getContext('2d');

    var data = ['20','40','50','80','95']; // Add data values to array

    var labels = ["Bronze", "Silver",	"Gold",	"Master", "Profesional"]; // Add labels to array
    // End Defining data


    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Proficiency Level', // Name the series
                data: data, // Specify the data values array
                backgroundColor: [ // Specify custom colors
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [ 
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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


}