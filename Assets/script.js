// Timer in the top right-starts when the start quiz button is clicked
// view highscores in the top left

// In the middle, we need to have a start quiz button and a description of that starting quiz
//The timer will start when the user clicks start quiz button.
// If the user clicks a wrong answer, the timer deducts 7 seconds as a penalty
// each question should have four answers as a multiple choice

//Variables that will target my HTML page
var timeEl = document.querySelector(".time");
var quizEl = document.querySelector(".grid");
var bodyEl = document.querySelectorAll("body");
var resultsEl = document.querySelector("#quiz");
var leaderboard = document.querySelector("#leaderboard");
var scoreboard = document.querySelector("#scoreboard");
var records = document.querySelector("#records");
var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector("#reset");
var resetLeader = document.querySelector("#resetLeader");
var saveButton = document.querySelector("#save");
var userScoreSpan = document.querySelector("#userScore");
var userInitialSpan = document.querySelector("#userInitials");
var buttonList = document.querySelector(".buttons");
var option0 = document.querySelector("#option0");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var button0 = document.querySelector("#btn0");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var questionHeader = document.querySelector("#question");

questionHeader.textContent =
  "Try to answer the following Javascript code related questions within the time limit. Please keep in mind that incorrect answers will penalize your scoretime by 5 seconds. Click the 'Start Quiz' button when you are ready. You will have 75 seconds to complete.";
questionHeader.setAttribute(
  "style",
  "font-size: 20px; text-align: center; color: red;"
);
buttonList.setAttribute("style", "display: none;");

var timerInterval;
var secondsLeft = 76;
var wrongAnswer = -5;
var chosenOption = 0;
var questionNumber = 0;
var score = 0;
var highscore = localStorage.getItem("highscore");

// My timer function that will start the timer at 75 seconds when the event listener is clicked
function setTime(event) {
  event.preventDefault();
  if (!timerInterval) {
    timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
      timeEl.setAttribute("style", "font-size: 40px; text-align: right;");

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  } else return;
}
function sendMessage() {
  timeEl.textContent = " ";
  questionHeader.textContent = "OUT OF TIME";
  for (var i = 0; i < buttonList.children.length; i++) {
    buttonList.children[i].setAttribute("style", "display: none;");
  }
  showScores();
}

// my questions listed out in variable form with answers and the correct answer
var question1 = {
  question:
    "What language enables web pages to be interactive and dynamic with the end-user?",
  answer1: "HTML",
  answer2: "CSS",
  answer3: "Javascript",
  answer4: "None of the above",
  correctAnswer: "Javascript",
};
var question2 = {
  question:
    "True/False statements are a type of variable that can be evaluated as a _____?",
  answer1: "String",
  answer2: "Number",
  answer3: "Object",
  answer4: "Boolean",
  correctAnswer: "Boolean",
};
var question3 = {
  question:
    "Which operator do we use when we want strict equality, of type and value?",
  answer1: "===",
  answer2: "<=",
  answer3: "==",
  answer4: "i++",
  correctAnswer: "===",
};
var question4 = {
  question:
    "What term is considered repeatable logic that allows the user to repeat it in their code?",
  answer1: "Variables",
  answer2: "Functions",
  answer3: "For Loops",
  answer4: "None of the Above",
  correctAnswer: "Functions",
};
var question5 = {
  question: "_____: is one variable that holds a list of things inside it.",
  answer1: "Array",
  answer2: "Object",
  answer3: "While Loop",
  answer4: "Conditions",
  correctAnswer: "Array",
};

var questionsArray = [question1, question2, question3, question4, question5];

function nextQuestion() {
  if (questionNumber < 4) {
    questionNumber++;
    Quiz(questionNumber);
  } else {
    showScores();
  }
}

function Quiz(array) {
  console.log("questionNumber", questionNumber);
  currentQuestion = questionsArray[array];
  populateQuestion();
  showProgress();
}

function populateQuestion() {
  questionHeader.textContent = currentQuestion.question;
  option0.textContent = currentQuestion.answer1;
  option1.textContent = currentQuestion.answer2;
  option2.textContent = currentQuestion.answer3;
  option3.textContent = currentQuestion.answer4;
}

button0.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  chosenOption = currentQuestion.answer1;
  console.log("chosenOption :>> ", chosenOption);
  isAnswerCorrect();
});
button1.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  chosenOption = currentQuestion.answer2;
  console.log("chosenOption :>> ", chosenOption);
  isAnswerCorrect();
});
button2.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  chosenOption = currentQuestion.answer3;
  console.log("chosenOption :>> ", chosenOption);
  isAnswerCorrect();
});
button3.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  chosenOption = currentQuestion.answer4;
  console.log("chosenOption :>> ", chosenOption);
  isAnswerCorrect();
});

function isAnswerCorrect() {
  if (chosenOption === currentQuestion.correctAnswer) {
    alert("CORRECT ANSWER");
    nextQuestion();
  } else {
    alert("WRONG ANSWER-5 seconds deducted");
    secondsLeft += wrongAnswer;
    return;
  }
}

resetButton.addEventListener("click", function () {
  location.reload();
});

startButton.addEventListener("click", function (event) {
  Quiz(questionNumber);
  setTime(event);
  questionHeader.setAttribute("style", "display: block;");
  buttonList.setAttribute("style", "display: inline-block;");
});

resetLeader.addEventListener("click", function (event) {
  var score1 = localStorage.getItem("scores");
  userScoreSpan.textContent = "";
  var initial1 = localStorage.getItem("initials");
  userInitialSpan.textContent = "";
});
// Show progress on Questions
function showProgress() {
  var current = questionNumber + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + current + " of " + questionsArray.length;
}

function showScores() {
  var gameOverHTML = "<h1>RESULTS</h1>";
  gameOverHTML += "<h2 id='scoreHeader'> Your score: " + secondsLeft + "</h2>";
  resultsEl.innerHTML = gameOverHTML;
  clearInterval(timerInterval);

  resultsEl.appendChild(leaderboard);
  resultsEl.appendChild(resetButton);
}

function saveLastRegistered() {
  var score1 = localStorage.getItem("scores");
  console.log(score1);
  userScoreSpan.innerHTML = score1;

  var initial1 = localStorage.getItem("initials");
  console.log(initial1);
  userInitialSpan.innerHTML = initial1;
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault;
  event.stopPropagation;

  var score1 = document.querySelector("#scores").value;
  var initial1 = document.querySelector("#initials").value;

  localStorage.setItem("scores", score1);
  localStorage.setItem("initials", initial1);
  saveLastRegistered();
});
saveLastRegistered();
