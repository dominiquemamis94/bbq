//participants
$.ajax({
              url: "participation_names_api",
              type: 'GET',
              dataType: 'json', // added data type
              success: function(res) {
                  $('#participants_info').DataTable( {
                    data: res,
                    columns: [
                        { title: "Name" },
                        { title: "Position" },
                        { title: "Position Level" },
                        { title: "GRED" },
                        { title: "GRED Group" },
                        { title: "Area" },
                        { title: "Age" },
                        { title: "Training" }
                    ]
                } );
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
              url: "participation_names_api",
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

