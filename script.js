var mainDisplay = document.getElementById("article");

var questionContainer = document.getElementById("question-container");
var currentQuestion = document.getElementById("question");
var choiceElement = document.getElementById("options");


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


startQuiz.setAttribute("class", "btn btn-primary")
startQuiz.addEventListener("click", beginQuiz);


function beginQuiz() {
    article.style.display = "none";
    startQuiz.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
}

function showQuestion() {
    questionCounter = 0
    score = 0
    availableQuestions = [...quizQuestion]

    if(availableQuestions.length === 0 || currentQuestionIndex > maxQuestions) {
        localStorage.setItem("mostRecentScore", score)
        return window.location("")

    }
    currentQuestionIndex++;
    var currentOption = quizQuestion[currentQuestionIndex]
    console.log(currentOption);
    currentQuestion.textContent = currentOption.question
    question.innerText = currentQuestion.question

    choiceElement.textContent = currentOption.choices
    choices.innerText = currentQuestion.choices

    }
    // next button add one to current question index and same showquestion increment 






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
