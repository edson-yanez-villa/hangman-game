import { settings } from "./settings.js";
import { start } from "./start.js";

export const clickButton = (event) => {
    const buttonType = event.dataset.button;
    if (buttons[buttonType])
        buttons[buttonType](event);
};

const buttons = {
    buttonStart: (event) => start.goToStart(event),
    buttonSettings: (event) => settings.goSettings(event),
    buttonSaveWord: (event) => settings.addWord(event),
    buttonCancelSetting: (event) => settings.goToIndex(event),
    buttonLeftGame: (event) => gamePage.goToIndex(event),
};
