
// An array for the Alphabet allowing an option for the Computer
var cpuOptions = ["a",
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
"z",
]

// An array for the Alphabet allowing an option for the User
var userOptions = ["a",
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
"z",
]

// Blank array for storing my key strokes
var listGuess = [];

// Variables that are going to count wins, losses, and number of games
var win = 0;
var loss = 0;
var gamesLeft = 10;
var guessesLeft = 10;


// Variables that call places in the HTML where we will display input
var userInput = document.getElementById("userInput-text");
var cpuInput = document.getElementById("cpuInput-text");
var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var gamesLeft = document.getElementById("gamesLeft-text");
var numGuess = document.getElementById("numGuesses-text");



document.onkeyup = function (event) {


// Determines which key was pressed
var userGuess = event.key;

// Allows the computer to choose a letter in the Alphabet
 var cpuGuess = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];


// If statement that will determine which key is pressed
if (userGuess === userOptions) {


    // The if statement continues... if the user guesses what the computer is thinking then add 1 to their score and resets the array
} else if (cpuGuess === userGuess) {
    win++;
    listGuess = [];
    
    // If statement continued... if the user doesn't guess what the user is thinkning in 10 tries then add 1 to their losses and resets the array
} else {
    guessesLeft--;
    if (guessesLeft === 0) {
        listGuess = [];
        guessesLeft = 10;
        loss++;

    }
}




// Pushes the the key strokes from the user into an array that will display on the screen so the user knows which keys have been pressed.
listGuess.push(userGuess)

// Displays our input onto the DOM with delcared variables
winText.textContent = "wins: " + win;
lossText.textContent = "losses: " + loss;
userInput.textContent = "Your choices: " + userGuess;
cpuInput.textContent = "Computer choice: " + cpuGuess;
numGuess.textContent = "Your guesses: " + listGuess;

}
