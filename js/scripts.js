$(document).ready(function() {
    //to hide the questions
    $(".jsquestions").hide();

    //to show questions one by one
    $("#question1").show();

    $(".jsquestions #submit").click(function () {
     current= $(this).parents("form: first").data("question");
     next= $(this).parents("form: first").data("question") +1;

     $("jsquestions").hide();
     ($)
    });
}); 