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
console.log(answers)
    });
}

// init();

function game(word){
    this.currentGame = new Word(word);
    this.guess = 10;
    var self = this

    this.guess = function(){

        inquirer.prompt([{
            type: "input",
            name: 'guess',
            message: 'what letter would you like to guess?'
        }]).then(function(answers){
            self.currentGame.testGuess(answers.guess)
        })
        
    };

    console.log(this.currentGame)
}

var newGame = new game("Secret Lovers")
newGame.guess();