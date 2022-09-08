const buttonsGame = document.querySelectorAll("button");

var game = JSON.parse(sessionStorage.getItem("game")) || {};
var word = game["word"];

var correctLetters = new Array(word.length);
var incorrectLetters = "";

const canvaHangman = document.querySelector("[box-hangman]");
const canvaLeters = document.querySelector("[box-leters]");

const clickButton = (event) => {
    const buttonType = event.dataset.button;
    if (buttons[buttonType])
        buttons[buttonType](event);
};

document.addEventListener('keyup', (event) => {
    const keyValue = event.key;
    verifyLetter(keyValue);
    verifyGame();
});

const goToIndex = (event) => {
    window.location.href = "./index.html";
}

const buttons = {
    buttonLeftGame: (event) => goToIndex(event),
};


buttonsGame.forEach(button => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
        clickButton(button.target);
    });
});

const gameIsWon = () => {
    console.log(correctLetters.toString());
    if(correctLetters.toString() == word){
        return true;
    }
    return false;
};

const isGameLose = () => {
    if(incorrectLetters.length >= 7)
        return true;
    return false;
};

const verifyGame = () => {
    if(gameIsWon())
        drawMessage("Ganaste, felicidades", "green");
    else if(isGameLose())
        drawMessage("Fin del juego", "red");
};

const drawMessage = (message, color) => {
    console.log("Entro");
    const widthCanva = canvaHangman.clientWidth;
    const heightCanva = canvaHangman.clientHeight;

    const pincel = canvaHangman.getContext("2d");
    pincel.fillStyle = color;
    pincel.font = "32px lucida console";
    pincel.beginPath();
    const textWidth = pincel.measureText(message).width;
    pincel.fillText(message, (widthCanva / 3) - (textWidth / 2), heightCanva / 2);
};

const renderWords = () => {
    const widthCanva = canvaLeters.clientWidth;
    const heightCanva = canvaLeters.clientHeight;
    const widthLine = widthCanva/(correctLetters.length*1.5);

    const pincel = canvaLeters.getContext("2d");
    pincel.clearRect(0, 0, widthCanva, heightCanva);
    pincel.lineWidth = 5;
    pincel.fillStyle = "#0A3871";
    pincel.font = "32px lucida console";
    pincel.beginPath();
    
    let possitionLine = 0;
    for (let index = 0; index < correctLetters.length; index++) {
        if (correctLetters[index])
            pincel.fillText(correctLetters[index], possitionLine + (widthLine/2) - 18, heightCanva/2 - 30);
        pincel.moveTo(possitionLine, heightCanva/2);
        pincel.lineTo(possitionLine + (widthLine*0.8),heightCanva/2);
        pincel.stroke();
        possitionLine += widthLine;
    }
    pincel.font = "24px lucida console";
    const textWidth = pincel.measureText(incorrectLetters).width;
    pincel.fillText(incorrectLetters, (widthCanva / 3) - (textWidth / 2), heightCanva / 1.1);
}

const fillCorrectLetters = (letter) => {
    for (let index = 0; index < word.length; index++) {
        if (letter === word[index]){
            correctLetters[index] = letter
        }
    }
}

const fillIncorrectLetters = (letter) => {
    if (!incorrectLetters.match(letter))
        incorrectLetters += letter;
};

const isValidLetter = (letter) => {
    const expresion = /[a-zA-Z]/g;
    const result = expresion.exec(letter);
    if(result)
        return letter.length == 1 && result[0].length == 1;
    return false;
};

const verifyLetter = (letter) => {
    if (isValidLetter(letter)){
        upperLetter = letter.toUpperCase();
        if (word.match(upperLetter))
            fillCorrectLetters(upperLetter);
        else
            fillIncorrectLetters(upperLetter);
        renderWords();
    }else{
        alert("Ingrese una letra valida de A a la Z");
    }
};

renderWords();
