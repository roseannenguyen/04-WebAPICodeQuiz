var mainDisplay = document.getElementById("welcomePage");
var quizTimer = document.getElementById("timer");

var questionContainer = document.getElementById("question-container");
var currentQuestion = document.getElementById("question");
var choiceElement = document.getElementById("options");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

var startQuiz = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;
var availableQuestions = [];
var currentQuestion = {}
var maxQuestions = 5

var userChoice = "";
var userName;
var saveUserscore = [];
var userSubmit = document.getElementById("submitBtn")
var userScore = document.getElementById("score");
var scorePoints = 100;

var quizQuestion = [
    {
        question: "What is javascript?",
        choices: {
            a: "A programming language",
            b: "fun",
            c: "cat",
            d: "computer",
        },
        answer: "c",
    },
    {
        question: "What is javascript?",
        choices: {
            a: "A programming language",
            b: "fun",
            c: "cat",
            d: "computer",
        },
        answer: "c",
    },
    {
        question: "What is javascript?",
        choices: {
            a: "A programming language",
            b: "fun",
            c: "cat",
            d: "computer",
        },
        answer: "c",
    },
    {
        question: "What is javascript?",
        choices: {
            a: "A programming language",
            b: "fun",
            c: "cat",
            d: "computer",
        },
        answer: "c",
    },
    {
        question: "What is javascript?",
        choices: {
            a: "A programming language",
            b: "fun",
            c: "cat",
            d: "computer",
        },
        answer: "c",
    }
];

// timer variables
var timeLeft = 60;
var timerInterval;


startQuiz.setAttribute("class", "btn btn-primary")
startQuiz.addEventListener("click", beginQuiz);

function generateQuiz() {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}


function beginQuiz() {
    article.style.display = "none";
    startQuiz.style.display = "none";
    questionContainer.style.display = "block";
    generateQuiz();

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
}


// function showQuestion() {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...quizQuestion]

//     if(availableQuestions.length === 0 || currentQuestionIndex > maxQuestions) {
//         localStorage.setItem("mostRecentScore", score)
//         return window.location("")

//     }
//     currentQuestionIndex++;
//     var currentOption = quizQuestion[currentQuestionIndex]
//     console.log(currentOption);
//     currentQuestion.textContent = currentOption.question
//     question.innerText = currentQuestion.question

//     choiceElement.textContent = currentOption.choices
//     choices.innerText = currentQuestion.choices

//     }
//     // next button add one to current question index and same showquestion increment 






// function firstQuestion(question) {

//     for (var i =0; i < question.choices.length; i++) {
//     var options = document.createElement("div")

//     answerElement.textContent = question.choices[i];

//     options.addEventListener("click", function(){
//     checkAnswer(question, function (event) {
//     event.preventDefault();
//     });
//     // when click, pass text through there. Look at the event objects for clicks (activities 12); look through the console
//     });

//     document.getElementById("options").appendChild(options); 
//     }   
// }

// function checkAnswer(question, userChoice) {
//     if (userChoice === question.answer) {
//         score++;
//             alert("That's correct!");
//     }
//     else if (userchoice !== answer) {
//         removeTime(timer);
//     }
// }





// storage
// var storedScores = JSON.parse(localStorage.getItem("userData"))
// var highscores = [
//     { initials: "AAA", score: 10},
//     { initials: "AAA", score: 10},
//     { initials: "AAA", score: 10},
//     { initials: "AAA", score: 10},
// ]

// localStorage.setItem("highscores", JSON.stringify(highscores));

// var localHighScores = JSON.parse(localStorage.getItem("highscores"));

// localHighScores.sort(function(a,b) {
//     return b.score - a.score;
// })

// for (let i = 0; i < localHighScores.length; i++) {
//     const highscore = localHighScores[i];

//     var li = document.createElement("li");
//     var ul =document.createElement("ul");
//     li.textContent = highscores.initials + "" + highscores.score;
//     ul.append(li);

//     document.body.append(ul)
// }

// function highscorePage(a, b) {

//     var userData = {
//         name: a,
//         userScore: b
//     }; 
//     allScores.push(userData);

//     localStorage.setItem("userData", JSON.stringify(allScores));

// 
