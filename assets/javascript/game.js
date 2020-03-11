document.onkeyup = function(event) {
  //var computerOptions = ["abcdefghijklmnopqrstuvwxyz"];
  //var computerChoices = computerOptions.split(" ");
  var computerChoices = ["r", "p", "s"];

  // Determines which key was pressed.
  var userGuess = event.key;
  console.log(userGuess);

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);

  if (userGuess === computerGuess) {
    console.log("cool");
  }
  if (userGuess !== computerGuess) {
    console.log("WTF MATE");
  }
};
