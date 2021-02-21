// DOM 
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
///*** */

let playBtn = document.getElementById("play");
let howToPlayBtn = document.getElementById("how-to-play");
let aboutBtn = document.getElementById("about");
let exitBtn = document.getElementById("exit");
let backFromHowToPlayBtn = document.getElementById("backFromHowToPlay");
let backFromAboutUsBtn = document.getElementById("backFromAboutUs");
let backFromCharacters = document.getElementById("backFromCharacters");
let backFromLevel = document.getElementById("backFromLevel");
/*** */
let difuclltySpan = document.getElementById("difaculty");

let buttonSound = document.createElement("audio");
buttonSound.src = "sound/bubble_01.ogg";

// vars 

let easyLevel = document.getElementById("easy");
let meduimLevel = document.getElementById("meduim");
let hardLevel = document.getElementById("hard");
let LEVEL_SPEED = 1 ;  
let DIFFCUITY = "easy" ;

// functions

easyLevel.addEventListener("click", ()=>{
    DIFFCUITY = "easy" ;
    LEVEL_SPEED = 1 ; 
    
});

meduimLevel.addEventListener("click", ()=>{
    DIFFCUITY = "medium" ;
    LEVEL_SPEED = 2 ; 
 
});

hardLevel.addEventListener("click", ()=>{
    DIFFCUITY = "hard" ;
    LEVEL_SPEED = 3 ; 

})

btnName.addEventListener("click", checkUsername);
playBtn.addEventListener("click", choseCharacters);
howToPlayBtn.addEventListener("click", howToPlay);
aboutBtn.addEventListener("click", displayInforamtion);
exitBtn.addEventListener("click", loadLoginScene);


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
    }, 25);
}

function checkUsername(event){
    buttonSound.play();
    if(playerNa.value){
        nameEnt.classList.add("fadeOutUp");
        loadWelcomeScene();
    }else{
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