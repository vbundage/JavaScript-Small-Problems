/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const questions = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  const answerKey = { 1: 'Douglas Adams', 2: '42', 3: 'A drink', 4: 'Betelgeuse' };

  const questionTemplate = Handlebars.compile(
    document.getElementById("questionTemplate").innerHTML
  );
  Handlebars.registerPartial(
    "option",
    Handlebars.compile(document.getElementById("optionPartial").innerHTML)
  );

  document
    .getElementById("questions")
    .insertAdjacentHTML("beforebegin", questionTemplate({ questions }));

  const form = document.querySelector('form');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const radios = document.querySelectorAll('input[type="radio"]');
  const choices = document.querySelectorAll('.question');

  function checkAnswers() {
    choices.forEach(choice => {
      const id = choice.dataset.id;
      const options = [...choice.querySelectorAll(`[name=question-${id}]`)];
      const selected = options.filter(option => option.checked)[0];
      const msg = choice.lastElementChild;
      const answer = answerKey[id];

      if (!selected) {
        msg.classList.add('incorrect-answer');
        msg.textContent = `You didn't answer this question. Correct answer is: "${answer}".`;
      } else if (selected.value !== answer) {
        msg.classList.add('incorrect-answer');
        msg.textContent = `Wrong Answer. The correct answer is: "${answer}".`;
      } else {
        msg.classList.add('correct-answer');
        msg.textContent = 'Correct Answer';
      }
    });
  }

  function disableSubmit() {
    submitBtn.disabled = true;
    submitBtn.classList.replace('active', 'inactive');
    resetBtn.classList.replace('inactive', 'active');
  }

  function reset() {
    [...radios].forEach(radio => {
      radio.checked = false;
    });

    resetBtn.classList.replace('active', 'inactive');
    submitBtn.classList.replace('inactive', 'active');
    submitBtn.disabled = false;

    document.querySelectorAll('.answer-msg')
      .forEach(msg => msg.classList.remove('incorrect-answer', 'correct-answer'));
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    disableSubmit();
    checkAnswers();
  });

  resetBtn.addEventListener('click', _ => {
    reset();
  });
});