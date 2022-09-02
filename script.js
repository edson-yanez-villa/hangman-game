import { clickButton } from "./controllers/controller.js";


var words = [];

const buttons = document.querySelectorAll("button");

// const startGame = () => {
//     if(words.length == 0){
//         window.location.href = "./settings.html";
//     }else{
//         window.location.href = "./game.html";
//         console.log("hay datos");
//     }
// };


// buttonStartGame.addEventListener("click", startGame);

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
        const result = clickButton(button.target, words);
    });
});