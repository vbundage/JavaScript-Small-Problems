const readline = require('readline-sync');
const shuffleArr = require('shuffle-array');

class Card {
  static MAX_POINTS = 21;
  static SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  static RANKS_POINTS = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    Jack: 10,
    Queen: 10,
    King: 10,
    Ace: 11
  };

  constructor(rank, suit, points) {
    this.rank = rank;
    this.suit = suit;
    this.points = points;
  }

  getRank() {
    return this.rank;
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    for (let idx = 0; idx < Card.SUITS.length; idx++) {
      Object.keys(Card.RANKS_POINTS).forEach(rank => {
        this.cards.push(
          new Card(rank, Card.SUITS[idx], Card.RANKS_POINTS[rank]));
      });
    }
  }

  deal() {
    return this.cards.pop();
  }

  getCardAmount() {
    return this.cards.length;
  }

  shuffle() {
    shuffleArr(this.cards);
  }
}

class Participant {
  constructor() {
    this.score = 0;
    this.resetHand();
  }

  hit(card) {
    this.hand.push(card);
  }

  isBusted() {
    return this.score > Card.MAX_POINTS;
  }

  setScore(score) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }

  getHand() {
    return this.hand;
  }

  resetHand() {
    this.hand = [];
  }
}

class Player extends Participant {
  constructor() {
    super();
    this.money = 5;
  }

  lostBet() {
    this.money--;
  }

  wonBet() {
    this.money++;
  }

  isBroke() {
    return this.money === 0;
  }

  isRich() {
    return this.money === 10;
  }

  getMoney() {
    return this.money;
  }

  hitOrStay() {
    let choice;
    while (true) {
      choice = readline.question("Would you like to hit or stay?(h or s): ");

      if (!['h', 's'].includes(choice)) {
        console.log("Sorry, that was an invalid choice.");
      } else {
        break;
      }
    }

    return choice;
  }
}

class Dealer extends Participant {
  static POINT_LIMIT = 17;
  hide() {
    return this.hand[0];
  }
}

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.reset();
  }

  reset() {
    this.player.resetHand();
    this.dealer.resetHand();
    this.deck = new Deck();
    this.deck.shuffle();
  }

  start() {
    this.displayWelcomeMessage();
    while (true) {
      this.playRound();
      if (!this.playAgain() ||
        (this.player.isBroke() || this.player.isRich())) break;
    }
    this.displayGoodbyeMessage();
  }

  playRound() {
    this.reset();
    this.dealCards();
    this.playerTurn();
    this.dealerTurn();
    this.updatePlayerMoney();
    this.displayResult();
  }

  dealCards() {
    this.player.hit(this.deck.deal());
    this.player.hit(this.deck.deal());
    this.dealer.hit(this.deck.deal());
    this.dealer.hit(this.deck.deal());
  }

  showHands() {
    console.log();
    console.log(`Dealer is showing this card from their hand: ${this.dealer.hide()}`);
    console.log(`Your hand is: ${TwentyOneGame.joinOr(this.player.getHand(), ', ', 'and')}`);
    console.log(`Your total hand score is: ${this.player.getScore()}`);
    console.log(`Your money total is: $${this.player.getMoney()}`);
    console.log();
  }

  playerTurn() {
    this.updatePlayerScore(this.player);
    console.log();
    console.log("___________Player Turn___________");
    while (!this.player.isBusted()) {
      this.showHands();
      if (this.player.hitOrStay() === 'h') {
        console.clear();
        console.log("Player hit!");
        this.player.hit(this.deck.deal());
        this.updatePlayerScore(this.player);
      } else {
        break;
      }
    }
    this.displayEndOfTurn(this.player);
  }

  dealerTurn() {
    this.updatePlayerScore(this.dealer);
    this.dealerRevealHand();
    while (!this.dealer.isBusted() &&
        (this.dealer.getScore() < Dealer.POINT_LIMIT)) {
      if (this.player.isBusted()) break;
      console.log("Dealer hit!");
      this.dealer.hit(this.deck.deal());
      this.updatePlayerScore(this.dealer);
      console.log(`Dealer has a hand of: ${TwentyOneGame.joinOr(this.dealer.getHand(), ', ', 'and')}`);
      console.log(`Dealer point total is: ${this.dealer.getScore()}`);
      console.log();
    }
    this.displayEndOfTurn(this.dealer);
  }

  dealerRevealHand() {
    console.log("___________Dealer Turn___________");
    console.log(`Dealer reveals their hand: ${TwentyOneGame.joinOr(this.dealer.getHand(), ', ', 'and')}`);
    console.log(`Dealer point total is: ${this.dealer.getScore()}`);
    console.log();
  }

  whoWon() {
    if (this.player.getScore() === this.dealer.getScore()) {
      return null;
    } else if (this.player.isBusted() ||
        (this.dealer.getScore() > this.player.getScore() &&
        !this.dealer.isBusted())) {
      return this.dealer;
    } else {
      return this.player;
    }
  }

  updatePlayerScore(player) {
    let score = player.hand.reduce((acc, curr) => acc + curr.points, 0);
    score = this.reCalculateAces(player, score);
    player.setScore(score);
  }

  reCalculateAces(player, score) {
    for (let count = 0; count < player.getHand().length; count++) {
      if (score <= 21) {
        break;
      } else if (player.getHand()[count].getRank() === 'Ace') {
        score -= 10;
      }
    }

    return score;
  }

  updatePlayerMoney() {
    let winner = this.whoWon();
    if (winner === this.player) {
      this.player.wonBet();
    } else if (winner === this.dealer) {
      this.player.lostBet();
    }
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty-One!");
    console.log();
    console.log("The goal of this game is get as close to 21 as possible without going over. If you go over 21, you bust and lose!");
  }

  displayGoodbyeMessage() {
    console.clear();
    console.log();
    console.log("Thanks for playing 21! Have a great day!");
  }

  displayResult() {
    let winner = this.whoWon();
    console.log("      *****Game Over*****");
    console.log("__________Final Scores__________");
    console.log(`Player: ${this.player.getScore()}`);
    console.log(`Dealer: ${this.dealer.getScore()}`);
    console.log();
    if (winner === this.player) {
      console.log("You won the game! Take your winnings!");
    } else if (winner === this.dealer) {
      console.log("Dealer won the game! Hand over your money!");
    } else {
      console.log("It was a tie game. No one wins.");
    }
  }

  displayEndOfTurn(player) {
    if (player.isBusted()) {
      if (player === this.player) {
        console.log("You busted!");
      } else {
        console.log("Dealer busted!");
      }
    } else if (!player.isBusted()) {
      if (player === this.player) {
        console.log("You decided to stay.");
      } else {
        console.log("Dealer decided to stay.");
      }
    }
    console.log();
  }

  playAgain() {
    let choice;
    console.log();
    while (true) {
      choice = readline.question(`Would you like to play again?(y or n): `);
      if (!['y', 'n'].includes(choice)) {
        console.log("Sorry, that was an invalid choice.");
      } else {
        console.clear();
        break;
      }
    }

    return choice === 'y';
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

let game = new TwentyOneGame();
game.start();