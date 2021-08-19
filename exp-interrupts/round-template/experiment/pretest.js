
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
      question: "A processor needs software interrupt to",
      answers: {
        a: "test the interrupt system of the processor",
        b: "implement coroutines",
        c: "obtain system services which need execution of privileged instructions",
        d: "return from subroutine"
      },
      correctAnswer: "c"
    },

    {
      question: "Interrupts form an important part of _____ systems.",
      answers: {
        a: "Batch processing",
        b: "Multitasking",
        c: "Multi-user",
        d: "Real-time processing"
      },
      correctAnswer: "d"
    },

    {
      question: "An interrupt that can be temporarily ignored is",
      answers: {
        a: "Vectored interrupt",
        b: "Maskable interrupt",
        c: "Non-maskable interrupt",
        d: "High priority interrupt"
      },
      correctAnswer: "b"
    },
    {
        question: "The return address from the interrupt-service routine is stored on the",
        answers: {
          a: "System heap",
          b: "Processor register",
          c: "Memory",
          d: "Processor stack"
        },
        correctAnswer: "d"
      },
    {
        question: "In case of polling, the controller keeps monitoring the flags or signals one by one for all devices and provides service to components in need.",
    answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
