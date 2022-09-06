import { clickButton } from "./controllers/controller.js";

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        button.preventDefault();
        clickButton(button.target);
    });
});
