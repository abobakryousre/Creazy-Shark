
let loginScene = document.getElementsByClassName("login")[0];
let welcomeScene = document.getElementsByClassName("welcome")[0];
let howToPlayScene = document.getElementsByClassName("how-to-play")[0];
let aboutScene = document.getElementsByClassName("about")[0];
let charactersScene = document.getElementsByClassName("characters")[0];
let levelScene = document.getElementsByClassName("levels")[0];

let username = document.getElementById("username");
let loginBtn = document.getElementById("loginBtn");
let playBtn = document.getElementById("play");
let howToPlayBtn = document.getElementById("how-to-play");
let aboutBtn = document.getElementById("about");
let exitBtn = document.getElementById("exit");
let backFromHowToPlayBtn = document.getElementById("backFromHowToPlay");
let backFromAboutUsBtn = document.getElementById("backFromAboutUs");
let backFromCharacters = document.getElementById("backFromCharacters");
let backFromLevel = document.getElementById("backFromLevel");
let characterOne = document.getElementById("characterOne");
let characterTwo = document.getElementById("characterTwo");
let characterThree = document.getElementById("characterThree");

let buttonSound = document.createElement("audio");
buttonSound.src = "./sound/bubble_01.ogg";

loginBtn.addEventListener("click", checkUsername);
playBtn.addEventListener("click", choseCharacters);
howToPlayBtn.addEventListener("click", howToPlay);
aboutBtn.addEventListener("click", displayInforamtion);
exitBtn.addEventListener("click", loadLoginScene);

characterOne.addEventListener("click", loadLevelScene);
characterTwo.addEventListener("click", loadLevelScene);
characterThree.addEventListener("click", loadLevelScene);


backFromHowToPlayBtn.addEventListener("click", loadWelcomeScene);
backFromAboutUsBtn.addEventListener("click", loadWelcomeScene);
backFromCharacters.addEventListener("click", loadWelcomeScene);
backFromLevel.addEventListener("click", loadCharacterScene);




function checkUsername(event){
    buttonSound.play();
    if(username.value){
        loadWelcomeScene();
    }else{
        alert("invaled username");
        event.preventDefault();
    }
}
function loadWelcomeScene(){
    buttonSound.play();
    loginScene.setAttribute("style", "display: none");
    howToPlayScene.setAttribute("style", "display: none");
    aboutScene.setAttribute("style", "display: none");
    charactersScene.setAttribute("style", "display: none");
    welcomeScene.setAttribute("style", "display: block");
}
function loadLoginScene(){
    buttonSound.play();

    welcomeScene.setAttribute("style", "display: none");
    loginScene.setAttribute("style", "display: block");
}
function choseCharacters(){
    buttonSound.play();

    welcomeScene.setAttribute("Style", "display: none");
    charactersScene.setAttribute("style", "display: block");

}
function howToPlay(){
    buttonSound.play();

    welcomeScene.setAttribute("style", "display: none");
    howToPlayScene.setAttribute("style", "display: block");

}
function displayInforamtion(){
    buttonSound.play();
    welcomeScene.setAttribute("style", "display: none");
    aboutScene.setAttribute("style", "display: block");
}
function loadCharacterScene(){
    buttonSound.play();

    levelScene.setAttribute("style", "display: none");
    charactersScene.setAttribute("style", "display: block");
}
function loadLevelScene(){
    buttonSound.play();
    charactersScene.setAttribute("style", "display: none");
    levelScene.setAttribute("style", "display: block");
}
