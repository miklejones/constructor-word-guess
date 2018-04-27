var inquirer = require("inquirer");
var Word = require("./Word.js")
var words = ["hello", "world", "fudgeface", "turtle"]
var randWord = "";


function startGame() {
    randWord = words[Math.floor(Math.random() * words.length)];
    wordArray = Array.from(randWord);

    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter!"
        }
    ]).then(function(answers) {
 
    });

}

