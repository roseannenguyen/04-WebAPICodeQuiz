var startButton = document.getElementById("start-btn")
var mainText = document.getElementById("article");
var questionContainer = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")

var answerBtn = document.querySelectorAll("button.ansBtn")
var answer1Btn = document.querySelector("#answer1");
var answer2Btn = document.querySelector("#answer2");
var answer3Btn = document.querySelector("#answer3");
var answer4Btn = document.querySelector("#answer4");

var nextButton = document.getElementById("next-btn")

let shuffledQuestions
var currentQuestionIndex = 0;

var questions = [ // array of objects
    {
        question: "Coding is not stressful",
        answers: ["1. Yes", "2. No", "3. Wrong Asnwer", "4. Try Again"],
        correctAnswer: "1"
    },
    {
        question: "What are the main components of the web?",
        answers: ["1. Javascript", "2. CSS", "3. HTML", "4. All of the above"],
        correctAnswer: "4"
    },
    {
        question: "What is the name of the coding program we use?",
        answers: ["1. Victoria Secret Code", "2. Valentino Sauce Code", "3. Visual Studio Code", "4. Notepad"],
        correctAnswer: "3"
    },
    {
        question: "Where do we upload our code to?",
        answers: ["1. Git Home", "2. Git", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];


// start quiz is button clicked
startButton.addEventListener("click", startGame)


answerBtn.forEach(item => {
    item.addEventListener('click', selectAnswer);
});

function startGame() {
    startButton.style.display = "none"
    mainText.style.display = "none"
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    numberQuestion = 0;
    questionContainer.style.display = "block"
    setQuestion();
}

function setQuestion(id) {
    if (id < questions.length) {
        questionElement.innerText = question.question;
        answerBtn.textContent = questions[id].answers[0];
        answer2Btn.textContent = questions[id].answers[1];
        answer3Btn.textContent = questions[id].answers[2];
        answer4Btn.textContent = questions[id].answers[3];
    }
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("answerBtn")
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer)
        showQuestion.append(button)
    })



}

function resetState() {
    nextButton.classList.add("hide")
    while (answerBtn.firstChild) {
        answerButtons.removeChild(answerBtn.firstChild)
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
    // call setQuestion to bring in next question when any ansBtn is clicked
    setQuestion(currentQuestionIndex);
}
