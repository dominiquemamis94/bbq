
$( "#submit" ).click(function() {
  var selected_area = document.getElementById('area_select').value;
  var selected_gred_group = document.getElementById('gred_group_select').value;
  var selected_division = document.getElementById('division_select').value;
  var selected_rv_cluster = document.getElementById('rv_cluster').value;
  var selected_tl_cluster = document.getElementById('tl_cluster').value;
  var selected_c_cluster = document.getElementById('c_cluster').value;
  var selected_participation = document.getElementById('participation').value;

  
    $.ajax({
              url: "dashboard_frequency_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][1]]);
                }
                draw_bar(data, 'dashboard_frequency', '', 'Count of Survey Participants', 'Frequency');
              }
          });

      $.ajax({
              url: "dashboard_tools_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                   data =[['Tool', 'Uses the tool', { role: 'annotation' }, 'Undefined', 'Never']];// 'Once in a while', 'Monthly', 'Daily', 'Weekly']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0],
              (res[i][3]+ res[i][4]+ res[i][5]+ res[i][6]),
              ((res[i][3]+ res[i][4]+ res[i][5]+ res[i][6])/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] )*100).toFixed(1),
                     res[i][1], 
                      res[i][2]
                       ]);
                }
                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#C9DECB"},
                2:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'dashboard_tools', '', 'Dashboarding/Reporting Tools', colors);
              }
          });

        $.ajax({
              url: "excel_tools_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                  data =[['Tool', 'Uses the tool', { role: 'annotation' }, 'Undefined', 'Never']];// 'Once in a while', 'Monthly', 'Daily', 'Weekly']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0],
              (res[i][3]+ res[i][4]+ res[i][5]+ res[i][6]),
              ((res[i][3]+ res[i][4]+ res[i][5]+ res[i][6])/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] )*100).toFixed(1),
                     res[i][1], 
                      res[i][2]
                       ]);
                }
                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#C9DECB"},
                2:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'excel_tools', '', 'Excel Tools', colors);
              }
          });

          $.ajax({
              url: "excel_techniques_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                 data =[['Tool', 'Uses the tool', { role: 'annotation' }, 'Undefined', 'Never']];// 'Once in a while', 'Monthly', 'Daily', 'Weekly']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0],
              (res[i][3]+ res[i][4]+ res[i][5]+ res[i][6]),
              ((res[i][3]+ res[i][4]+ res[i][5]+ res[i][6])/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] )*100).toFixed(1),
                     res[i][1], 
                      res[i][2]
                       ]);
                }
                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#C9DECB"},
                2:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'excel_techniques', '', 'Excel Techniques', colors);
              }
          });

            $.ajax({
              url: "advanced_techniques_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                  data =[['Tool', 'Uses the tool', { role: 'annotation' }, 'Undefined', 'Never']];// 'Once in a while', 'Monthly', 'Daily', 'Weekly']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0],
              (res[i][3]+ res[i][4]+ res[i][5]+ res[i][6]),
              ((res[i][3]+ res[i][4]+ res[i][5]+ res[i][6])/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] )*100).toFixed(1),
                     res[i][1], 
                      res[i][2]
                       ]);
                }
                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#C9DECB"},
                2:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'advanced_techniques', '', 'Advanced Data Exploration Techniques', colors);
              }
          });

              $.ajax({
              url: "programming_frequency_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                 data =[['Tool', 'Uses the tool', { role: 'annotation' }, 'Undefined', 'Never']];// 'Once in a while', 'Monthly', 'Daily', 'Weekly']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0],
              (res[i][3]+ res[i][4]+ res[i][5]+ res[i][6]),
              ((res[i][3]+ res[i][4]+ res[i][5]+ res[i][6])/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] )*100).toFixed(1),
                     res[i][1], 
                      res[i][2]
                       ]);
                }

                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#C9DECB"},
                2:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'programming_frequency', '', 'Programming Languages/Tools', colors);
              }
          });


                $.ajax({
              url: "ml_techniques_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                  data =[['Tool', 'Uses the tool', { role: 'annotation' }, 'Undefined', 'Never']];// 'Once in a while', 'Monthly', 'Daily', 'Weekly']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0],
              (res[i][3]+ res[i][4]+ res[i][5]+ res[i][6]),
              ((res[i][3]+ res[i][4]+ res[i][5]+ res[i][6])/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] )*100).toFixed(1),
                     res[i][1], 
                      res[i][2]
                       ]);
                }
                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#C9DECB"},
                2:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'ml_techniques', '', 'Machine Learning Techniques', colors);
              }
          });


            $.ajax({
              url: "programming_competence_api",
              type: 'GET',
              dataType: 'json', // added data type
              data: {
                area: selected_area,
                gred_group: selected_gred_group,
                division: selected_division,
                rv_cluster: selected_rv_cluster,
                tl_cluster: selected_tl_cluster,
                c_cluster: selected_c_cluster,
                participation: selected_participation,
              },
              success: function(res) {
                 data =[['Tool', //'Undefined', 'None of the above',{ role: 'annotation' },
                 'Expert, and able to train others', 'Expert', 'Able, but requires support occasionally',
                  'Able, but requires support',   'Basic / beginner', 'Undefined', 'None of the above' ]];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], //res[i][1], res[i][2],((res[i][2]/(res[i][1] + res[i][2] + res[i][3] + res[i][4] + res[i][5] + res[i][6] + res[i][7]))*100).toFixed(1), 
                     res[i][4], res[i][5], res[i][7],
                     res[i][3], res[i][6], res[i][1], res[i][2] ]);
                }
                 colors ={
                0:{color: "#27DE55"},
                1:{color: "#7CEB98"},
                2:{color: "#A4F0B7"},
                3:{color: "#FFA04A"},
                4:{color: "#FFF284"},
                5:{color: "#ECF4FF"},
                6:{color: "#CFCFC4"}
              };
                draw_bar_stacked(data, 'programming_competency', '', 'Programming Languages/Tools',colors);
              }
          });

  


});