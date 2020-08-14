// Business Logic






// Interface Logic
$(document).ready(function() {  

  $("#mainForm").submit(function(event) {
    event.preventDefault(event);
    let answer1 = $("#question1").val();
    let answer2 = $("#question2").val();
    let answer3 = $("input:radio[name=question3]:checked").val()
    let answer4 = $("input:radio[name=question4]:checked").val()
    let answer5 = $("#question5").val()

    console.log(answer1,answer2,answer3,answer4,answer5)

  });

});
