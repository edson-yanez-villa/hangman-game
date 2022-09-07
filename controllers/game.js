const buttonsGame = document.querySelectorAll("button");

var game = JSON.parse(sessionStorage.getItem("game")) || {};
var word = game["word"];

var correctLetters = new Array(word.length);
var incorrectLetters

const canvaHangman = document.querySelector("[box-hangman]");
const canvaLeters = document.querySelector("[box-leters]");

const clickButton = (event) => {
    const buttonType = event.dataset.button;
    if (buttons[buttonType])
        buttons[buttonType](event);
};

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

const renderWords = () => {
    const widthCanva = canvaLeters.clientWidth;
    const heightCanva = canvaLeters.clientHeight;
    const widthLine = widthCanva/(correctLetters.length*1.5);

    const pincel = canvaLeters.getContext("2d");
    pincel.lineWidth = 5;
    pincel.font = "32px lucida console";
    pincel.beginPath();
    
    let possitionLine = 0;
    for (let index = 0; index < correctLetters.length; index++) {
        if (correctLetters[index])
            pincel.fillText(correctLetters[index], possitionLine + (widthLine/2) - 14, heightCanva/2 - 30);
        pincel.moveTo(possitionLine, heightCanva/2);
        pincel.lineTo(possitionLine + (widthLine*0.8),heightCanva/2);
        pincel.stroke();
        possitionLine += widthLine;
    }
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
        incorrectLetters.push(letter);
};

const isValidLetter = (letter) => {
    const expresion = /[a-zA-Z]/g;
    const result = expresion.exec(letter);
    return letter.length == 1 && result[0].length == 1;
};

const verifyLetter = (letter) => {
    if (isValidLetter(letter)){
        upperLetter = letter.toUpperCas();
    }else{
        alert("Ingrese una letra valida de A a la Z");
    }
};

renderWords();
