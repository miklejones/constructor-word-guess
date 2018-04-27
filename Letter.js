// constructor funtion for handling letters
function Letter(charVal, guessed) {
    this.charVal = charVal;
    this.guessed = guessed;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.showLetter = function () {
        if (this.guessed) {
            return this.charVal;
        }
    };

    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guess = function () {

    };
};

// exporting our Letter constructor
module.exports = Letter;