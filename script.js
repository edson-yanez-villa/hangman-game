import { clickButton } from "./controllers/controller.js";


var words = [];

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
        const result = clickButton(button.target, words);
        words = result["words"];
        console.log(words); 
    });
});