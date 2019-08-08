//dashboard_frequency
  $.ajax({
              url: "dashboard_frequency_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][1]]);
                }
                draw_bar(data, 'dashboard_frequency', '', 'Count of Survey Participants', 'Frequency');
              }
          });

//dashboard_tools
  $.ajax({
              url: "dashboard_tools_api",
              type: 'GET',
              dataType: 'json', // added data type
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

//excel tools
  $.ajax({
              url: "excel_tools_api",
              type: 'GET',
              dataType: 'json', // added data type
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

//excel techniques
  $.ajax({
              url: "excel_techniques_api",
              type: 'GET',
              dataType: 'json', // added data type
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

//advanced techniques
  $.ajax({
              url: "advanced_techniques_api",
              type: 'GET',
              dataType: 'json', // added data type
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

//programming frequency
  $.ajax({
              url: "programming_frequency_api",
              type: 'GET',
              dataType: 'json', // added data type
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

//ml techniques
  $.ajax({
              url: "ml_techniques_api",
              type: 'GET',
              dataType: 'json', // added data type
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

//programming competence
  $.ajax({
              url: "programming_competence_api",
              type: 'GET',
              dataType: 'json', // added data type
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

