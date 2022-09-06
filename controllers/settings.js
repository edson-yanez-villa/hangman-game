const goSettings = (event, game) => {
    window.location.href = "./settings.html";
    return game;
};

const addWord = (event, game) => {
    const input = document.querySelector("[input-word]");
    const word = input.value;
    input.value = "";
    var words = game["words"] ? game["words"] : [];
    words.push(word);
    game["words"] = words;
    window.location.href = "./game.html";
    return game;
}

const goToIndex = (event, game) => {
    window.location.href = "./index.html";
    return game;
}

export const settings = {
    goSettings,
    addWord,
    goToIndex,
};
