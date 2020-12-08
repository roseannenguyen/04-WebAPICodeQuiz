var mainDisplay = document.getElementById("article");

var questionContainer = document.getElementById("question-container");
var currentQuestion = document.getElementById("question");
var choiceElement = document.getElementById("options");
var resultsFinal = document.getElementById("results");

var startQuiz = document.getElementById("start-btn");
var nextButton =document.getElementById("next-btn");

var currentQuestionIndex = 0;

var userChoice = "";
var saveUserscore = [];

var quizQuestion = [{ 
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


startQuiz.setAttribute("class", "btn btn-primary")
startQuiz.addEventListener("click", beginQuiz);


function beginQuiz() {
    article.style.display = "none";
    startQuiz.style.display = "none";
    questionContainer.style.display = "block";
    console.log("next");
    showQuestion();
}

    function showQuestion() {
    var currentOption = quizQuestion[currentQuestionIndex]
    console.log(currentOption);
    currentQuestion.textContent = currentOption.question
    choiceElement.textContent = currentOption.choices

    
    // next button add one to current question index and same showquestion increment 
    }

 


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

// function highscorePage(a, b) {

//     var userData = {
//         name: a,
//         userScore: b
//     };
//     allScores.push(userData);

//     localStorage.setItem("userData", JSON.stringify(allScores));

// }
