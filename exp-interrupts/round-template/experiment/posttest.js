
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
      question: "The time between the receiver of an interrupt and its service is ______.",
      answers: {
        a: "Interrupt latency",
        b: "Cycle time",
        c: "Switching time",
        d: "None of the above"
      },
      correctAnswer: "a"
    },

    {
      question: "Following are the interrupt sources handled by the computer.<br>i. Interrupt from CPU temperature sensor (raises interrupt if CPU temperature is too high)<br>ii. Interrupt from Mouse (raises interrupt if the mouse is moved or a button is pressed)<br>iii. Interrupt from Keyboard (raises interrupt when a key is pressed or released)<br>iv. Interrupt from Hard Disk (raises interrupt when a disk read is completed)<br>Which one of these will be handled at the HIGHEST priority?",
      answers: {
        a: "Interrupt from Hard Disk",
        b: "Interrupt from Mouse",
        c: "Interrupt from Keyboard",
        d: "Interrupt from CPU temperature sensor"
      },
      correctAnswer: "d"
    },

    {
      question: "The signal sent to the device from the processor to the device after receiving an interrupt is",
      answers: {
       a: "Interrupt-acknowledge",
        b: "Return signal",
        c: "Service signal",
        d: "Permission signal"
      },
      correctAnswer: "a"
    },
    {
      question: "Which table handle stores the addresses of the interrupt handling subroutines?",
      answers: {
        a: "Vector table",
        b: "ymbol link table",
        c: "Interrupt-vector table",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "A single Interrupt line can be used to service n different devices?",
      answers: {
        a: "False",
        b: "True"
      },
      correctAnswer: "b"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
