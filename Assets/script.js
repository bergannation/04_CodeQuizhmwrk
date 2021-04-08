// Timer in the top right-starts when the start quiz button is clicked
// view highscores in the top left

// In the middle, we need to have a start quiz button and a description of that starting quiz
//The timer will start when the user clicks start quiz button.
// If the user clicks a wrong answer, the timer deducts 7 seconds as a penalty
// each question should have four answers as a multiple choice

//Variables that will target my HTML page
var timeEl = document.querySelector(".time");
var bodyEl = document.querySelector(".grid");
var startButton = document.querySelector("#start-button");
var option0 = document.querySelector("#option0");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var button0 = document.querySelector("#btn0");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var questionHeader = document.querySelector("#question");

var secondsLeft = 75;
var chosenOption = 0;
var currentQuestionNumber = 0;

// my questions listed out in variable form with answers and the correct answer
var question1 = {
  question: "What does HTML stand for?",
  answer1: "Hypertext Markup Language",
  answer2: "Cascading style sheets",
  answer3: "Javascript",
  answer4: "None of the above",
  correctAnswer: "Hypertext Markup Language",
};
var question2 = {
  question: "Which computer language structures all webpages on the internet?",
  answer1: "Java",
  answer2: "CSS",
  answer3: "Javascript",
  answer4: "HTML",
  correctAnswer: "HTML",
};
var question3 = {
  question: "Which language is used for styling webpages?",
  answer1: "Python",
  answer2: "C++",
  answer3: "Javascript",
  answer4: "CSS",
  correctAnswer: "CSS",
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

// My timer function that will start the timer at 75 seconds when the event listener is clicked
function setTime(event) {
  event.preventDefault();

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "assets/timesup.jfif");
  bodyEl.appendChild(imgEl);
}

function nextQuestion() {
  if (currentQuestionNumber < 8) {
    currentQuestionNumber++;
    Quiz(currentQuestionNumber);
  }
}

function Quiz(array) {
  currentQuestion = questionsArray[array];
  populateCurrentQuestion();
  showProgress();
}

function populateCurrentQuestion() {
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
    alert("WRONG ANSWER");
    return;
  }
}
function showProgress() {
  var current = currentQuestionNumber + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + current + " of " + questionsArray.length;
}

startButton.addEventListener("click", setTime);
Quiz(currentQuestionNumber);

//need to get start button to populate the questions
// need to get the final results in highscores section
