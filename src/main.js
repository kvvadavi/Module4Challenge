var timerEl = document.querySelector("#countdown");
var question = document.querySelector("#questions");
var highscore = document.querySelector("#highscore");
var options = document.querySelector("#options");
var aOption = document.getElementById('a');
var bOption = document.getElementById('b');
var cOption = document.getElementById('c');
var aaOption = document.getElementById('aa');
var bbOption = document.getElementById('bb');
var ccOption = document.getElementById('cc');
var mainEl = document.querySelector("#main");
var start = document.getElementById("start");
var count
var correctAnswerCount = 0
var wrongAnswerCount = 0
var message = "Time Up! Game Over."
var words = message
var timeLeft = 0;
var timeInterval = 0;
var ans = "";
var game = 1;

// Set button value to Start Quiz
start.textContent = "Start Quiz"
document.getElementById('button').style.visibility='hidden';
document.getElementById('aa').style.visibility='hidden';
document.getElementById('bb').style.visibility='hidden';
document.getElementById('cc').style.visibility='hidden';

// Add list of questions in a variable.
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "ESLint"
    },
    correctAnswer: "c"
  },
  {
    question: "What does HTML stand for?",
    answers: {
      a : "HyperText Markup Language",
      b : "HyperLinks and Text Markup Language",
      c : "Home Tool Markup Language"
    },
    correctAnswer: "a"
  },
    {
      question: "Who is making the Web standards?",
      answers: {
        a : "Google",
        b : "Microsoft",
        c : "The World Wide Web Consortium"
      },
      correctAnswer: "c"
    },
     {
        question: "Which character is used to indicate an end tag?",
        answers: {
          a : "<",
          b : "/",
          c : "*"
        },
        correctAnswer: "b"
      }
];



// Function to wait for next button click and question.
let waitForPressResolve;

function waitForPress() {
    return new Promise(resolve => waitForPressResolve = resolve);
    
}

const btn = document.querySelector("#button");

function btnResolver() {
  if (waitForPressResolve) waitForPressResolve();
}

// function to place next question and break if time left is less than or equal to 0
async function doIt() {
  btn.addEventListener('click', btnResolver);
  document.getElementById('button').style.visibility='visible';
  document.getElementById('aa').style.visibility='visible';
  document.getElementById('bb').style.visibility='visible';
  document.getElementById('cc').style.visibility='visible';

  for (var i=0; i < myQuestions.length; i++ ) {
    if (timeLeft <= 0) {
      break
    }    
      question.innerHTML = myQuestions[i].question
      aOption.innerHTML = myQuestions[i].answers["a"]
      bOption.innerHTML = myQuestions[i].answers["b"]
      cOption.innerHTML = myQuestions[i].answers["c"]
      ans = myQuestions[i].correctAnswer

      await waitForPress();
      if (timeLeft <= 0) {
        break
      }  
      if (ans === document.querySelector('input[name="radioButton"]:checked').value){
        console.log("Correct")
        correctAnswerCount ++
        mainEl.textContent = "Correct Answer!"
      } else {
        wrongAnswerCount ++
        timerClock()
        mainEl.textContent = "Wrong Answer!"

      }
      aaOption.checked = false
      bbOption.checked = false
      ccOption.checked = false

  }
  btn.removeEventListener('click', btnResolver);
  console.log('Finished');
  timerEl.textContent = ""
  question.textContent = "Game Over!"
  aOption.textContent = ""
  bOption.textContent = ""
  cOption.textContent = ""
  mainEl.textContent = ""

  document.getElementById('start').style.visibility='visible';
  document.getElementById('highscore').style.visibility='visible';
  start.textContent = "Start Quiz"
  document.getElementById('button').style.visibility='hidden';
  document.getElementById('aa').style.visibility='hidden';
  document.getElementById('bb').style.visibility='hidden';
  document.getElementById('cc').style.visibility='hidden';
  clearInterval(timeInterval)

  let jsonOutput = {
    "Correct" : correctAnswerCount,
    "Wrong"   : wrongAnswerCount,
    "Game"    : game++
  }
  localStorage.setItem('Score', JSON.stringify(jsonOutput));
}


// Timer function
function timerClock() {

  if (timeLeft < 0) {
    clearInterval(timeInterval)
    final()
  }
  timeLeft = timeLeft - 10
  console.log(timeLeft)
}

// Final call function to end quiz
function final(){
  myQuestions.length = 0
  timerEl.textContent = ""
  question.textContent = "Game Over!"
  aOption.innerHTML = ""
  bOption.innerHTML = ""
  cOption.innerHTML = ""
  mainEl.innerHTML = ""
  document.getElementById('start').style.visibility='visible';
  document.getElementById('highscore').style.visibility='visible';
  start.textContent = "Start Quiz"
  document.getElementById('button').style.visibility='hidden';
  document.getElementById('aa').style.visibility='hidden';
  document.getElementById('bb').style.visibility='hidden';
  document.getElementById('cc').style.visibility='hidden';
  clearInterval(timeInterval)
}

//Alert for high score
function highScore() {
  let highScores = localStorage.getItem('Score')
  alert(highScores)
  }


  highscore.addEventListener("click", function (event) {
    event.preventDefault();
    highScore()
});


// count down function
function countdown() {
  document.getElementById('start').style.visibility='hidden';
  document.getElementById('highscore').style.visibility='hidden';
  
  // questions()
  timeLeft = 60;
  timeInterval = setInterval(function () {
    timeLeft --;
    timerEl.textContent = timeLeft + " seconds left."
    if (timeLeft < 0) {
      clearInterval(timeInterval)
      timerEl.textContent = ""
      question.textContent = "Game Over!"
      document.getElementById('start').style.visibility='visible';
      document.getElementById('highscore').style.visibility='visible';
      start.textContent = "Start Quiz"
    }
  }, 1000);
}

// Start button or quiz
start.addEventListener("click", function() {
    count ++
    countdown();
    doIt()
    })

