// $(document).ready(function() {
//     $('#participants_info').DataTable();
// } );
//Area
  $.ajax({
              url: "area_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][1]]);
                }
                draw_bar(data, 'area_chart', 'Area Distribution', 'Count of Survey Participants', 'Area');
              }
          });


//Gred
  $.ajax({
              url: "gred_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][1]]);
                }
                draw_bar(data, 'gred_group', 'GRED Group Distribution', 'Count of Survey Participants', 'GRED');
              }
          });
//count
    $.ajax({
              url: "participant_count_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                value = res[0][1];
                $( "#participant_count" ).text(value);
              }
          });
//Age
  $.ajax({
              url: "age_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1]]);  
                    }else{
                   
                    data.push([res[i][0], res[i][1], res[i][1]]);
                  }
                }

                draw_bar(data, 'age_chart', 'Age Distribution',  'Count of Survey Participants', 'Age Group');
              }
          });

  //Gender
  $.ajax({
              url: "gender_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count'],] 
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1]]);
                }
                draw_donut(data, 'gender_chart', 'Gender Distribution');
              }
          });

//participation
  $.ajax({
              url: "participation_counts_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count'],] 
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1]]);
                }
                draw_donut(data, 'participation_chart', 'Participation Distribution');
              }
          });

//position_level  
$.ajax({
              url: "position_level_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1]]);
                  }
                }
                draw_bar(data, 'level_chart', 'Position Level Distribution',  'Count of Survey Participants', 'Position Level');
              }
          });

//education  
$.ajax({
              url: "education_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
              if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1]]);
                  }                }
                draw_bar(data, 'education_chart', 'Education Level Distribution',  'Count of Survey Participants', 'Education Level');
              }
          });

//area division  
$.ajax({
              url: "area_division_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                data =[['Field', 'EDA', { role: 'annotation' }, 'EDP', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
              if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1], res[i][2], res[i][2]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1], res[i][2], res[i][2]]);  
                  }               
                   }
                draw_group_bar(data, 'area_division', 'Area Division Distribution',  'Count of Survey Participants', 'Area');
              }
          });

//age division  
$.ajax({
              url: "age_division_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                 data =[['Field', 'EDA', { role: 'annotation' }, 'EDP', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
              if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1], res[i][2], res[i][2]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1], res[i][2], res[i][2]]);  
                  }                
                }
                draw_group_bar(data, 'age_division', 'Age Division Distribution',  'Count of Survey Participants', 'Age Group');
              }
          });
//gender division  
$.ajax({
              url: "gender_division_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                   data =[['Field', 'EDA', { role: 'annotation' }, 'EDP', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
              if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1], res[i][2], res[i][2]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1], res[i][2], res[i][2]]);  
                  }                
                }
                draw_group_bar(data, 'gender_division', 'Gender Division Distribution',  'Count of Survey Participants', 'Gender');
              }
          });
//pos_level division  
$.ajax({
              url: "pos_level_division_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                   data =[['Field', 'EDA', { role: 'annotation' }, 'EDP', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
              if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1], res[i][2], res[i][2]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1], res[i][2], res[i][2]]);  
                  }        
                     }
                draw_group_bar(data, 'pos_level_division', 'Position Level Division Distribution',  'Count of Survey Participants', 'Position Level');
              }
          });

//field
$.ajax({
              url: "field_chart_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                  data =[['Field', 'Count', { role: 'annotation' }]] 
                for(var i=0; i< res.length; i++){
                    if (res[i][0] ==''){
                      data.push(['Undefined', res[i][1], res[i][1]]);  
                    }else{
                    data.push([res[i][0], res[i][1], res[i][1]]);
                  }
                }
                draw_bar(data, 'field_chart', 'Field of Study Distribution',  'Count of Survey Participants', 'Field of Study');
              }
          });


$.ajax({
              url: "pl_gender_age_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
              headers =['Undefined', 'Middle management', 'Supervisor', 'Junior staff', 'Board/Sr management'];
              data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                    "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }            

              draw_stack(headers, data, 'pl_age_male', 'Male Position Level Distribution By Age', 'Age Groups', 'Position Level');
              }
          });

$.ajax({
              url: "pl_gender_age_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
              headers =['Undefined', 'Middle management', 'Supervisor', 'Junior staff', 'Board/Sr Management'];
              data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                    "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'pl_age_female', 'Female Position Level Distribution By Age', 'Age Groups', 'Position Level');
              }
          });

$.ajax({
              url: "pl_gender_education_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Middle management', 'Supervisor', 'Junior staff', 'Board/Sr Management'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'pl_edu_male', 'Male Position Level Distribution By Age', 'Educational Attainment', 'Position Level');
              }
          });

$.ajax({
              url: "pl_gender_education_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Middle management', 'Supervisor', 'Junior staff', 'Board/Sr Management'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'pl_edu_female', 'Female Position Level Distribution By Age', 'Educational Attainment', 'Position Level');
              }
          });

$.ajax({
              url: "pl_gender_field_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Middle management', 'Supervisor', 'Junior staff', 'Board/Sr Management'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'pl_field_male', 'Male Position Level Distribution By Field of Study', 'Field of Study', 'Position Level');
              }
          });

$.ajax({
              url: "pl_gender_field_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Middle management', 'Supervisor', 'Junior staff', 'Board/Sr Management'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'pl_field_female', 'Female Position Level Distribution By Field of Study', 'Field of Study', 'Position Level');
              }
          });

$.ajax({
              url: "e_gender_age_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Masters degree', 'Technical/vocational', 'Bachelors degree', 'High school'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'e_age_male', 'Male Educational Level Distribution By Age Group', 'Age Group', 'Education Level');
              }
          });

$.ajax({
              url: "e_gender_age_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Masters degree', 'Technical/vocational', 'Bachelors degree', 'High school'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'e_age_female', 'Female Educational Level Distribution By Age Group', 'Age Group', 'Education Level');
              }
          });


$.ajax({
              url: "e_gender_position_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Masters degree', 'Technical/vocational', 'Bachelors degree', 'High school'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'e_position_male', 'Male Educational Level Distribution By Position Level', 'Position Level', 'Education Level');
              }
          });

$.ajax({
              url: "e_gender_position_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Masters degree', 'Technical/vocational', 'Bachelors degree', 'High school'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'e_position_female', 'Female Educational Level Distribution By Position Level', 'Position Level', 'Education Level');
              }
          });

$.ajax({
              url: "e_gender_field_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Masters degree', 'Technical/vocational', 'Bachelors degree', 'High school'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'e_field_male', 'Male Educational Level Distribution By Field of Study', 'Field of Study', 'Education Level');
              }
          });


$.ajax({
              url: "e_gender_field_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Undefined', 'Masters degree', 'Technical/vocational', 'Bachelors degree', 'High school'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'e_field_female', 'Female Educational Level Distribution By Field of Study', 'Field of Study', 'Education Level');
              }
          });

$.ajax({
              url: "a_gender_educ_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Betong', 'Bintuli', 'Kapit', 'Kuching',
                          'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman', 'HQ'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][2], res[i][3], res[i][4], res[i][5], res[i][6],
                              res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12],res[i][13],],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'a_educ_male', 'Male Area Distribution by Educational Level', 'Educational Level', 'Area');
              }
          });

$.ajax({
              url: "a_gender_educ_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Betong', 'Bintuli', 'Kapit', 'Kuching',
                          'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman', 'HQ'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][2], res[i][3], res[i][4], res[i][5], res[i][6],
                              res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12],res[i][13],],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'a_educ_female', 'Female Area Distribution by Educational Level', 'Educational Level', 'Area');
              }
          });
$.ajax({
              url: "a_gender_position_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Betong', 'Bintuli', 'Kapit', 'Kuching',
                          'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman', 'HQ'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][2], res[i][3], res[i][4], res[i][5], res[i][6],
                              res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12],res[i][13],],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'a_pos_male', 'Male Area Distribution by Position Level', 'Educational Level', 'Area');
              }
          });
$.ajax({
              url: "a_gender_position_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Betong', 'Bintuli', 'Kapit', 'Kuching',
                          'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman', 'HQ'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][2], res[i][3], res[i][4], res[i][5], res[i][6],
                              res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12],res[i][13],],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'a_pos_female', 'Female Area Distribution by Position Level', 'Educational Level', 'Area');
              }
          });

$.ajax({
              url: "a_gender_field_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Male',
              }, // added data type
              success: function(res) {
                headers =['Betong', 'Bintuli', 'Kapit', 'Kuching',
                          'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman', 'HQ'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][2], res[i][3], res[i][4], res[i][5], res[i][6],
                              res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12],res[i][13],],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'a_field_male', 'Male Area Distribution by Field of Study', 'Field of Study', 'Area');
              }
          });

$.ajax({
              url: "a_gender_field_chart_api",
              type: 'GET',
              dataType: 'json',
              data: {
                gender: 'Female',
              }, // added data type
              success: function(res) {
                headers =['Betong', 'Bintuli', 'Kapit', 'Kuching',
                          'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman', 'HQ'];
               data= [];
              for(var i=0; i< res.length; i++){
                item = {
                    "text": res[i][0],
                   "values": [res[i][2], res[i][3], res[i][4], res[i][5], res[i][6],
                              res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12],res[i][13],],
                    "legend-item": {
                        "order": i
                    }
                }
                  data.push(item);
              }              
              // console.log(data);
              draw_stack(headers, data, 'a_field_female', 'Female Area Distribution by Field of Study', 'Field of Study', 'Area');
              }
          });

  $.ajax({
              url: "age_div_selection_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                data =[['Training', '< 25', '26 - 30', '31 - 35', '36 - 40', '41 - 45', '46 - 50', '51 - 55', '56 - 60', '> 60', 'Undefined']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][2], 
                      res[i][3], res[i][4], res[i][5], res[i][6],
                      res[i][9], res[i][8], res[i][9], res[i][10]]);
                }
                colors ={
                0:{color: '#75D6FF'},
                1:{color: '#2F74D0'},
                2:{color: '#A3FEBA'},
                3:{color: '#4AE371'},
                4:{color: '#FFFF84'},
                5:{color: '#FF9331'},
                6:{color: '#FFA4A4'},
                7:{color: '#FF5353'},
                8:{color: '#B9264F'},
                9:{color: '#BAD0EF'}
              };
                draw_bar_stacked(data, 'age_div_selection', '', 'Training', colors);
              }
          });

  $.ajax({
              url: "gender_div_selection_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                data =[['Training', 'Male', 'Female']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][2]]);
                }
                colors ={
                0:{color: '#4985D6'},
                1:{color: '#FF4848'}
              };
                draw_bar_stacked(data, 'gender_div_selection', '', 'Training', colors);
              }
          });

  $.ajax({
              url: "pos_level_div_selection_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                  data =[['Training', 'Supervisor', 'Junior staff', 'Board level / senior management', 'Middle management', 'Undefined']];
                for(var i=0; i< res.length; i++){
                      data.push([res[i][0], res[i][1], res[i][2], res[i][3], res[i][4], res[i][5]]);
                }
                draw_bar_stacked(data, 'pos_level_div_selection', '', 'Training');
              }
          });

  $.ajax({
              url: "area_level_div_selection_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                
                data =[['Training', 'Betong', 'Bintuli', 'HQ', 'Kapit', 'Kuching', 'Miri', 'Mukah', 'Samarahan', 'Sarikei', 'Serian', 'Sibu', 'Sri Aman']];
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][2], res[i][3], res[i][4], res[i][5],
                      res[i][6], res[i][7], res[i][8], res[i][9], res[i][10], res[i][11], res[i][12]]);
                }
                draw_bar_stacked(data, 'area_level_div_selection', '', 'Training');
              }
          });

  // $.ajax({
  //             url: "eda_allocation_api",
  //             type: 'GET',
  //             dataType: 'json', // added data type
  //             success: function(res) {
  //               data =[['Category', 'Betong', { role: 'annotation' }, 'Bintuli', { role: 'annotation' }, 'HQ', { role: 'annotation' }, 'Kapit', { role: 'annotation' }, 'Kuching', { role: 'annotation' }, 'Miri', { role: 'annotation' }, 
  //                    'Mukah', { role: 'annotation' },  'Samarahan', { role: 'annotation' }, 'Sarikei', { role: 'annotation' }, 'Serian', { role: 'annotation' }, 'Sibu', { role: 'annotation' }, 'Sri Aman', { role: 'annotation' }]];
  //               for(var i=0; i< res.length; i++){
  //                   data.push([res[i][0], 
  //                     res[i][1], (res[i][1]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1), 
  //                     res[i][2], (res[i][2]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][3], (res[i][3]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][4], (res[i][4]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][5], (res[i][5]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][6], (res[i][6]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][7], (res[i][7]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][8], (res[i][8]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][9], (res[i][9]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][10], (res[i][10]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][11], (res[i][11]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][12], (res[i][12]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1)
  //                     ]);
  //               }
  //               draw_bar_stacked(data, 'eda_allocation', '', 'Training');
  //             }
  //         });

  // $.ajax({
  //             url: "edp_allocation_api",
  //             type: 'GET',
  //             dataType: 'json', // added data type
  //             success: function(res) {
  //               data =[['Category', 'Betong', { role: 'annotation' }, 'Bintuli', { role: 'annotation' }, 'HQ', { role: 'annotation' }, 'Kapit', { role: 'annotation' }, 'Kuching', { role: 'annotation' }, 'Miri', { role: 'annotation' }, 
  //                    'Mukah', { role: 'annotation' },  'Samarahan', { role: 'annotation' }, 'Sarikei', { role: 'annotation' }, 'Serian', { role: 'annotation' }, 'Sibu', { role: 'annotation' }, 'Sri Aman', { role: 'annotation' }]];
  //               for(var i=0; i< res.length; i++){
  //                   data.push([res[i][0], 
  //                     res[i][1], (res[i][1]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1), 
  //                     res[i][2], (res[i][2]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][3], (res[i][3]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][4], (res[i][4]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][5], (res[i][5]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][6], (res[i][6]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][7], (res[i][7]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][8], (res[i][8]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][9], (res[i][9]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][10], (res[i][10]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][11], (res[i][11]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][12], (res[i][12]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1)
  //                     ]);
  //               }
  //               draw_bar_stacked(data, 'edp_allocation', '', 'Training');
  //             }
  //         });

  // $.ajax({
  //             url: "either_allocation_api",
  //             type: 'GET',
  //             dataType: 'json', // added data type
  //             success: function(res) {
  //               data =[['Category', 'Betong', { role: 'annotation' }, 'Bintuli', { role: 'annotation' }, 'HQ', { role: 'annotation' }, 'Kapit', { role: 'annotation' }, 'Kuching', { role: 'annotation' }, 'Miri', { role: 'annotation' }, 
  //                    'Mukah', { role: 'annotation' },  'Samarahan', { role: 'annotation' }, 'Sarikei', { role: 'annotation' }, 'Serian', { role: 'annotation' }, 'Sibu', { role: 'annotation' }, 'Sri Aman', { role: 'annotation' }]];
  //               for(var i=0; i< res.length; i++){
  //                   data.push([res[i][0], 
  //                     res[i][1], (res[i][1]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1), 
  //                     res[i][2], (res[i][2]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][3], (res[i][3]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][4], (res[i][4]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][5], (res[i][5]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][6], (res[i][6]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][7], (res[i][7]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][8], (res[i][8]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][9], (res[i][9]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][10], (res[i][10]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][11], (res[i][11]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1),
  //                     res[i][12], (res[i][12]/(res[i][1]=res[i][2]+res[i][3]+res[i][4]+res[i][5]+res[i][6]+res[i][7]+res[i][8]+res[i][9]+res[i][10]+res[i][11]+res[i][12])*100).toFixed(1)
  //                     ]);
  //               }
  //               draw_bar_stacked_counts(data, 'either_allocation', '', 'Training');
  //             }
  //         });


function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
