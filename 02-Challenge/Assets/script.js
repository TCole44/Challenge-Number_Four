var startButton = document.getElementById('start-btn');
var startScreenElement = document.getElementById('start-screen');
var questionScreenElement = document.getElementById('question-screen');
var questionH2 = document.getElementById('question');
var answer1 = document.getElementById('a-1');
var answer2 = document.getElementById('a-2');
var answer3 = document.getElementById('a-3');
var answer4 = document.getElementById('a-4');

var seconds = 0
var timer = document.getElementById("timer");
var secCount = (startTimer, 1000);

var qIndex = 0
var questions = [
    {
        question: "What color is the sky?",
        answers: ["blue", "black", "green", "red"],
        correctAnswer: "blue"
    },
    {
        question: "What is 1+1?",
        answers: ["2", "3", "4", "5"],
        correctAnswer: "2"
    },
    {
        question: "If somebody asked for a couple cookies, how many would you give them?",
        answers: ["2", "3", "4", "5"],
        correctAnswer: "2"
    },
    {
        question: "Which wild animal encounter would you have the greatest chance of survival?",
        answers: ["panda", "hippo", "tiger", "komodo dragon"],
        correctAnswer: "panda"
    },
]


function startTimer() {
     ++secCount;
    timer.innerHTML = seconds
      }

function startGame() {
    console.log('Quiz Started')
    questionH2.textContent = questions[qIndex].question;
    answer1.textContent = questions[qIndex].answers[0];
    answer2.textContent = questions[qIndex].answers[1];
    answer3.textContent = questions[qIndex].answers[2];
    answer4.textContent = questions[qIndex].answers[3];

    answer1.addEventListener('click', checkAnswers)
    answer2.addEventListener('click', checkAnswers)
    answer3.addEventListener('click', checkAnswers)
    answer4.addEventListener('click', checkAnswers)
}

function checkAnswers() {
 console.log(this.textContent)
 var selectedAnswer = this.textContent

 if (selectedAnswer == questions[qIndex].correctAnswer) {
    alert("Correct")
    qIndex++
    answer1.textContent = questions[qIndex].answers[0];
    answer2.textContent = questions[qIndex].answers[1];
    answer3.textContent = questions[qIndex].answers[2];
    answer4.textContent = questions[qIndex].answers[3];

    answer1.addEventListener('click', checkAnswers)
    answer2.addEventListener('click', checkAnswers)
    answer3.addEventListener('click', checkAnswers)
    answer4.addEventListener('click', checkAnswers)

 } else {
    alert("Incorrect")
    qIndex++
    answer1.textContent = questions[qIndex].answers[0];
    answer2.textContent = questions[qIndex].answers[1];
    answer3.textContent = questions[qIndex].answers[2];
    answer4.textContent = questions[qIndex].answers[3];

    answer1.addEventListener('click', checkAnswers)
    answer2.addEventListener('click', checkAnswers)
    answer3.addEventListener('click', checkAnswers)
    answer4.addEventListener('click', checkAnswers)
 }
 startGame()
}

function selectAnswer() {

}

startButton.addEventListener('click', function () {
    questionScreenElement.classList.remove("hide")
    startScreenElement.classList.add("hide")
    startGame()
    startTimer()
}) 