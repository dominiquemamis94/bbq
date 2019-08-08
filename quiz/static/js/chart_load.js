update_radar();

setInterval(function() {
  update_charts('positive');
  update_charts('negative');
}, 2000);

setInterval(function() {
  update_radar();
}, 10000);




  function update_charts(id){
  if (id == 'positive'){
      $.ajax({
            url: "positive_pie_api",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                one = 0;
                two = 0;
                three = 0;
                title  = ['Topic', 'Count'];
                dataset = [];
                dataset.push(title);
                text = "";
              for(var i=0; i< res.length; i++){
                if(res[i].fields.topic == 1){ one ++;
                }else if(res[i].fields.topic == 2){two ++
                }else{three++;
                }
                text += " "+res[i].fields.remark;
              }
              dataset.push(['Variables', one]);
              dataset.push(['Conditional Statments', two]);
              dataset.push(['Loops', three]);
                draw_pie('easy_pie', dataset);
                draw_cloud('positive_cloud', text);
            }
        });
    }else{
      $.ajax({
            url: "negative_pie_api",
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                                one = 0;
                two = 0;
                three = 0;
                title  = ['Topic', 'Count'];
                dataset = [];
                dataset.push(title);
                text = "";
              for(var i=0; i< res.length; i++){
                if(res[i].fields.topic == 1){ one ++;
                }else if(res[i].fields.topic == 2){two ++
                }else{three++;}
                text += " "+res[i].fields.remark;
              }
              dataset.push(['Variables', one]);
              dataset.push(['Conditional Statments', two]);
              dataset.push(['Loops', three]);
              
                draw_pie('hard_pie', dataset);
                draw_cloud('negative_cloud', text);
            }
        });
    }
  }

  function update_radar(){
      $.ajax({
              url: "radar_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                  labels = ['Data Engineering','Data Science','Machine Learning',
                  'Data Analysis', 'Software Dev', 'Business Analysis'];
                  data = []
                for(var i = 0; i< res.length; i++){
                  scores = [res[i].fields.de, res[i].fields.ds, res[i].fields.ml, res[i].fields.da,
                            res[i].fields.dev, res[i].fields.ba];
                  data.push({values: scores});
                }
                  draw_radar(labels, data);
              }
          });
  }

  function draw_pie(id, dataset){

    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable(dataset);

        var options = {
          title: 'Topics',
          pieHole: 0.4,

        };

        var chart = new google.visualization.PieChart(document.getElementById(id));
        chart.draw(data, options);
      }
  }
