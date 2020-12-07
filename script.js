
// click start button. Need to set timer 
// then timer starts and questions is presented
// need 4 options and ul/li
// start with an array for questions

var quizQuestions = [{ 
    question: "What is javascript?",
    answer: "A programming language",
    choices: [
        "A programming language", "fun", "cat", "computer",
    ],
    question: "What is testt?",
    answer: "A programming language",
    choices: [
        "A programming language", "fun", "cat", "computer",
    ],
    question: "What is javascript?",
    answer: "A programming language",
    choices: [
        "A programming language", "fun", "cat", "computer",
    ],
    question: "What is javascript?",
    answer: "A programming language",
    choices: [
        "A programming language", "fun", "cat", "computer",
    ],
}];

var userChoice = "";
var user = [];
var saveUserscore = [];
var score = 0;

function displayQuestion(question) {
    document.getElementById("#question").innerHTML = ""; 
    document.getElementById("#choices").innerHTML = ""; 

    var choices =questions[currentIndex].choices;

    for (var i =0; i < question.choices.length; i++) {
    var correctChoice = document.getElementById("#button");
    var choiceBody = document.createElement("div")

    choice.textContent = question.choices[i];

    choice.addEventListener("click", function(){
    checkAnswer(question, function (event) {
    event.preventDefault();
    });
    // when click, pass text through there. Look at the event objects for clicks (activities 12); look through the console
    });

    document.getElementById("choices").appendChild(choice); 
    }   

}


function checkAnswer(question, userChoice) {
    if (userChoice === question.answer) {
        score++;
            alert("That's correct!");
    }
}


// when question answer, then presented with another question



// when answer question incorrectly, then time is substracted from clock


// when all questions are answers or timer reachers 0



// function holdingtext() {





// then game over





// when game over, then can save intials and score
// text box and local storage 