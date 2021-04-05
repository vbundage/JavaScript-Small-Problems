document.addEventListener('DOMContentLoaded', event => {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');
  let button = document.querySelector('[type="submit"]');
  let answer;
  let guesses;

  function newGame() {
    button.disabled = false;
    form.reset();
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = "Guess a number from 1 to 100";
  }
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    let message = '';

    guesses += 1;

    if (guess === answer) {
      button.disabled = true;
      message = `You guessed it! It took you ${guesses} guesses.`;
    }

    if (guess > answer) message = `My number is lower than ${guess.toString()}`;
    if (guess < answer) message = `My number is higher than ${guess.toString()}`;
    if (Number.isNaN(guess) ||
      guess > 100 || guess < 1) message = `Please enter an number between 1 and 100.`;
    
    paragraph.textContent = message;
  });
  
  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });

  newGame();
});