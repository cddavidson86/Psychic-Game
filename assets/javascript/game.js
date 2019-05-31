 
    // Creates an array that lists out all of the options
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var userGuessArray = [""];

    console.log("built array");

    // Creating variables to hold the number of wins, losses, guesses.
    var wins = 0;
    var losses = 0;
    var remainingGuesses = 10;

    console.log("created number variables");

   // Create variables that hold references to the places in the HTML where we want to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var remainingText = document.getElementById("remaining-text");
    var guessText = document.getElementById("guess-text");

    console.log("created text variables");

    // When the key is pressed activate this function
    document.onkeyup = function(event) {

    var userGuess = event.key;
    // adds to the user array for printing later
    userGuessArray.push(" " + userGuess);

    console.log("ran keypress function");

    // var that is assigned the letter the computer guessed
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log("user guess array: " + userGuessArray);

    // if statement is here
    if (userGuess === computerGuess) {
        wins++;
        remainingGuesses = 10;
        userGuessArray = [];
    }
    if (userGuess !== computerGuess) {
        remainingGuesses--;
    }
    if (remainingGuesses === 0) {
        losses++;
        remainingGuesses = 10;
        userGuessArray = [];
    }

    console.log("wins " + wins);
    console.log("losses " + losses);
    console.log("guesses remaining " + remainingGuesses);

    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    remainingText.textContent = "Guesses remaining: " + remainingGuesses;
    guessText.textContent = "You guessed:  " + userGuessArray;

    }