const getWord = (game) => {
    const index = Math.floor(Math.random() * game['words'].length);
    console.log(index);
    game["word"] =  game['words'][index];
    return game;
}

const goToStart = (event, game) => {
    if(!game["words"] || game["words"].length == 0){
        window.location.href = "./settings.html";
    }else{
        game = getWord(game);
        window.location.href = "./game.html";
    }
    return game
};

export const start = {
    goToStart,
};
