const questions = document.querySelectorAll('.question-content > .question');
const questionBoxes = document.querySelectorAll('.question-box');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-btn');
const markBtn = document.getElementById('mark-btn');
const modal = document.getElementById('score-modal');
const scoreSpan = document.getElementById('score');
const playAgainBtn = document.getElementById('play-again-btn');
const closeBtn = document.getElementById('close-btn');
let markedQuestions = new Set();
let storeAnswer = Array(15).fill('none');
let possibleAnswers = ['output', 'footer', 'font-color', 'break', 'text-size', 'styles', 'removes-element', 'target', 'enctype', 'method', 'src', 'href', 'readonly', 'formaction', 'legend'];

let currentQuestion = 1;


document.querySelectorAll('.question-content .question input').forEach((input) => {
      input.addEventListener('change', (event) => {
            console.log(event.target.value);
            var number = event.target.parentElement.getAttribute('data-index');
            storeAnswer.splice(number - 1, 1, event.target.value)
            console.log(storeAnswer);

      })
})


function showQuestion(index) {
      questions.forEach(question => question.classList.remove('active'));
      questionBoxes.forEach(box => box.classList.remove('current'));
      questions[index - 1].classList.add('active');
      questionBoxes[index - 1].classList.add('current');
}


questionBoxes.forEach((box, index) => {
      box.addEventListener('click', () => {
            currentQuestion = index + 1;
            console.log(box.innerHTML);
            if (box.innerHTML == possibleAnswers.length) {
                  nextBtn.style.display = 'none';
                  submitBtn.style.display = 'inline-block';
            }
            else {
                  nextBtn.style.display = 'inline-block';
                  submitBtn.style.display = 'none';
            }
            showQuestion(currentQuestion);
      });
});

function updateMarkedQuestions() {
      questionBoxes.forEach((box, index) => {
            if (markedQuestions.has(index + 1)) {
                  box.classList.add('marked');
            } else {
                  box.classList.remove('marked');
            }
      });
}

nextBtn.addEventListener('click', () => {
      if (currentQuestion < questions.length) {
            currentQuestion++;
            if (currentQuestion === possibleAnswers.length) {
                  nextBtn.style.display = 'none';
                  submitBtn.style.display = 'inline-block';
            }
            showQuestion(currentQuestion);
            prevBtn.classList.remove('disabled');
            if (currentQuestion === questions.length) {
                  nextBtn.style.display = 'none';
                  submitBtn.style.display = 'inline-block';
            }
      }
});

prevBtn.addEventListener('click', () => {
      if (currentQuestion > 1) {
            currentQuestion--;
            showQuestion(currentQuestion);
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
            if (currentQuestion === 1) {
                  prevBtn.classList.add('disabled');
            }
      }
});

markBtn.addEventListener('click', () => {
      markedQuestions.has(currentQuestion) ? markedQuestions.delete(currentQuestion) : markedQuestions.add(currentQuestion);
      updateMarkedQuestions();
});

submitBtn.addEventListener('click', () => {
      let score = 0;
      for (let i = 0; i < storeAnswer.length; i++) {
            if (storeAnswer[i] == possibleAnswers[i]) {
                  score++;
            };
      }
      let total = questions.length;
      document.getElementById("score").innerText = score
      modal.style.display = 'block';
});

showQuestion(currentQuestion);
updateMarkedQuestions();

document.querySelector(".start").addEventListener('click', () => {
      document.body.style.backgroundImage = 'none';
      document.querySelector(".start").style.display = 'none'
      document.querySelector(".quiz-container").style.display = 'inline-block'
})

playAgainBtn.addEventListener('click', () => {
      modal.style.display = 'none'; 
      storeAnswer = Array(15).fill('none');
      markedQuestions = new Set()
      currentQuestion = 1;
      document.querySelectorAll('input[type="radio"]').forEach((input) => {
            input.checked = false;
      });
      showQuestion(currentQuestion);
      updateMarkedQuestions();
});


closeBtn.addEventListener('click', () => {
      location.reload();
      document.querySelector(".start").style.display = 'inline-block'
      document.querySelector(".quiz-container").style.display = 'none'
      modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
      if (event.target === modal) {
            modal.style.display = 'none';
      }
});