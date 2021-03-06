var Letter = require("./letter.js");

// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word(answer) {
    // An array of new Letter objects representing the letters of the underlying word
    this.objArray = [];

    for (var i = 0; i < answer.length; i++) {
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
        // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        this.output = function () {
            var answerOutput = "";
            for (var i = 0; i < this.objArray.length; i++) {
                answerOutput += this.objArray[i] + " ";
            }

            console.log(answerOutput + "\n===========================\n");
        }

        // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
        this.wordGuess = function (word) {
            // var wordArray = word.split();
            for (var i = 0; i < this.objArray.length; i++) {
                this.objArray[i].guess.split(word);
            }

        }
    }


}


module.exports = Word();




