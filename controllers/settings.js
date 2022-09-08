import { start } from "./start.js";

const goSettings = (event) => {
    window.location.href = "./settings.html";
};

const validateWord = (word) => {    
    const expresion = /[a-zA-Z]{1,8}/g;
    const result = expresion.exec(word);
    if (result)
        return word.length <= 8 && result[0].length == word.length;
    return false;
}

const addWord = (event) => {
    const input = document.querySelector("[input-word]");
    const word = input.value;
    input.value = "";
    if(validateWord(word))
    {
        let game = JSON.parse(sessionStorage.getItem("game")) || {};
        let words = game["words"] ? game["words"] : [];
        words.push(word.toUpperCase());
        game["words"] = words;
        game = start.getWord(game);
        sessionStorage.setItem("game", JSON.stringify(game));
        window.location.href = "./game.html";
    }else{
        alert("Ingrese una palabra de almenos 8 caracteres y que solo contenga letras");
    }
}

const goToIndex = (event) => {
    window.location.href = "./index.html";
}

export const settings = {
    goSettings,
    addWord,
    goToIndex,
};
