function check() {
    var questionOne = document.questionOne.value;
    var questionTwo = document.questionTwo.value;
    var questionThree = document.questionThree.value;
    var questionFour = document.questionFour.value;
    var questionFive = document.questionFive.value;
    var right = 0;
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
    event.preventDefault();
};

