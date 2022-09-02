var words = [];


buttonStartGame = document.querySelector("[button-start]");

const startGame = () => {
    if(words.length == 0){
        window.location.href = "./settings.html";
    }else{
        window.location.href = "./game.html";
        console.log("hay datos");
    }
};


buttonStartGame.addEventListener("click", startGame);