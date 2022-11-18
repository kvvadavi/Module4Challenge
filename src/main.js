var timerEl = document.querySelector("#countdown");
var question = document.querySelector("#questions");
var highscore = document.querySelector("#highscore");
var options = document.querySelector("#options");
var aOption = document.getElementById('a');
var bOption = document.getElementById('b');
var cOption = document.getElementById('c');
var mainEl = document.querySelector("#main");
var start = document.getElementById("start");
var count
// var correctAnswer = 0
var wrongAnswer = 0
var message = "Time Up! Game Over."
var words = message
var timeLeft = 0;
var timeInterval = 0;

// Set button value to Start Quiz
start.textContent = "Start Quiz"
document.getElementById('button').style.visibility='hidden';
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
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];




let waitForPressResolve;

function waitForPress() {
    return new Promise(resolve => waitForPressResolve = resolve);
}

const btn = document.querySelector("#button");

function btnResolver() {
  if (waitForPressResolve) waitForPressResolve();
}

async function doIt() {
  btn.addEventListener('click', btnResolver);
  document.getElementById('button').style.visibility='visible';

  for (var i=0; i < myQuestions.length; i++ ) {    
      question.innerHTML = myQuestions[i].question
      aOption.innerHTML = myQuestions[i].answers["a"]
      bOption.innerHTML = myQuestions[i].answers["b"]
      cOption.innerHTML = myQuestions[i].answers["c"]
      await waitForPress();

  }
  btn.removeEventListener('click', btnResolver);
  console.log('Finished');

}











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





// myQuestions.forEach(i => {
//   var button = document.createElement("button");
//   button.innerText = i;
  
//   button.addEventListener("click", function() {
//     console.log(i.question)
//   })
//   aOption.appendChild(button);
// } )


function questionslist(){
  for (var i=0; i < myQuestions.length; i++ ) {
    // console.log(myQuestions[i].question)
    // console.log(myQuestions[i].correctAnswer)
    // console.log(myQuestions[i].answers)
    try {
      question.innerHTML = myQuestions[i].question
      aOption.innerHTML = myQuestions[i].answers["a"]
      bOption.innerHTML = myQuestions[i].answers["b"]
      cOption.innerHTML = myQuestions[i].answers["c"]
    } catch(e) {
      console.log("ERROR")
  }
  }
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

start.addEventListener("click", function() {
    count ++
    countdown();
    doIt()
    })

