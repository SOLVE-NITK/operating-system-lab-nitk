
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "Which of the following scheduler is responsible for scheduling process on CPU?",
    answers: {
      a: "Long term scheduler",
      b: "Short term scheduler",
	  c: "Medium term scheduler",
	  d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "The state of a process after it encounters an I/O instruction is ",
    answers: {
      a: "Ready",
      b: "Idle",
      c: "Blocked",
      d: "Running"
    },
    correctAnswer: "c"
  },

  {
    question: "Dispatcher is a module that is concerned with ",
    answers: {
      a: "Assigning ready processes to CPU",
      b: "Assigning ready processes to waiting queue",
	    c: "Assigning running processes to blocked queue",
	    d: "All of above"
    },
    correctAnswer: "a"
  },
  {
    question: "Put the following in the chronological order in the context of the birth of a process executes: Ready, suspended, execute, terminate, create.",
    answers: {
      a: "Ready, suspended, execute, terminate, create",
      b: "Ready, terminate, suspended, execute, create",
      c: "Create, Execute, Ready, Suspended, Terminate",
      d: "Create, Ready, Execute, Suspended, Terminate"
    },
    correctAnswer: "d"
  },
  {
    question: "A CPU scheduling algorithm determines an order for the execution of its scheduled processes. Given 'n' processes to be scheduled on one processor, how many possible different schedules are there?",
    answers: {
      a: "n",
      b: "n<sup>2</sup>",
      c: "n!",
      d: "2<sup>n</sup>"
    },
    correctAnswer: "c"
  }
];


// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
