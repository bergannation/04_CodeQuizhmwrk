// Timer in the top right
// view highscores in the top left

// In the middle, we need to have a start quiz button and a description of that starting quiz
//The timer will start when the user clicks start quiz button.
// If the user clicks a wrong answer, the timer deducts 7 seconds as a penalty
// each question should have four answers as a multiple choice

// Selects element by class
var timeEl = document.querySelector(".time");

var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image

setTime();

var questions = [];
