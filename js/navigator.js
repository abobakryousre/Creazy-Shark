


// let loginScene = document.getElementsByClassName("login")[0];
// let username = document.getElementById("username");
// let loginBtn = document.getElementById("loginBtn");
let nameEnt=document.getElementById("EnterNameSec");
let load = document.getElementById("load");
let playerNa = document.getElementById("nameEnter");
let btnName=document.getElementById("btnGame");
/**** */
let staticBG = document.getElementById("mainBackground") ;
let welcomeScene = document.getElementsByClassName("welcome")[0];
let howToPlayScene = document.getElementsByClassName("how-to-play")[0];
let aboutScene = document.getElementsByClassName("about")[0];
let charactersScene = document.getElementsByClassName("characters")[0];
let levelScene = document.getElementById("levels");


let playBtn = document.getElementById("play");
let howToPlayBtn = document.getElementById("how-to-play");
let aboutBtn = document.getElementById("about");
let exitBtn = document.getElementById("exit");
let backFromHowToPlayBtn = document.getElementById("backFromHowToPlay");
let backFromAboutUsBtn = document.getElementById("backFromAboutUs");
let backFromCharacters = document.getElementById("backFromCharacters");
let backFromLevel = document.getElementById("backFromLevel");
// let characterOne = document.getElementById("characterOne");
// let characterTwo = document.getElementById("characterTwo");
// let characterThree = document.getElementById("characterThree");

let buttonSound = document.createElement("audio");
buttonSound.src = "sound/bubble_01.ogg";



let easyLevel = document.getElementById("easy");
let meduimLevel = document.getElementById("meduim");
let hardLevel = document.getElementById("hard");

easyLevel.addEventListener("click", ()=>{
    // level = "easy";
    console.log(level + "  playerNa is: " + playerNa.value);
    LEVEL_SPEED = 0 ; 
    // start game here and use the playerNa and level in your game
});

meduimLevel.addEventListener("click", ()=>{
    // level = "meduim";
    console.log(level + "  playerNa is: " + playerNa.value);
    LEVEL_SPEED = 1 ; 
    // start game here and use the playerNa and level in your game

});

hardLevel.addEventListener("click", ()=>{
    // level = "hard";
    console.log(level + "  playerNa is: " + playerNa.value);
    LEVEL_SPEED = 2 ; 
    // start game here and use the username and level in your game

})

btnName.addEventListener("click", checkUsername);
playBtn.addEventListener("click", choseCharacters);
howToPlayBtn.addEventListener("click", howToPlay);
aboutBtn.addEventListener("click", displayInforamtion);
exitBtn.addEventListener("click", loadLoginScene);

// characterOne.addEventListener("click", loadLevelScene);
// characterTwo.addEventListener("click", loadLevelScene);
// characterThree.addEventListener("click", loadLevelScene);


backFromHowToPlayBtn.addEventListener("click", loadWelcomeScene);
backFromAboutUsBtn.addEventListener("click", loadWelcomeScene);
backFromCharacters.addEventListener("click", loadWelcomeScene);
backFromLevel.addEventListener("click", loadCharacterScene);



function fade(element) {
    let op = 1;  // initial opacity
    let timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function checkUsername(event){
    buttonSound.play();
    if(playerNa.value){
        nameEnt.classList.add("fadeOutUp");
        loadWelcomeScene();
    }else{
        // alert("invaled username");
        event.preventDefault();
    }
}
function loadWelcomeScene(){
    buttonSound.play();
    fade(nameEnt);
    fade(howToPlayScene);
    fade(aboutScene);
    fade(charactersScene);
    setTimeout(()=>{
        welcomeScene.setAttribute("style", "display: block");
    }, 500);
}
function loadLoginScene(){
    buttonSound.play();
    fade(welcomeScene);
    setTimeout(()=>{
        nameEnt.setAttribute("style", "display: block");
    }, 500);
}
function choseCharacters(){
    buttonSound.play();
    fade(welcomeScene);
    setTimeout(()=>{
        charactersScene.setAttribute("style", "display: block");
    }, 500);    

}
function howToPlay(){
    buttonSound.play();

    fade(welcomeScene);
    setTimeout(()=>{
        howToPlayScene.setAttribute("style", "display: block");
    }, 500); 
    
}
function displayInforamtion(){
    buttonSound.play();
    fade(welcomeScene);
    setTimeout(()=>{
        aboutScene.setAttribute("style", "display: block");
    }, 500); 
    
}
function loadCharacterScene(){
    buttonSound.play();
    fade(levelScene);
    setTimeout(()=>{
        charactersScene.setAttribute("style", "display: block");
    }, 500); 

}
function loadLevelScene(){
    buttonSound.play();
    fade(charactersScene);
    setTimeout(()=>{
        levelScene.setAttribute("style", "display: block");
    }, 500); 
}

let setPlayerNumber = (num) => {
    playerNumber = num;
    loadLevelScene();
};