let readline = require("readline-sync");

class Score {
  constructor() {
    this.resetScore();
  }

  getHumanScore() {
    return this.humanScore;
  }

  getComputerScore() {
    return this.computerScore;
  }

  incrementHumanScore() {
    this.humanScore++;
  }

  incrementComputerScore() {
    this.computerScore++;
  }

  resetScore() {
    this.humanScore = 0;
    this.computerScore = 0;
  }
}

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  toString() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();
  }

  static BOARD_SIZE = 9;

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  displayWithClear() {
    console.clear();
    console.log();
    console.log();
    this.display();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.marker;
    });

    return markers.length;
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  reset() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter++) {
      this.squares[counter] = new Square();
    }
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static MATCH_MAX_SCORE = 3;
  static ROW_MARKER_WIN = 3;
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.score = new Score();
    this.firstPlayer = this.human;
  }

  play() {
    this.displayWelcomeMessage();
    this.playMatch();
    this.displayGoodbyeMessage();
  }

  playMatch() {
    while (true) {
      this.playOnce();
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
      if (this.gameOver() || !this.playAgain()) break;
    }

    this.displayMatchWinner();
  }

  playOnce() {
    this.board.reset();
    this.board.display();

    let currentPlayer = this.firstPlayer;
    while (true) {
      this.playerMoves(currentPlayer);
      if (this.roundOver()) break;
      this.board.displayWithClear();
      currentPlayer = this.togglePlayer(currentPlayer);
    }

    this.updateScores();
    this.board.displayWithClear();
    this.displayResults();
  }

  playAgain() {
    let choice;

    while (true) {
      choice = readline
        .question("Would you like to play again?(y or n): ").toLowerCase();
      if (['y', 'n'].includes(choice)) break;
      console.log("Sorry, that's not a valid choice.");
    }

    console.clear();
    console.log();
    console.log();
    return choice === 'y';
  }

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Tic Tac Toe!');
    console.log();
    console.log(`The first player to reach a score of ${TTTGame.MATCH_MAX_SCORE} wins the game.`);
    console.log();
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

  displayResults() {
    if (this.isRoundWinner(this.human)) {
      console.log("You won this round!");
    } else if (this.isRoundWinner(this.computer)) {
      console.log("I won the round!");
    } else {
      console.log("A tie match. How boring.");
    }

    console.log();
    console.log("The scores are:");
    console.log(`You: ${this.score.getHumanScore()} out of ${TTTGame.MATCH_MAX_SCORE}`);
    console.log(`Me: ${this.score.getComputerScore()} out of ${TTTGame.MATCH_MAX_SCORE}`);
    console.log();
  }

  displayMatchWinner() {
    if (this.score.getHumanScore() > this.score.getComputerScore()) {
      console.log("You won the game! Congratulations!");
    } else if (this.score.getHumanScore() < this.score.getComputerScore()) {
      console.log("I won the game, human!");
    }
  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  playerMoves(player) {
    if (player === this.human) {
      this.humanMoves();
    } else {
      this.computerMoves();
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices, ', ')}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = this.computerCalculatesMove();
    } while (!validChoices.includes(choice));

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  computerCalculatesMove() {
    return this.computerPicksSquareFive() ||
      this.computerOffensiveMove() ||
      this.computerDefensiveMove() ||
      Math.floor((Math.random() * Board.BOARD_SIZE) + 1).toString();
  }

  computerDefensiveMove() {
    return this.computerFindsCriticalSquare(this.human);
  }

  computerOffensiveMove() {
    return this.computerFindsCriticalSquare(this.computer);
  }

  computerPicksSquareFive() {
    if (this.board.squares['5'].isUnused()) {
      return '5';
    }
    return null;
  }

  computerFindsCriticalSquare(player) {
    let squares = TTTGame.POSSIBLE_WINNING_ROWS;
    for (let idx = 0; idx < squares.length; idx++) {

      if (this.board.countMarkersFor(player, squares[idx]) === 2) {
        let square = squares[idx]
          .filter(square => this.board.unusedSquares().includes(square))[0];
        if (!square) continue;
        return square;
      }

    }

    return null;
  }

  updateScores() {
    if (this.someoneWon()) {
      if (this.isRoundWinner(this.human)) {
        this.score.incrementHumanScore();
      } else {
        this.score.incrementComputerScore();
      }
    }
  }

  isRoundWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === TTTGame.ROW_MARKER_WIN;
    });
  }

  someoneWon() {
    return this.isRoundWinner(this.human) || this.isRoundWinner(this.computer);
  }

  roundOver() {
    return this.board.isFull() || this.someoneWon();
  }

  gameOver() {
    return this.score.getHumanScore() === TTTGame.MATCH_MAX_SCORE ||
      this.score.getComputerScore() === TTTGame.MATCH_MAX_SCORE;
  }

  static joinOr(arr, delimeter = ", ", conjunction = "or") {
    let arrCopy = arr.slice();
    if (arr.length === 1) {
      return String(arr[0]);
    } else if (arr.length === 2) {
      return `${arr[0]} ${conjunction} ${arr[1]}`;
    } else {
      arrCopy[arr.length - 1] = `${conjunction} ` + arr[arr.length - 1];
    }

    return arrCopy.join(delimeter);
  }
}

let game = new TTTGame();
game.play();