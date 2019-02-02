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

// Variables that are going to count wins, losses, and number of games
var win = 0;
var loss = 0;
var gamesLeft = 10;

// Variables that call places in the HTML where we will display input
var userInput = document.getElementById("userInput-text");
var cpuInput = document.getElementById("cpuInput-text");
var winText = document.getElementById("win-text");
var gamesLeft = document.getElementById("gamesLeft-text");
var numGuess = document.getElementById("numGuesses-text");



document.onkeyup = function (event) {

    // Determines which key was pressed
    var userGuess = event.key;

    // for (var i = 0; i <= 10; i++) 

    var cpuGuess = cpuOptions[Math.floor(Math.random()* cpuOptions.length)];

    if (userGuess === "a") {

        userInput.textContent = "Your choices: " + userGuess;
    }

    document.write("Your choice " + userGuess);
}