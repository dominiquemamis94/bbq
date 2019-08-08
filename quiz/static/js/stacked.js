function draw_stack(headers, data_table, target_id, title_text, subtext, x_label){
var myConfig = {
    "graphset": [
        {   
            "type": "bar",
            // "background-color": "#343856 #212339",
            "fill-angle": 45,
            "stacked": true,
            "stack-type": "100%",
            "title": {
                "text": title_text,
                "text-align": "left",
                "font-family": "Arial",
                "font-size": "14px",
                "font-color": "#fff",
                "background-color": "none",
                "padding": "5px 0 0 50px",
                "height": "40px"
            },
            "legend": {
                "toggle-action": "remove",
                // "background-color": "#31344c",
                "border-width": 0,
                "border-color": "none",
                "padding": "10px 5px",
                "y": "75px",
                "shadow": 0,
                "item": {
                    // "font-color": "#fff",
                    "font-family": "Arial",
                    "font-size": "10px",
                    "font-weight": "normal",
                    "alpha": 0.6
                },
                "header": {
                    "text": subtext,
                    "font-family": "Arial",
                    "font-size": "10px",
                    "font-color": "#fff",
                    "background-color": "#212339",
                    "border-width": 0,
                    "border-color": "none",
                    "height": "30px",
                    "padding": "5px 10px"
                }
            },
            "plotarea": {
                "margin": "75px 180px 130px 30px"
            },
            "plot": {
                "alpha": 0.8,
                "bar-width": "25px",
                "hover-state": {
                    "background-color": "#212339",
                    "alpha": 1
                },
                "animation": {
                    "delay": 250,
                    "effect": 3,
                    "speed": "1000",
                    "method": "0",
                    "sequence": "1"
                }
            },
            "scale-x": {
                "values": headers,
                "items-overlap": true,

                "line-color": "#53566f",
                "tick": {
                    "line-color": "#53566f"
                },
                "guide": {
                    "visible": false
                },
                "item": {
                    "font-color": "#9a9cab",
                    "font-family": "Arial",
                    "font-size": "10px",
                    "font-angle": -48,
                    "offset-x": "5px"
                },
             "label": {
                  "text": x_label,
                  "fontSize": 12,
                  "fontStyle": 'normal',
                  "fontWeight": 'normal',
                  "padding": '5px 20px'
                }
            },
            "scale-y": {
                "line-color": "#53566f",
                "tick": {
                    "line-color": "#53566f"
                },
                "guide": {
                    "line-style": "solid",
                    "line-color": "#53566f",
                    "line-width": "1px",
                    "alpha": 0.4
                },
                "item": {
                    "font-color": "#9a9cab",
                    "font-family": "Arial",
                    "font-size": "10px",
                    "padding": "3px"
                }
            },
            "series": data_table
        }

    ]
};
 
zingchart.render({ 
	id : target_id, 
	data : myConfig, 
    width: 600,
    height: 400,
});
}