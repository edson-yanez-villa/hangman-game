import { clickButton } from "./controllers/controller.js";

var game = {};

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
        const result = clickButton(button.target, game);
        game = result;
        console.log(game);
    });
});
