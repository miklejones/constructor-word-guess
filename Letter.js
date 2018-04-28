// constructor funtion for handling letters
function Letter(charVal) {
    this.charVal = charVal;
    this.guessed = false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.showLetter = function () {
        if (!this.guessed) {
            // console.log("_");
            return "_";
        } else {
            // console.log(this.charVal)
            return this.charVal;
        }
    };

    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkLetter = function (guess) {
        if (guess === this.charVal) {
            this.guessed = true;
        }
    };
};

// exporting our Letter constructor
module.exports = Letter;


function test() {

    var newLetter = new Letter("a");
    var andreasLetter = new Letter('v');

    andreasLetter.showLetter();
    andreasLetter.checkLetter('d');
    andreasLetter.showLetter();
    andreasLetter.checkLetter('v');
    andreasLetter.showLetter()
}

// console.log(andreasLetter);
// test();
