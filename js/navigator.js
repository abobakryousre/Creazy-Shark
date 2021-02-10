
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

let level = "";

let easyLevel = document.getElementById("easy");
let meduimLevel = document.getElementById("meduim");
let hardLevel = document.getElementById("hard");

easyLevel.addEventListener("click", ()=>{
    level = "easy";
    console.log(level + "  username is: " + username.value);
    // start game here and use the username and level in your game
});

meduimLevel.addEventListener("click", ()=>{
    level = "meduim";
    console.log(level + "  username is: " + username.value);
    // start game here and use the username and level in your game

});

hardLevel.addEventListener("click", ()=>{
    level = "hard";
    console.log(level + "  username is: " + username.value);
    // start game here and use the username and level in your game

})

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
    if(username.value){
        loadWelcomeScene();
    }else{
        alert("invaled username");
        event.preventDefault();
    }
}
function loadWelcomeScene(){
    buttonSound.play();
    fade(loginScene);
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
        loginScene.setAttribute("style", "display: block");
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
