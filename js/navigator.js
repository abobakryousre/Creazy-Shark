<<<<<<< HEAD

<<<<<<< HEAD


// let loginScene = document.getElementsByClassName("login")[0];
// let username = document.getElementById("username");
// let loginBtn = document.getElementById("loginBtn");
let nameEnt=document.getElementById("EnterNameSec");
let load = document.getElementById("load");
let playerNa = document.getElementById("nameEnter");
let btnName=document.getElementById("btnGame");
/**** */
let staticBG = document.getElementById("mainBackground") ;
=======
let backgroundIndex = 0;
let backgrounds = ["../img/loginPage/login3.jpeg",
"../img/loginPage/login4.jpeg",
 "../img/loginPage/login5.jpeg",
"../img/loginPage/login6.jpeg",
"../img/loginPage/login7.jpeg",
"../img/loginPage/login8.jpeg",
"../img/loginPage/login9.jpeg",
"../img/loginPage/login11.jpeg",
"../img/loginPage/login.jpg",
]

let loginScene = document.getElementsByClassName("login")[0];
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
=======
// DOM 
let nameEnt=document.getElementById("EnterNameSec");
let load = document.getElementById("load");
let playerNa = document.getElementById("nameEnter");
let btnName = document.getElementById("btnGame");
/**** */

let staticBG = document.getElementById("mainBackground") ;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
let welcomeScene = document.getElementsByClassName("welcome")[0];
let howToPlayScene = document.getElementsByClassName("how-to-play")[0];
let aboutScene = document.getElementsByClassName("about")[0];
let charactersScene = document.getElementsByClassName("characters")[0];
<<<<<<< HEAD
<<<<<<< HEAD
let levelScene = document.getElementById("levels");


=======
let levelScene = document.getElementsByClassName("levels")[0];
let loginBackground = document.getElementById("loginBackground");

let username = document.getElementById("username");
let loginBtn = document.getElementById("loginBtn");
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
=======
let levelScene = document.getElementById("levels");
///*** */

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
let playBtn = document.getElementById("play");
let howToPlayBtn = document.getElementById("how-to-play");
let aboutBtn = document.getElementById("about");
let exitBtn = document.getElementById("exit");
let backFromHowToPlayBtn = document.getElementById("backFromHowToPlay");
let backFromAboutUsBtn = document.getElementById("backFromAboutUs");
let backFromCharacters = document.getElementById("backFromCharacters");
let backFromLevel = document.getElementById("backFromLevel");
<<<<<<< HEAD
<<<<<<< HEAD
// let characterOne = document.getElementById("characterOne");
// let characterTwo = document.getElementById("characterTwo");
// let characterThree = document.getElementById("characterThree");
=======
/*** */
let difuclltySpan = document.getElementById("difaculty");
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

let buttonSound = document.createElement("audio");
buttonSound.src = "sound/bubble_01.ogg";

<<<<<<< HEAD
=======
let characterOne = document.getElementById("characterOne");
let characterTwo = document.getElementById("characterTwo");
let characterThree = document.getElementById("characterThree");

let buttonSound = document.createElement("audio");
buttonSound.src = "./sound/bubble_01.ogg";
let level = "";
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da

=======
// vars 
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

let easyLevel = document.getElementById("easy");
let meduimLevel = document.getElementById("meduim");
let hardLevel = document.getElementById("hard");
<<<<<<< HEAD

easyLevel.addEventListener("click", ()=>{
<<<<<<< HEAD
    // level = "easy";
    // console.log(level + "  playerNa is: " + playerNa.value);
    LEVEL_SPEED = 0 ; 
    // start game here and use the playerNa and level in your game
});

meduimLevel.addEventListener("click", ()=>{
    // level = "meduim";
    // console.log(level + "  playerNa is: " + playerNa.value);
    LEVEL_SPEED = 2 ; 
    // start game here and use the playerNa and level in your game
=======
    level = "easy";
    console.log(level + "  username is: " + username.value);
    // start game here and use the username and level in your game
});

meduimLevel.addEventListener("click", ()=>{
    level = "meduim";
    console.log(level + "  username is: " + username.value);
    // start game here and use the username and level in your game
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da

});

hardLevel.addEventListener("click", ()=>{
<<<<<<< HEAD
    // level = "hard";
    // console.log(level + "  playerNa is: " + playerNa.value);
    LEVEL_SPEED = 4 ; 
=======
    level = "hard";
    console.log(level + "  username is: " + username.value);
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
    // start game here and use the username and level in your game

})

<<<<<<< HEAD
btnName.addEventListener("click", checkUsername);
=======
loginBtn.addEventListener("click", checkUsername);
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
=======
let LEVEL_SPEED = 1;
let DIFFCUITY = "easy";

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
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
playBtn.addEventListener("click", choseCharacters);
howToPlayBtn.addEventListener("click", howToPlay);
aboutBtn.addEventListener("click", displayInforamtion);
exitBtn.addEventListener("click", loadLoginScene);

<<<<<<< HEAD
<<<<<<< HEAD
// characterOne.addEventListener("click", loadLevelScene);
// characterTwo.addEventListener("click", loadLevelScene);
// characterThree.addEventListener("click", loadLevelScene);
=======
characterOne.addEventListener("click", loadLevelScene);
characterTwo.addEventListener("click", loadLevelScene);
characterThree.addEventListener("click", loadLevelScene);
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da

=======
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

backFromHowToPlayBtn.addEventListener("click", loadWelcomeScene);
backFromAboutUsBtn.addEventListener("click", loadWelcomeScene);
backFromCharacters.addEventListener("click", loadWelcomeScene);
backFromLevel.addEventListener("click", loadCharacterScene);

<<<<<<< HEAD

<<<<<<< HEAD
=======
function changeBackground(){
    loginBackground.src = backgrounds[backgroundIndex];

    if(backgroundIndex < backgrounds.length - 1){
        backgroundIndex ++;
    }else{
        backgroundIndex = 0;
    }
}

setInterval(changeBackground,4000);
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da

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
<<<<<<< HEAD
    }, 25);
=======
    }, 50);
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
=======
function fade(element) {
  let op = 1; // initial opacity
  let timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 25);
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
}

function checkUsername(event){
    buttonSound.play();
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
    if(playerNa.value){
        nameEnt.classList.add("fadeOutUp");
        loadWelcomeScene();
    }else{
<<<<<<< HEAD
        // alert("invaled username");
=======
    if(username.value){
        loadWelcomeScene();
    }else{
        alert("invaled username");
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
        event.preventDefault();
    }
}
function loadWelcomeScene(){
    buttonSound.play();
<<<<<<< HEAD
    fade(nameEnt);
=======
    fade(loginScene);
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
=======
        event.preventDefault();
    }
}

function loadWelcomeScene(){
    buttonSound.play();
    fade(nameEnt);
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
    fade(howToPlayScene);
    fade(aboutScene);
    fade(charactersScene);
    setTimeout(()=>{
        welcomeScene.setAttribute("style", "display: block");
    }, 500);
}
<<<<<<< HEAD
=======

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
function loadLoginScene(){
    buttonSound.play();
    fade(welcomeScene);
    setTimeout(()=>{
<<<<<<< HEAD
<<<<<<< HEAD
        nameEnt.setAttribute("style", "display: block");
=======
        loginScene.setAttribute("style", "display: block");
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
    }, 500);
}
=======
        nameEnt.setAttribute("style", "display: block");
    }, 500);
}

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
function choseCharacters(){
    buttonSound.play();
    fade(welcomeScene);
    setTimeout(()=>{
        charactersScene.setAttribute("style", "display: block");
    }, 500);    

}
<<<<<<< HEAD
function howToPlay(){
    buttonSound.play();

    fade(welcomeScene);
    setTimeout(()=>{
        howToPlayScene.setAttribute("style", "display: block");
    }, 500); 
    
}
=======

function howToPlay(){
    buttonSound.play();

  fade(welcomeScene);
  setTimeout(() => {
    howToPlayScene.setAttribute("style", "display: block");
  }, 500);
}

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
function displayInforamtion(){
    buttonSound.play();
    fade(welcomeScene);
    setTimeout(()=>{
        aboutScene.setAttribute("style", "display: block");
    }, 500); 
    
}
<<<<<<< HEAD
=======

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
function loadCharacterScene(){
    buttonSound.play();
    fade(levelScene);
    setTimeout(()=>{
        charactersScene.setAttribute("style", "display: block");
    }, 500); 

}
<<<<<<< HEAD
=======

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
function loadLevelScene(){
    buttonSound.play();
    fade(charactersScene);
    setTimeout(()=>{
        levelScene.setAttribute("style", "display: block");
    }, 500); 
}
<<<<<<< HEAD
<<<<<<< HEAD

let setPlayerNumber = (num) => {
    playerNumber = num;
    loadLevelScene();
};
=======
>>>>>>> 845f93c186397116b9d93fcc6834e62d618057da
=======

let setPlayerNumber = (num) => {
  playerNumber = num;
  loadLevelScene();
};
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
