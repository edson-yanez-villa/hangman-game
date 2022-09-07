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

    const correctWord = ["A", "B", "C", "D", "F", "H", "I", "J"];
    const widthCanva = canvaLeters.clientWidth;
    const heightCanva = canvaLeters.clientHeight;
    const widthLine = widthCanva/(correctWord.length*1.5);

    const em = canvaLeters.offsetHeight;

    let pincel = canvaLeters.getContext("2d");

    pincel.lineWidth = 5;
    pincel.font = "32px lucida console";
    pincel.beginPath();
    
    let possitionLine = 0;
    correctWord.forEach(letter => {
        pincel.fillText(letter, possitionLine+(widthLine/2) - 14, heightCanva/2 - 30);
        pincel.moveTo(possitionLine, heightCanva/2);
        pincel.lineTo(possitionLine + (widthLine*0.8),heightCanva/2);
        pincel.stroke();
        possitionLine += widthLine;
    });
}

renderWords();
