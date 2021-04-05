/* eslint-disable max-lines-per-function */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const apples = document.getElementById('apples');
  const replay = document.getElementById('replay');
  const letters = document.getElementById('spaces');
  const guesses = document.getElementById('guesses');

  const randomWord = (function() {
    let words = ['apple', 'banana', 'orange', 'pear', 'abacus', 'quotient',
      'octothorpe', 'proselytize', 'stipend'];

    return function() {
      if (words.length === 0) return undefined;

      let foundWord = words[parseInt(Math.random() * words.length, 10)];
      words = words.filter(word => word !== foundWord);
      return foundWord;
    };
  })();

  const clearSpan = elem => {
    [...elem.querySelectorAll('span')].forEach(span => span.remove());
  };

  class Game {
    static MAX_GUESSES = 6;

    constructor() {
      this.word = this.chooseWord().split('');
      if (!this.word) return this;
      this.resetDisplay();
      this.bind();
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.createLetters();
    }

    resetDisplay() {
      replay.classList.add('hide');
      document.body.classList.remove('win', 'lose');
      message.textContent = '';
    }

    processGame(event) {
      if (!this.gameOver()) {
        if (new RegExp(/^[a-z]$/).test(event.key)) {
          this.processGuess(event.key);
        } else {
          return;
        }
      }

      if (this.gameWon()) {
        this.unbind();
        replay.classList.remove('hide');
        message.textContent = "You win!";
        document.body.classList.add('win');
      } else if (this.gameLost()) {
        this.unbind();
        replay.classList.remove('hide');
        message.textContent = "Sorry, You're out of guesses";
        document.body.classList.add('lose');
      }
    }

    unbind() {
      document.removeEventListener('keyup', this.processGame);
    }

    bind() {
      this.processGame = this.processGame.bind(this);
      document.addEventListener('keyup', this.processGame);
    }

    chooseWord() {
      let newWord = randomWord();
      if (!newWord) message.textContent = "Sorry, I've run out of words!";

      return newWord;
    }

    createLetters() {
      clearSpan(letters);
      clearSpan(guesses);
      for (let count = 0; count < this.word.length; count += 1) {
        const span = document.createElement('span');
        letters.append(span);
      }
    }

    addGuess(letter) {
      if (this.isUniqueGuess(letter)) {
        this.lettersGuessed.push(letter);
        const span = document.createElement('span');
        span.textContent = letter.toUpperCase();
        guesses.appendChild(span);
      }
    }

    addCorrectGuess(letter) {
      if (this.isCorrectGuess(letter)) {
        const matches = this.word.map(char => {
          if (char === letter) return char;
          return '';
        });

        matches.forEach(this.addLetter);
      }
    }

    addLetter(letter, idx) {
      const spans = [...letters.querySelectorAll('span')];
      if (letter) spans[idx].textContent = letter.toUpperCase();
    }

    processGuess(letter) {
      if (this.isIncorrectGuess(letter)) {
        apples.classList.remove(`guess_${this.incorrectGuesses}`);
        this.incorrectGuesses += 1;
        apples.classList.add(`guess_${this.incorrectGuesses}`);
      }

      this.addCorrectGuess(letter);
      this.addGuess(letter);
    }

    gameOver() {
      return this.gameWon() || this.gameLost();
    }

    gameWon() {
      const spans = [...letters.querySelectorAll('span')];
      return spans.filter(span => span.textContent.length > 0)
        .length === this.word.length;
    }

    gameLost() {
      return this.incorrectGuesses === Game.MAX_GUESSES;
    }

    isUniqueGuess(letter) {
      return !this.lettersGuessed.includes(letter);
    }

    isIncorrectGuess(letter) {
      return !this.word.includes(letter) && this.isUniqueGuess(letter);
    }

    isCorrectGuess(letter) {
      return this.word.includes(letter) && this.isUniqueGuess(letter);
    }
  }

  let game = new Game();

  replay.addEventListener('click', event => {
    event.preventDefault();
    game = new Game();
  });
});