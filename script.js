

var questionElement = document.getElementById("question");
var choiceElement = document.getElementById("options");
var resultsFinal = document.getElementById("results");
// storage
var storedScores = JSON.parse(localStorage.getItem("userData"))
var allScores = [];

// timer
var timer = 60;
        
function setTimer() {  var interval = setInterval(function(){
document.getElementById("timer").innerHTML=timer;
timer--;

if (timer === 0){
    clearInterval(interval);
    document.getElementById("timer").innerHTML='Done';
    alert("You're out of time!");
    return;
}
}, 1000);
}

var currentQuestion = 0;
var mainDisplay = document.getElementById("article");
var startQuiz = document.getElementById("startButton");
var nextQuestion =document.getElementById("nextButton");
var questionContainer = document.getElementById("question-container");

startQuiz.addEventListener("click", beginQuiz);

function beginQuiz() {
    console.log("Started");
    setTimer();
    firstQuestion();
    questionElement.setAttribute("style", "display: block");
    mainDisplay.setAttribute("style", "display: none");   
}


var score = 0;
var totalTimer = 60;
var pentalty = 10;
var userChoice = "";
var saveUserscore = [];

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


function getQuestion(question) {

    for (var i =0; i < question.choices.length; i++) {
    var options = document.getElementById("#button");
    // var choice = document.createElement("div")

    answerElement.textContent = question.choices[i];

    options.addEventListener("click", function(){
    checkAnswer(question, function (event) {
    event.preventDefault();
    });
    // when click, pass text through there. Look at the event objects for clicks (activities 12); look through the console
    });

    document.getElementById("option").appendChild(choice); 
    }   

}

function nextQuestion () {
    showQuestion(currentQuestion)
}

function checkAnswer(question, userChoice) {
    if (userChoice === question.answer) {
        score++;
            alert("That's correct!");
    }
    else if (userchoice !== answer) {
        removeTime(timer);
    }
}
function showQuestion(question) {
    questionElement.innerHTML = question.question;

}



// Storage
function highscorePage(a, b) {

    var userData = {
        name: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));

}