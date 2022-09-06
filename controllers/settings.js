const goSettings = (event, game) => {
    window.location.href = "./settings.html";
    return game;
};

const validateWord = (word) => {    
    const expresion = /[a-zA-Z]{1,8}/g;
    const result = expresion.exec(word);
    return word.length <= 8 && result[0].length == word.length;
}

const addWord = (event, game) => {
    const input = document.querySelector("[input-word]");
    const word = input.value;
    input.value = "";
    if(validateWord(word))
    {
        var words = game["words"] ? game["words"] : [];
        words.push(word.toLowerCase());
        game["words"] = words;
        window.location.href = "./game.html";
    }else{
        alert("Ingrese una palabra de almenos 8 caracteres y que solo contenga letras");
    }
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
