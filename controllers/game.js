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
    if (incorrectLetters.length < 7){
        verifyLetter(keyValue);
        verifyGame();
    }
});

const goToIndex = (event) => {
    window.location.href = "./index.html";
}

const buttons = {
    buttonLeftGame: (event) => goToIndex(event),
    buttonNewGame: (event) => newGame(event),
};

const newGame = (event) => {
    word = getWord(game);
    console.log(word)
    incorrectLetters = "";
    correctLetters = new Array(word.length);
    renderWords();
    canvaHangman.getContext("2d").clearRect(0, 0, canvaHangman.width, canvaHangman.height)
};

const getWord = (game) => {
    const index = Math.floor(Math.random() * game['words'].length);
    return game['words'][index];
}

buttonsGame.forEach(button => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
        clickButton(button.target);
    });
});

const verifyGame = () => {
    if(correctLetters.join("") === word)
        drawMessage("Ganaste, felicidades", "green");
    else if(incorrectLetters.length >= 7)
        drawMessage("Fin del juego", "red");
};

const drawMessage = (message, color) => {
    const widthCanva = canvaHangman.clientWidth;
    const heightCanva = canvaHangman.clientHeight;
    const pincel = canvaHangman.getContext("2d");
    pincel.fillStyle = color;
    pincel.font = "24px lucida console";
    pincel.beginPath();
    const textWidth = pincel.measureText(message).width;
    pincel.fillText(message, (widthCanva / 2) - (textWidth / 2), heightCanva/4);
};

const renderWords = () => {
    console.log(word);
    const widthCanva = canvaLeters.clientWidth;
    const heightCanva = canvaLeters.clientHeight;
    const widthLine = widthCanva/(correctLetters.length*1.5);

    const pincel = canvaLeters.getContext("2d");
    pincel.clearRect(0, 0, widthCanva, heightCanva);
    pincel.lineWidth = 4;
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

const renderBody = () => {
    const pincel = canvaHangman.getContext("2d");
    pincel.lineWidth = 4;
    pincel.beginPath();
    switch(incorrectLetters.length) {
        case 1:
            drawBase(pincel);
            break;
        case 2:
            drawHead(pincel);
            break;
        case 3:
            drawBody(pincel);
            break;
        case 4:
            pincel.lineWidth = 3;
            drawLeftHand(pincel);
            break;
        case 5:
            pincel.lineWidth = 3;
            drawRightHand(pincel);
            break;
        case 6:
            pincel.lineWidth = 3;
            drawLeftLeg(pincel);
            break;
        case 7:
            pincel.lineWidth = 3;
            drawRightLeg(pincel);
            break;
    }
    pincel.stroke();
};

const drawHead = (pincel) => {
    pincel.arc(257, 29, 10, 0, 2 * Math.PI);
};

const drawBody = (pincel) => {
    pincel.moveTo(257, 39);
    pincel.lineTo(257, 89);
}

const drawLeftHand = (pincel) => {
    pincel.moveTo(257, 39);
    pincel.lineTo(289, 59);
}

const drawRightHand = (pincel) => {
    pincel.moveTo(257, 39);
    pincel.lineTo(225, 59);
}

const drawLeftLeg = (pincel) => {
    pincel.moveTo(257, 89);
    pincel.lineTo(289, 109);
}

const drawRightLeg = (pincel) => {
    pincel.moveTo(257, 89);
    pincel.lineTo(225, 109);
}

const drawBase = (pincel) => {
    pincel.moveTo(80, 0);
    pincel.lineTo(80,canvaHangman.height);
    pincel.moveTo(0, canvaHangman.height);
    pincel.lineTo(canvaHangman.width, canvaHangman.height);
    pincel.moveTo(80, 0);
    pincel.lineTo(257, 0);
    pincel.moveTo(257, 0);
    pincel.lineTo(257, 19);
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
        renderBody();
    }else{
        alert("Ingrese una letra valida de A a la Z");
    }
};

renderWords();
