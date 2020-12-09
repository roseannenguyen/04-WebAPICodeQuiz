var mainText = document.getElementById("article");

var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")

var questionContainer = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")


var viewHighscores = document.getElementById ("highscores")

var shuffledQuestions;
var currentQuestionIndex;

var questions = [ 
    {
        question: "Coding is not stressful",
        answers: [
            
            {text: "1. Yes", correct: true},
            {text: "2. No", correct: false},

            ]
        
    },
    {
        question: "What are the all main components of the web?",
        answers: [
           {text: "1. Javascript",correct: false },
        {text: "2. CSS", correct: false},
        {text: "3. HTML", correct: false},
        {text: "4. All of the above",correct: true},
    ],
       
    },
    {
        question: "What is the name of the coding program we use?",
        answers: [
            {text:"1. Victoria Secret Code",correct: false},
             {text:"2. Valentino Sauce Code",correct: false},
             {text:"3. Visual Studio Code", correct: true},
             {text:"4. Notepad",correct: false}
            ],
        
    },

];


// start quiz is button clicked
startButton.addEventListener("click", startGame)

function startGame() {
    startButton.style.display = "none"
    mainText.style.display = "none"
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    numberQuestion = 0;
    questionContainer.style.display = "block"
    setQuestion();
}

function setQuestion() {
    questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    };
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
};

function setNextQuestion() {
    resetState();
    setQuestion(shuffledQuestions[currentQuestionIndex]);

}



function resetState() {
    nextButton.classList.add("hide")
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(event) {
    event.preventDefault();

    if (questions[currentQuestionIndex].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[currentQuestionIndex].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }
    if (currentQuestionIndex < questions.length) {
        currentQuestionIndex++;
    }
    setQuestion(currentQuestionIndex);
};



// storage script, but did not get to 
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

// }
