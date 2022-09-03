const goToStart = (event, words) => {
    if(words.length == 0){
        window.location.href = "./settings.html";
        words.push("Hola")
    }else{
        window.location.href = "./game.html";
    }
    return {words}
};

export const start = {
    goToStart,
};
