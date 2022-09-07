const buttonsGame = document.querySelectorAll("button");

var game = JSON.parse(sessionStorage.getItem("game")) || {};
var word = game["word"];


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
    const widthLine = widthCanva/word.length;

    const pincel = canvaLeters.getContext("2d");
    pincel.fillStyle = "black";
    pincel.lineWidth = 5;

    pincel.beginPath();
    for (let possitionLine = 0; possitionLine < widthCanva; possitionLine += widthLine) {
        pincel.moveTo(possitionLine,heightCanva/2);
        pincel.lineTo(possitionLine + (widthLine*0.7),heightCanva/2);
        pincel.stroke();
    }       
}

renderWords();
