
$('document').ready(function(){
  update_charts();
});

function update_charts(){


  $.ajax({
              url: "get_desc_scores",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data = [['Subject', 'Min', 'Avg', 'Max']];
                 for(var i=0; i< res.length; i++){
                  data.push([res[i][0], res[i][1], res[i][2], res[i][3]]);
                }
                draw_bar('avg', data);
              }
          });


    $.ajax({
              url: "get_timeline",
              type: 'GET',
              dataType: 'json', // added data type
              data:{
                subject: 'Anaphy'
              },
              success: function(res) {
                 data = [['Date', 'Score']];
                 for(var i=0; i< res.length; i++){
                  var parts = res[i][0].split('-');
                  var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
                  data.push([mydate, res[i][1]]);
                }
                draw_line('Anaphy', data);
              }
          });



    $.ajax({
              url: "get_timeline",
              type: 'GET',
              dataType: 'json', // added data type
              data:{
                subject: 'Biochemistry'
              },
              success: function(res) {
                 data = [['Date', 'Score']];
                 for(var i=0; i< res.length; i++){
                  var parts = res[i][0].split('-');
                  var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
                  data.push([mydate, res[i][1]]);
                }
                draw_line('Biochemistry', data);
              }
          });


}


$( "#submit" ).click(function() {
      update_charts();
});



function draw_bar(id, dataset){
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataset);

        var options = {
          chart: {
            title: 'Review Performance',
          },
          bars: 'vertical' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById(id));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

}

function draw_line(id, dataset){
  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataset);

        var options = {
          title: id,
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById(id));

        chart.draw(data, options);
}
}