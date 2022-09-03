import { start } from "./start.js";

export const clickButton = (event, words) => {
    const buttonType = event.dataset.button;
    if (buttons[buttonType]) {
        return buttons[buttonType](event, words);
    }
};

const buttons = {
    buttonStart: (event, words) => start.goToStart(event, words),
};