//participants
$.ajax({
              url: "participation_summary_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                  $('#participants_info').DataTable( {
                    data: res,
                    columns: [
                        { title: "Summary" },
                        { title: "HQ" },
                        { title: "Betong" },
                        { title: "Bintulu" },
                        { title: "Kapit" },
                        { title: "Kuching" },
                        { title: "Limbang" },
                        { title: "Miri" },
                        { title: "Mukah" },
                        { title: "Samarahan" },
                        { title: "Sarikei" },
                        { title: "Serian" },
                        { title: "Sibu" },
                        { title: "Sri Aman" },
                        { title: "Total" }
                    ],
                     "ordering": false
                } );
              }
          });

  // $.ajax({
  //             url: "participation_time_api",
  //             type: 'GET',
  //             dataType: 'json', // added data type
  //             success: function(res) {
  //                data =[['Date', 'Participants', 'EDA', 'EDP']] 
  //               for(var i=0; i< res.length; i++){
  //                   data.push([res[i][0], res[i][1], res[i][2], res[i][3]]);
  //               }
  //               draw_line(data, 'participant_line', 'Participation by TNA Category', 'Date', 'Count of Survey Participants');  
  //               $('#start_date').val(res[0][0]);
  //               $('#end_date').val(res[res.length-1][0]);
  //             }
  //         });

    $.ajax({
              url: "participation_comparison_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {    
                data =[['Date', 'Participants', 'Optional', 'Mandatory']]        
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][2], res[i][3]]);
                }
                draw_line(data, 'participation_comparison', 'Participation Requirement', 'Date', 'Count of Survey Participants');  

              }
          });





$( "#submit" ).click(function() {
  var selected_area = document.getElementById('area_select').value;
  var selected_gred_group = document.getElementById('gred_group_select').value;
  var selected_division = document.getElementById('division_select').value;
  var selected_rv_cluster = document.getElementById('rv_cluster').value;
  var selected_tl_cluster = document.getElementById('tl_cluster').value;
  var selected_c_cluster = document.getElementById('c_cluster').value;
  var selected_participation = document.getElementById('participation').value;


  //participants
$.ajax({
              url: "participation_summary_api",
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

              $('#participants_info').dataTable().fnClearTable();
              $.each(res, function(i, item) {
              $('#participants_info').dataTable().fnAddData( 
                  res[i]
              );
              });
              }
          });

});


$( "#update_timeline" ).click(function() {
  var selected_area = document.getElementById('area_select').value;
  var selected_gred_group = document.getElementById('gred_group_select').value;
  var selected_division = document.getElementById('division_select').value;
  var selected_rv_cluster = document.getElementById('rv_cluster').value;
  var selected_tl_cluster = document.getElementById('tl_cluster').value;
  var selected_c_cluster = document.getElementById('c_cluster').value;
  var selected_participation = document.getElementById('participation').value;
  var selected_start_date = document.getElementById('start_date').value;
  var selected_end_date = document.getElementById('end_date').value;

  if(selected_end_date == '' || selected_start_date == ''){
    alert('Invalid date selection! Try again');
  }else{

      // $.ajax({
      //             url: "participation_time_api",
      //             type: 'GET',
      //             dataType: 'json', // added data type
      //             data: {
      //               area: selected_area,
      //               gred_group: selected_gred_group,
      //               division: selected_division,
      //               rv_cluster: selected_rv_cluster,
      //               tl_cluster: selected_tl_cluster,
      //               c_cluster: selected_c_cluster,
      //               participation: selected_participation,
      //               start_date: selected_start_date,
      //               end_date: selected_end_date,
      //             },
      //             success: function(res) {
      //                data =[['Date', 'Participants', 'EDA', 'EDP']] 
      //               for(var i=0; i< res.length; i++){
      //                   data.push([res[i][0], res[i][1], res[i][2], res[i][3]]);
      //               }
      //               draw_line(data, 'participant_line', '', 'Date', 'Count of Survey Participants');  
      //               // $('#start_date').val(res[0][0]);
      //               // $('#end_date').val(res[res.length-1][0]);
      //             }
      //         });

          $.ajax({
              url: "participation_comparison_api",
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
                    start_date: selected_start_date,
                    end_date: selected_end_date,
                  },
              success: function(res) {    
                data =[['Date', 'Participants', 'Optional', 'Mandatory']]        
                for(var i=0; i< res.length; i++){
                    data.push([res[i][0], res[i][1], res[i][2], res[i][3]]);
                }
                draw_line(data, 'participation_comparison', 'Participation Requirement', 'Date', 'Count of Survey Participants');  

              }
          });

    }

});