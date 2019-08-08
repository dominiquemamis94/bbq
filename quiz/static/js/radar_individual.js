  $.ajax({
              url: "radar_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 labels = ['Descriptive Statistics G1','Descriptive Statistics G2','Descriptive Statistics G3',
                  'Inferential Statistics G1', 'Inferential Statistics G2', 'Inferential Statistics G3'
                  ];
                  labels2 = ['Python for Analytics: Advanced G1', 'Python for Analytics: Advanced G2', 'Python for Analytics: Advanced G3',
                  'Python for Analytics: Basic G1', 'Python for Analytics: Basic G2', 'Python for Analytics: Basic G3'];
                  py_data = [];
                  stat_data = [];
                for(var i = 0; i< res.length; i++){
                  py_scores = [res[i].fields.py1, res[i].fields.py2, res[i].fields.py3, 
                              res[i].fields.py4, res[i].fields.py5,res[i].fields.py6];
                  stat_scores = [res[i].fields.stat1, res[i].fields.stat2, res[i].fields.stat3, 
                                res[i].fields.stat4, res[i].fields.stat5 ,res[i].fields.stat6];
                  py_data.push({values: py_scores});
                  stat_data.push({values: stat_scores});
                }
                  draw_radar('statchart', labels, stat_data);
                  draw_radar('pythonchart', labels2, py_data);
              }
          });

function draw_radar(targetId, labels, data){
var myConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values :  '0:5:1',
    labels : labels,
    item : {
      fontColor : '#607D8B',
      fontsize: '9px',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : data,
};
 
zingchart.render({ 
	id : targetId, 
	data : myConfig, 
	height: 350, 
});
}

$('select').on('change', function() {
    $.ajax({
              url: "profile_chart_api",
              type: 'GET',
              data: {
                name: this.value,
              },
              dataType: 'json', // added data type
                success: function(res) {
                 labels = ['Descriptive Statistics G1','Descriptive Statistics G2','Descriptive Statistics G3',
                  'Inferential Statistics G1', 'Inferential Statistics G2', 'Inferential Statistics G3'];
                  labels2 = ['Python for Analytics: Advanced G1', 'Python for Analytics: Advanced G2', 'Python for Analytics: Advanced G3',
                  'Python for Analytics: Basic G1', 'Python for Analytics: Basic G2', 'Python for Analytics: Basic G3'];
                  py_data = [];
                  stat_data = [];
                for(var i = 0; i< res.length; i++){
                  py_scores = [res[i].fields.py1, res[i].fields.py2, res[i].fields.py3, 
                              res[i].fields.py4, res[i].fields.py5,res[i].fields.py6];
                  stat_scores = [res[i].fields.stat1, res[i].fields.stat2, res[i].fields.stat3, 
                                res[i].fields.stat4, res[i].fields.stat5 ,res[i].fields.stat6];
                  py_data.push({values: py_scores});
                  stat_data.push({values: stat_scores});
                }
                  draw_radar('statchart', labels, stat_data);
                  draw_radar('pythonchart', labels2, py_data);
              }
          });
});