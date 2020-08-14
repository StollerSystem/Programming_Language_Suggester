// Business Logic

function answerBranch(answer1,answer2,answer3,answer4,answer5) {

  if (answer5 === "hack"){
    $("#mainForm").hide();
    $("#mainTop").hide();
  } 



}






// Interface Logic
$(document).ready(function() {  

  $("#mainForm").submit(function(event) {
    event.preventDefault(event);
    let answer1 = $("#question1").val();
    let answer2 = $("#question2").val();
    let answer3 = $("input:radio[name=question3]:checked").val();
    let answer4 = $("input:radio[name=question4]:checked").val();
    let answer5 = $("#question5").val().toLowerCase();
    //console.log(answer1,answer2,answer3,answer4,answer5);
    answerBranch(answer1,answer2,answer3,answer4,answer5);
  });

});
