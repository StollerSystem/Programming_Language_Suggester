// Business Logic
function answerBranch(answer1,answer2,answer3,answer4,bonus) {
  if (bonus === "hack"){
    $("#mainForm").hide(1500);
    $("#mainTop").hide(1500);
    $("#result-hack").show(1500);
  } 
    else if (answer1==="a"&&answer2==="a"||answer1==="a"&&answer3==="a"||answer1==="a"&&answer4==="a"||answer2==="a"&&answer3==="a"||answer2==="a"&&answer4==="a"||answer3==="a"&&answer4==="a") {
      $("#mainForm").hide(1500);
      $("#mainTop").hide(1500);  
      $("#result-python").show(1500);
  } 
    else if (answer1==="b"&&answer2==="b"||answer1==="b"&&answer3==="b"||answer1==="b"&&answer4==="b"||answer2==="b"&&answer3==="b"||answer2==="b"&&answer4==="b"||answer3==="b"&&answer4==="b") {
      $("#mainForm").hide(1500);
      $("#mainTop").hide(1500);
      $("#result-javaScript").show(1500);
  } 
    else if (answer1==="c"&&answer2==="c"||answer1==="c"&&answer3==="c"||answer1==="c"&&answer4==="c"||answer2==="c"&&answer3==="c"||answer2==="c"&&answer4==="c"||answer3==="c"&&answer4==="c") {
      $("#mainForm").hide(1500);
      $("#mainTop").hide(1500);
      $("#result-ruby").show(1500);
  } 
    else {
      $("#mainForm").hide(1500);
      $("#mainTop").hide(1500);
      $("#result-Csharp").show(1500);
    }
}
// Interface Logic
$(document).ready(function() {  
  $("#mainForm").submit(function(event) {
    let name = $("#name").val();
    if (name){      
      event.preventDefault(event);
      $("#result-python").hide();
      $("#result-Csharp").hide();
      $("#result-javaScript").hide();
      $("#result-ruby").hide();      
      let answer1 = $("#question1").val();
      let answer2 = $("#question2").val();
      let answer3 = $("input:radio[name=question3]:checked").val();
      let answer4 = $("input:radio[name=question4]:checked").val();
      let bonus = $("#question5").val().toLowerCase();
      console.log(name,answer1,answer2,answer3,answer4,bonus);
      $(".userName").text(name);
      answerBranch(answer1,answer2,answer3,answer4,bonus);
    } else {      
      alert("Please enter your name!")
    }    
  });
});
