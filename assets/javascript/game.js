// Variables:

var randomNum = Math.floor(Math.floor(26) * Math.random());
// refers to random number between 0 and 26 inclusive

var possible = 'abcdefghijklmnopqrstuvwxyz';
// variable of all possible lowercase letters

var randomLet = possible[randomNum];
// refers to a random letter from the list of possible numbers

var wins = 0

var losses = 0

var guessLeft = 9

var guesses = ''






document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = possible[randomNum];


      if (computerGuess === userGuess) {
      	wins++;
      	document.getElementById("Wins").innerHTML = "Wins: " + wins;
      	document.getElementById("alreadyGuessed").innerHTML = "Your Guesses: ";
      	guesses = '';
      	guessLeft = 9;
      	document.getElementById("GuessLeft").innerHTML = "Guesses Left: " + guessLeft;


      }

      else if ((computerGuess !== userGuess) && (guessLeft > 0)) {
      	guessLeft--;
      	document.getElementById("GuessLeft").innerHTML = "Guesses Left: " + guessLeft;
      	guesses = guesses + userGuess + ", ";
      	document.getElementById("alreadyGuessed").innerHTML = "Your Guesses: " + guesses;   	
      }

      else {
      	losses++;
      	document.getElementById("Losses").innerHTML = "Losses: " + losses;
      	document.getElementById("alreadyGuessed").innerHTML = "Your Guesses: ";
      	guessLeft = 9;
      	document.getElementById("GuessLeft").innerHTML = "Guesses Left: " + guessLeft;
      	guesses = '';
      }
    };

console.log(guesses)





