var inquirer = require("inquirer");
var Word = require("./Word.js")

var words = ["hello", "world", "fudgeface", "turtle"]

function init() {
    //set array for words that have already been used
    usedWords = [];
    playGame();
}


function playGame() {
    

}

function getWord() {
    let rand = Math.floor(Math.random() * words.length);
    let randWord = words[rand];

}

function makeGuess() {
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter!"
        }
    ]).then(function (answers) {

    });


}

init();