// Business Logic

function answerBranch(answer1,answer2,answer3,answer4,answer5) {

  if (answer5 === "hack"){
    $("#mainForm").hide();
    $("#mainTop").hide();
  } 
    else if (answer1==="a"&&answer2==="a"||answer1==="a"&&answer3==="a"||answer1==="a"&&answer4==="a"||answer2==="a"&&answer3==="a"||answer2==="a"&&answer4==="a"||answer3==="a"&&answer4==="a") {
    $("#mainForm").hide();
    $("#mainTop").hide();  
    $("#result-python").show();

  } 
    else if (answer1==="b"&&answer2==="b"||answer1==="b"&&answer3==="b"||answer1==="b"&&answer4==="b"||answer2==="b"&&answer3==="b"||answer2==="b"&&answer4==="b"||answer3==="b"&&answer4==="b") {
    $("#mainForm").hide();
    $("#mainTop").hide();
    $("#result-javaScript").show();

  } 
    else if (answer1==="c"&&answer2==="c"||answer1==="c"&&answer3==="c"||answer1==="c"&&answer4==="c"||answer2==="c"&&answer3==="c"||answer2==="c"&&answer4==="c"||answer3==="c"&&answer4==="c") {
    $("#mainForm").hide();
    $("#mainTop").hide();
    $("#result-ruby").show();

  } 
    else {
      $("#mainForm").hide();
      $("#mainTop").hide();
      $("#result-Csharp").show();

    }
}






// Interface Logic
$(document).ready(function() {  

  $("#mainForm").submit(function(event) {
    event.preventDefault(event);
    $("#result-python").hide();
    $("#result-Csharp").hide();
    $("#result-javaScript").hide();
    $("#result-ruby").hide();
    let name = $("#name").val();
    let answer1 = $("#question1").val();
    let answer2 = $("#question2").val();
    let answer3 = $("input:radio[name=question3]:checked").val();
    let answer4 = $("input:radio[name=question4]:checked").val();
    let answer5 = $("#question5").val().toLowerCase();
    console.log(name,answer1,answer2,answer3,answer4,answer5);
    answerBranch(answer1,answer2,answer3,answer4,answer5);
  });
});
