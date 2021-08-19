
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
      question: "Which of the following scheduling algorithm gives minimum average waiting time?",
      answers: {
        a: "Shortest Job First algorithm",
        b: "First Come, First Serve algorithm",
        c: "Round Robin algorithm",
        d: "Priority Scheduling algorithm"
      },
      correctAnswer: "a"
    },

    {
      question: "Aging is used to",
      answers: {
        a: "Avoid deadlock",
        b: "Reduce scheduling time",
        c: "Reduce context switching time",
        d: "Reduce the waiting time of a process"
      },
      correctAnswer: "d"
    },

    {
      question: "The performance of Round Robin algorithm depends heavily on ",
      answers: {
        a: "Size of the process",
        b: "The I/O bursts of the process",
        c: "The CPU bursts of the process",
        d: "The size of the time quantum"
      },
      correctAnswer: "d"
    },
    {
      question: "Consider the following table of arrival time and burst time for three processes P1, P2 and P3. <br> Process = [P1,P2,P3] <br> Arrival time (ms) = [0,1,2]  <br> Burst time = [9,4,9] <br> The pre-emptive Shortest Job First scheduling algorithm is used. Scheduling is carried out only at arrival or completion of processes. What is the average waiting time for the three processes?",
      answers: {
        a: "4.3ms",
        b: "5.0ms",
        c: "6.33ms",
        d: "7.33ms"
      },
      correctAnswer: "b"
    },
    {
      question: "Suppose a system contains n processes and system uses the Round Robin algorithm for CPU scheduling then which data structure is best suited for ready queue of the process?",
      answers: {
        a: "Stack",
        b: "Queue",
        c: "Circular queue",
        d: "Tree"
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
