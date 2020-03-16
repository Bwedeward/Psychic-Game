var wins = 0;
var lose = 0;
var numGuesses = 9;
var guessed = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessedSoFar = document.getElementById("guessed-so-far");

document.onkeyup = function(event) {
  //computer choices a-z
  var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  // Determines which key user pressed
  var userGuess = event.key;
  console.log(userGuess);

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);

  if (userGuess === computerGuess) {
    won();
    console.log("cool");
  }
  if (userGuess !== computerGuess) {
    if (numGuesses >= 1) {
      numGuesses--;
      console.log("WTF MATE");
    }
    if (numGuesses < 1) {
      lose++;
      resetGame();
    }
  }

  function won() {
    wins++;
    resetGame();
  }

  function resetGame() {
    numGuesses = 9;
    guessed = [];
  }

  //Displays guesses, wins and losses
  guessedSoFar.textContent = userGuess;
  winsText.textContent = wins;
  lossesText.textContent = lose;
  guessesLeft.textContent = numGuesses;
};
