const getWord = (game) => {
    const index = Math.floor(Math.random() * game['words'].length);
    game["word"] =  game['words'][index];
    return game;
}

const goToStart = (event) => {
    let game = JSON.parse(sessionStorage.getItem("game")) || {};
    if(!game["words"] || game["words"].length == 0){
        window.location.href = "./settings.html";
    }else{
        game = getWord(game);
        sessionStorage.setItem("game", JSON.stringify(game));
        window.location.href = "./game.html";
    }
};

export const start = {
    goToStart,
    getWord,
};
