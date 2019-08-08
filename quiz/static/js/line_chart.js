function draw_line(data, id, title_text){
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(data);

        var options = {
            chartArea: {width: '100%', height: '100%'},
          chart: {
            title: title_text,
            subtitle: '',
          }, 

        };

        var chart = new google.charts.Bar(document.getElementById(id));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
      )