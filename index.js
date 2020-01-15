// The file containing the logic for the course of the game, which depends on Word.js and:
var inquirer = require('inquirer');
var Letter = require('./letter.js');
var Word = require('./word.js');


// Randomly selects a word and uses the Word constructor to store it
function startGame() {
    var word = new Word("");

}

// Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt([
    /* Pass your questions in here */
  ]).then(answers => {
    // Use user feedback for... whatever!!
  });

// Letter.js should not require any other files.
Letter(); //???

// Word.js should only require Letter.js
Word(Letter()); //???

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js


// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)








