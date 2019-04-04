function check() {
    
    var questionOne = document.jsquestions.questionOne.value;
    var questionTwo = document.jsquestions.questionTwo.value;
    var questionThree = document.jsquestions.questionThree.value;
    var questionFour = document.jsquestions.questionFour.value;
    var questionFive = document.jsquestions.questionFive.value;
    var right= 0;
    if (questionOne == "correct") {
        right = right + 20;
    }
    if (questionTwo == "correct") {
        right = right + 20;
    }
    if (questionThree == "correct") {
        right = right + 20;
    }
    if (questionFour == "correct") {
        right = right + 20;
    }
    if (questionFive == "correct") {
        right = right + 20;
    };
 

    document.getElementById("answer").style.visibility="visible";
    document.getElementById("score").innerHTML="YOU HAVE SCORED:" + right + "%";
    $(".container")
    

};
