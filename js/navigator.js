
let loginScene = document.getElementsByClassName("login")[0];
let welcomeScene = document.getElementsByClassName("welcome")[0];
let howToPlayScene = document.getElementsByClassName("how-to-play")[0];
let aboutScene = document.getElementsByClassName("about")[0];

let username = document.getElementById("username");
let loginBtn = document.getElementById("loginBtn");
let playBtn = document.getElementById("play");
let howToPlayBtn = document.getElementById("how-to-play");
let aboutBtn = document.getElementById("about");
let exitBtn = document.getElementById("exit");
let backFromHowToPlayBtn = document.getElementById("backFromHowToPlay");
let backFromAboutUsBtn = document.getElementById("backFromAboutUs");

loginBtn.addEventListener("click", checkUsername); // why when i called the checkUsername Function with () not working
playBtn.addEventListener("click", startGame);
howToPlayBtn.addEventListener("click", howToPlay);
aboutBtn.addEventListener("click", displayInforamtion);
exitBtn.addEventListener("click", loadLoginScene);
backFromHowToPlayBtn.addEventListener("click", loadWelcomeScene);
backFromAboutUsBtn.addEventListener("click", loadWelcomeScene);


function checkUsername(event){

    if(username.value.match(/\b([a-zÀ-ÿ][-,a-z. ']+[ ]*)+/)){
        loadWelcomeScene();
    }else{
        alert("invaled username");
        event.preventDefault();
    }
}
function loadWelcomeScene(){
    loginScene.setAttribute("style", "display: none");
    howToPlayScene.setAttribute("style", "display: none");
    aboutScene.setAttribute("style", "display: none");
    welcomeScene.setAttribute("style", "display: block");
}
function loadLoginScene(event){
    welcomeScene.setAttribute("style", "display: none");
    loginScene.setAttribute("style", "display: block");
}
function startGame(event){

}
function howToPlay(event){
    welcomeScene.setAttribute("style", "display: none");
    howToPlayScene.setAttribute("style", "display: block");

}
function displayInforamtion(event){
    welcomeScene.setAttribute("style", "display: none");
    aboutScene.setAttribute("style", "display: block");
}
