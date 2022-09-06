import { settings } from "./settings.js";
import { start } from "./start.js";

export const clickButton = (event, game) => {
    const buttonType = event.dataset.button;
    if (buttons[buttonType])
        return buttons[buttonType](event, game);
    else
        return game
};

const buttons = {
    buttonStart: (event, game) => start.goToStart(event, game),
    buttonSettings: (event, game) => settings.goSettings(event, game),
    buttonSaveWord: (event, game) => settings.addWord(event, game),
    buttonCancelSetting: (event, game) => settings.goToIndex(event, game),
};
