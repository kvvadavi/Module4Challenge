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


    var question1 = "What does HTML stand for?"
    var answers1 = [
      a = "HyperText Markup Language",
      b = "HyperLinks and Text Markup Language",
      c = "Home Tool Markup Language"
    ]

    var question2 = "Who is making the Web standards?"
    var answers2 = [
      a = "Google",
      b = "Microsoft",
      c = "The World Wide Web Consortium"
    ]

    var question3 = "Choose the correct HTML element for the largest heading:"
    var answers3 = [
      a = "<head>",
      b = "<h1>",
      c = "<h6>"
    ]

    var question4 = "What is the correct HTML element for inserting a line break?"
    var answers4 = [
      a = "<break>",
      b = "<lb>",
      c = "<br>"
    ]

    var question5 = "Which character is used to indicate an end tag?"
    var answers5 = [
      a = "<",
      b = "/",
      c = "*"
    ]

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
      aOption.textContent = ""
      bOption.textContent = ""
      cOption.textContent = ""

      document.getElementById('start').style.visibility='visible';
      document.getElementById('highscore').style.visibility='visible';
      start.textContent = "Start Quiz"
    }
  }, 1000);
}


function questionslist(){
  for (var i=0; i < myQuestions.length; i++ ) {
    console.log(myQuestions[i].question)
    console.log(myQuestions[i].correctAnswer)
    console.log(myQuestions[i].answers)
  }
}

function questions(){
  question.textContent = question1
  // options.textContent = "Select the options"
  aOption.textContent = answers1[0]
  bOption.textContent = answers1[1]
  cOption.textContent = answers1[2]

  aOption.addEventListener("click", function(event) {
    questions2()
    event.stopPropagation();
    event.preventDefault()
    correctAnswer ++
    console.log("A clicked")
    mainEl.textContent = "Correct Answer!"
  })
  bOption.addEventListener("click", function(event) {
    questions2()
    event.stopPropagation();
    event.preventDefault()
    console.log("B clicked")
    wrongAnswer ++
    timerClock()
    mainEl.textContent = "Wrong Answer!"

  })
  cOption.addEventListener("click", function(event) {
    questions2()
    event.stopPropagation();
    event.preventDefault()
    console.log("C clicked")
    wrongAnswer ++
    timerClock()
    mainEl.textContent = "Wrong Answer!"
  })

}

function questions2(){
  question.textContent = question2
  // options.textContent = "Select the options"
  aOption.textContent = answers2[0]
  bOption.textContent = answers2[1]
  cOption.textContent = answers2[2]

  aOption.addEventListener("click", function(event) {
    questions3()
    event.stopPropagation();
    event.preventDefault()
    wrongAnswer ++
    console.log("A clicked")
    mainEl.textContent = "Wrong Answer!"
    timerClock()
  })
  bOption.addEventListener("click", function(event) {
    event.preventDefault()
    event.stopPropagation();
    questions3()
    console.log("B clicked")
    wrongAnswer ++
    mainEl.textContent = "Wrong Answer!"
    timerClock()

  })
  cOption.addEventListener("click", function(event) {
    questions3()
    event.stopPropagation();
    event.preventDefault()
    console.log("C clicked")
    correctAnswer ++
    mainEl.textContent = "Correct Answer!"

  })
}

function questions3(){
  question.textContent = question3
  // options.textContent = "Select the options"
  aOption.textContent = answers3[0]
  bOption.textContent = answers3[1]
  cOption.textContent = answers3[2]

  aOption.addEventListener("click", function(event) {
    questions4()
    event.stopPropagation();
    event.preventDefault()
    wrongAnswer ++
    console.log("A clicked")
    mainEl.textContent = "Wrong Answer!"
    timerClock()
  })
  bOption.addEventListener("click", function(event) {
    questions4()
    event.stopPropagation();
    event.preventDefault()
    console.log("B clicked")
    correctAnswer ++
    mainEl.textContent = "Correct Answer!"

  })
  cOption.addEventListener("click", function(event) {
    questions4()
    event.stopPropagation();
    event.preventDefault()
    console.log("C clicked")
    wrongAnswer ++
    mainEl.textContent = "Wrong Answer!"
    timerClock()

  })
}


function questions4(){
  question.textContent = question4
  // options.textContent = "Select the options"
  aOption.textContent = answers4[0]
  bOption.textContent = answers4[1]
  cOption.textContent = answers4[2]

  aOption.addEventListener("click", function(event) {
    questions5()
    event.stopPropagation();
    event.preventDefault()
    wrongAnswer ++
    console.log("A clicked")
    mainEl.textContent = "Wrong Answer!"
    timerClock()
  })
  bOption.addEventListener("click", function(event) {
    questions5()
    event.stopPropagation();
    event.preventDefault()
    console.log("B clicked")
    wrongAnswer ++
    mainEl.textContent = "Wrong Answer!"
    timerClock()
  })
  cOption.addEventListener("click", function(event) {
    questions5()
    event.stopPropagation();
    event.preventDefault()
    console.log("C clicked")
    correctAnswer ++
    mainEl.textContent = "Correct Answer!"

  })
}

function questions5(){
  question.textContent = question5
  // options.textContent = "Select the options"
  aOption.textContent = answers5[0]
  bOption.textContent = answers5[1]
  cOption.textContent = answers5[2]

  aOption.addEventListener("click", function(event) {
    final()
    event.stopPropagation();
    event.preventDefault()
    wrongAnswer ++
    console.log("A clicked")
    mainEl.textContent = "Wrong Answer!"
    timerClock()
    clearInterval(timeInterval)
  })
  bOption.addEventListener("click", function(event) {
    final()
    event.stopPropagation();
    event.preventDefault()
    console.log("B clicked")
    correctAnswer ++
    mainEl.textContent = "Correct Answer!"
    clearInterval(timeInterval)

  })
  cOption.addEventListener("click", function(event) {
    final()
    event.stopPropagation();
    event.preventDefault()
    console.log("C clicked")
    wrongAnswer ++
    mainEl.textContent = "Wrong Answer!"
    timerClock()
    clearInterval(timeInterval)
  })
}



function timerClock() {

  if (timeLeft < 0) {
    clearInterval(timeInterval)
    final()
  }
  timeLeft = timeLeft - 10
  console.log(timeLeft)
}


function final(){
  console.log("Completed")
  timerEl.textContent = ""
  question.textContent = "Game Over!"
  aOption.textContent = ""
  bOption.textContent = ""
  cOption.textContent = ""
  mainEl.textContent = "Why"
  document.getElementById('start').style.visibility='visible';
  document.getElementById('highscore').style.visibility='visible';
  start.textContent = "Start Quiz"
  document.getElementById('main').style.visibility='hidden';
  clearInterval(timeInterval)
}

start.addEventListener("click", function() {
    count ++
    countdown();
    questionslist()
    })

