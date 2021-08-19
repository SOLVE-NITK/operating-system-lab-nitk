
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
    question: "System calls are executed in user mode.",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b"
  },

  {
    question: "Which of the following is not a valid Unix system call ?",
    answers: {
      a: "fork()",
      b: "getpid()",
      c: "write()",
      d: "console()"
    },
    correctAnswer: "d"
  },

  {
    question: "User can run some privileged instructions in user mode.",
    answers: {
      a: "False",
      b: "True"
    },
    correctAnswer: "a"
  },
  {
    question: "When system boots up, it always starts in ____________.",
    answers: {
      a: "User mode",
      b: "Kernel mode",
      c: "Kernel mode only if safe boot is selected",
      d: "None of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following is/are type of information maintenance system call ?",
    answers: {
      a: "ioctl()",
      b: "chmod()",
      c: "getpid()",
      d: "All of the above"
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
