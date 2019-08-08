// 
function draw_bar(data_table, id, title_text, x_label, y_label){
google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(data_table);

        var options = {
            chartArea: {width: '60%', height: '80%', right:50},
            title: title_text,
          vAxis: { title: y_label },
          hAxis: { title: x_label },
          legend: {position: 'none'},
            titleTextStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          series:{
                0:{color: '#2F74D0'},
                1:{color: '#FF4848'},
              },
          height: 300,
        };

        var chart = new google.visualization.BarChart(document.getElementById(id));
        chart.draw(data, options);
      }
}


function draw_bar_stacked(data_table, id, title_text, y_label, colors = 0){
google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(data_table);
        var options;
        if (colors ==0){
            options = {
                chartArea: {width: '80%', height: '80%', right:50}, 
                title: title_text,
                isStacked: 'percent',
              vAxis: { title: y_label },
              legend: {position: 'bottom'},
                titleTextStyle: {
                bold: true,
                fontSize: 12,
              },
              height: 380,
            };
      }else{
         options = {
                chartArea: {width: '60%', height: '80%', right:50}, 
                title: title_text,
                isStacked: 'percent',
              vAxis: { title: y_label },
              legend: {position: 'bottom'},
                titleTextStyle: {
                bold: true,
                fontSize: 12,
              },
              height: 380,
              series:colors,
            };

      }

        var chart = new google.visualization.BarChart(document.getElementById(id));
        chart.draw(data, options);
      }
}


function draw_bar_stacked_counts(data_table, id, title_text, y_label, colors = 0){
google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(data_table);
        var options;
        if (colors ==0){
            options = {
                chartArea: {width: '80%', height: '80%'}, 
                title: title_text,
                isStacked: true,
              vAxis: { title: y_label },
              legend: {position: 'bottom'},
                titleTextStyle: {
                bold: true,
                fontSize: 12,
              },
              height: 380,
            };
      }else{
         options = {
                chartArea: {width: '60%', height: '80%'}, 
                title: title_text,
                isStacked: true,
              vAxis: { title: y_label },
              legend: {position: 'bottom'},
                titleTextStyle: {
                bold: true,
                fontSize: 12,
              },
              height: 380,
              series:colors,
            };

      }

        var chart = new google.visualization.BarChart(document.getElementById(id));
        chart.draw(data, options);
      }
}


function draw_donut(data_table, id, title_text){
   google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(data_table);

        var options = {
          legend: {position: 'right'},
          pieHole: 0.2,
          chartArea: {width: '100%', height: '80%'},
          slices:{
                0:{color: '#2F74D0'},
                1:{color: '#FF4848'},
              },
              fontSize: 12,
        };

        var chart = new google.visualization.PieChart(document.getElementById(id));
        chart.draw(data, options);
      }
}



function draw_group_bar(data_table, id, title_text, x_label, y_label){
google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(data_table);

        var options = {
            chartArea: {width: '60%', height: '80%', right:50},
            title: title_text,
             vAxis: { title: y_label },
          hAxis: { title: x_label },
            height: 380,
          legend: {position: 'bottom'},
            titleTextStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          series:{
                0:{color: '#2F74D0'},
                1:{color: '#FF4848'},
              },
        };

        var chart = new google.visualization.BarChart(document.getElementById(id));
        chart.draw(data, options);
      }
}


function draw_line(data_table, id, title_text, x_label, y_label){
google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawChart);
 function drawChart() {
        var data = google.visualization.arrayToDataTable(data_table);
        var options = {
          chartArea: {width: '90%', height: '50%', top:30},
          title: title_text,
          legend: { position: 'bottom' },
            vAxis: { title: y_label },
          hAxis: { title: x_label,  },
            height: 500,
            pointSize: 10,
        };

        var chart = new google.visualization.LineChart(document.getElementById(id));

        chart.draw(data, options);
      }
}


function draw_timeline(data_table, id){
  google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    var container = document.getElementById(id);
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Participation' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows(data_table);

    var options = {
      timeline: { colorByRowLabel: true },
      height: 450,
    };

    chart.draw(dataTable, options);
  }

}