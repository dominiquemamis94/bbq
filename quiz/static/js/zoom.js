function draw_zoom(headers, data_table, target_id, title_text){
var myChart = {
  "type": "bar",
  "title": {
    "text": title_text,
    "fontSize": 14
  },
  "subtitle": {
    "text": "the lower window is a controller for zooming"
  },
  "scale-x": {
     "values": headers,
    "zooming": "true",
    "zoom-to": [0,10],
  },
  "scale-y": {
    "zooming": "false"
  },
  "preview": {
    "visible": "true"
  },
  "series": [
    {
      "values": data_table
    },
  ]
};
zingchart.render({
  id: target_id,
  data: myChart,
  height: "400",
  width: "100%"
});
}