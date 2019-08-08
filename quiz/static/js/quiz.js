
selected_subject = (window.location.search.substr(1).split('='))[1];

var mc_answers = {};
var enum_answers = {};
var points = 0;

  $.ajax({
              url: "get_questions",
              type: 'GET',
              dataType: 'json',
              data: {
                subject: selected_subject,
                question_type: 'Multiple Choice'
              }, // added data type

              success: function(res) {
                for(var i=0; i< res.length; i++){
                   mc_answers[res[i][1]] = res[i][3].trim();
                   $("#multiple_choice").append("<h4>"+(i+1)+". "+res[i][0]+"</h4>"); 
                   options = res[i][2].split(",");                   
                   options = shuffle(options);
                   for(var x=0; x< options.length; x++){
                  $("#multiple_choice").append(
                    "<div class='input-group'>" +
                      "<label><input type='radio' class = 'multiple_choice' name = '"+res[i][1]+"' value = '"+options[x].trim()+"''>   "+ options[x].trim()+"<label></div>"
                    );
                  }
                  $("#multiple_choice").append("</br><div class='alert hidden' role='alert' id = '"+res[i][1]+"_answer'><h5>Answer: "+res[i][3]+"</h5></div><hr>"); 
              
              }
            }
          });



  $.ajax({
              url: "get_questions",
              type: 'GET',
              dataType: 'json',
              data: {
                subject: selected_subject,
                question_type: 'Enumeration'
              }, // added data type

              success: function(res) {
                for(var i=0; i< res.length; i++){                  
                   enum_answers[res[i][1]] = res[i][3].trim();             
                   $("#enumeration").append("<h4>"+(i+1)+". "+res[i][0]+"</h4>"); 
                   if(res[i][4] != null){
                    $("#enumeration").append('<img src="/static/'+res[i][4]+'"  alt="img"></br></br>');
                   }
                   answer_count = res[i][2];
                   for(var x=0; x< answer_count; x++){
                  $("#enumeration").append(
                    "<div class='input-group'>" +
                      "<label>Answer: "+(x+1)+": <input type='text' class = 'form-control enumeration' name = '"+res[i][1]+"'></label></div>"
                    );                  
                  }
                  $("#enumeration").append("</br><div class='alert hidden' role='alert' id = '"+res[i][1]+"_answer'><h5>Answer: "+res[i][3]+"</h5></div>"); 
              }

            }
          });




function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


$("#check").click(function(){
    $('.hidden').removeClass('hidden');
     var multiple_choice = [];
      $('.multiple_choice').each(function() { multiple_choice[$(this).attr('name')] = 1; });
      $(".multiple_choice").prop("disabled", true);
      for(var x in multiple_choice) { 
          var radioValue = $("input[name='"+x+"']:checked").val();
          var correctAnswer = mc_answers[x];
            if(radioValue){
                if(radioValue == correctAnswer){
                 points++;
                 $("#"+x+"_answer").addClass('alert-success');
                } else {
                  $("#"+x+"_answer").addClass('alert-danger');
                }
            }else{
                $("#"+x+"_answer").addClass('alert-danger');
            }
      }


 var enumeration = [];
      $('.enumeration').each(function() { enumeration[$(this).attr('name')] = 1; });
      $(".enumeration").prop("disabled", true);
      for(var x in enumeration) { 
          var answers = $("div input[name='"+x+"']").map( function() { return $(this).val(); } ).get();
          correctAnswer =  enum_answers[x].trim().toLowerCase();
          enumeration_points = 0;
          for(var i = 0; i < answers.length; i++){
            answer_text = answers[i].trim().toLowerCase();
            correct_text = correctAnswer.trim().toLowerCase();
            if (correctAnswer.indexOf(answer_text) >0) {
              points++;
              enumeration_points++;
              }

          }
          if(enumeration_points == answers.length-1 && answers.length != 1){
            $("#"+x+"_answer").addClass('alert-success');
          }else{
             $("#"+x+"_answer").addClass('alert-danger');
          }
      }
  $("#score").append('Score: '+points+ '/101');

    $.ajax({
                url: "save_score",
                type: 'POST',
                dataType: 'json',
                data: {
                  score: points,
                  subject: selected_subject,
                }, // added data type

                success: function(res) {

                }
    });

  });