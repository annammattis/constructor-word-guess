// The file containing the logic for the course of the game, which depends on Word.js and:
var inquirer = require('inquirer');
// var Letter = require('./letter.js');
var Word = require('./word.js');

var letterArray = "abcdefghijklmnopqrstuvwxyz";
var houseWordsOfGot = [
    "As High As Honor",
    "House Arryn",
    "Ours Is The Fury",
    "House Baratheon",
    "We Do Not Sow",
    "House Greyjoy",
    "Hear Me Roar",
    "House Lannister",
    "Winter Is Coming",
    "House Stark",
    "Fire And Blood",
    "House Targaryen",
    "Family Duty Honor",
    "House Tully",
    "Unbowed Unbent Unbroken",
    "House Martell",
    "Growing Strong",
    "House Tyrell",
    "We Stand Together",
    "House Frey",
    "Our Blades Are Sharp",
    "House Bolton",
    "Here We Stand",
    "House Mormont",
    "First In Battle",
    "House Tarly"
];

var random = Math.floor(Math.random() * houseWordsOfGot.length);
var randomOutput = houseWordsOfGot(random);
var compWord = new Word(randomOutput);

var correctAnswer = [];
var incorrectAnswer = [];



// Randomly selects a word and uses the Word constructor to store it
function startGame() {
  // Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt([
  /* Pass your questions in here */
]).then(answers => { [
  type: "input",
  message: "Choose a letter",
  name: "userInput"
];
  // Use user feedback for... whatever!!
  
})
}



// Letter.js should not require any other files.
Letter(); //???

// Word.js should only require Letter.js
Word(Letter()); //???

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js


// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)








