
// import * as initModule from "./init.js" ;
// import * as EnemyFishModule from "EnemyFish.js" ;
// import * as specialFishModule from "specialFish.js" ;
// import * as SoundModule from "Sound.js" ;
// import * as boardModule from"board.js" ;
// import * as EnemyFishesCreationAndMovementModule from"EnemyFishesCreationAndMovement.js" ;
// import * as scoreAndLevelModule from "scoreAndLevel.js" ;
// import * as CollisionDetectionModule from "CollisionDetection.js" ;
// import * as UpAndDownDivsModule from "UpAndDownDivs.js" ;
// import * as timerModule from "timer.js" ;
// import * as randomMotionModule from "randomMotion.js" ;
// import * as seaStarModule from "seaStar.js" ;
// import * as localStorageFunctionsModule from "localStorageFunctions.js" ;
// import * as finalBadgesModule from "finalBadges.js";


let gamePlay;
let exitFlag = false;
let escape = false;
let pauseModal = document.getElementById('pauseModal');
const keyboard = {
    right: false,
    left: false,
    up: false,
    esc: false,
    any: false,
};
document.onkeydown = null ;  /// mod location.reload

container.onmousemove = (event) => {

    containerBoundingRect = container.getBoundingClientRect();
    
    if (parseInt(fishPlayer.style.left) < event.clientX - containerBoundingRect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif"; // change right
    } else if (parseInt(fishPlayer.style.left) > event.clientX - containerBoundingRect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-left.gif"; // change left
    }

    fishPlayer.style.left = (event.clientX - containerBoundingRect.left) + 'px';
    fishPlayer.style.top = (event.clientY - containerBoundingRect.top) + 'px';


    if (event.clientX >= window.innerWidth - fishPlayer.width) {

        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
    }

    if (event.clientY >= window.innerHeight - fishPlayer.height) {

        fishPlayer.style.top = window.innerHeight - containerBoundingRect.top - fishPlayer.height + 'px';
    }

};

// document.onkeydown = (event) =>  {
 
//     if (event.keyCode === 27){
//         if (!confirm("exit Playing ?"))
//             location.reload();
//         else{
//             displayGameOver();
//             GOSound.play();  // sound 
//             fishPlayer.style.display = "none";
//             board.style.display = "none";
//             clearInterval(interval);
//             clearInterval(t);
//             checkForFinalBadges();
//             updateLocalStorage();
//             updateCurrentPlayerBadges();
//             localStorage.removeItem(playerNa.value);  // use this mod for now ****#
//             exit();
//         }
        
        
//     }

//     if (event.key === ' ' || event.key === 'Spacebar')
//         event.preventDefault();

// };


// btnName.onclick = () => {
 
//     if (playerNa.value != "") {
        
//         nameEnt.classList.add("fadeOutUp");
//     }
// };

let UpdateGameGrid =  () => {

    CheckEndOfGame();
    if( (! gameCompleteFlag) && (! escape)){
        CheckGameOver();
        adjustBoard(score, level, playerNumber, lives, seaStarNum);
        createEnemyFishes();
        updateRandomMotion();
        seaStarMotion();
        detectCollisionBetweenPlayerFishAndEnemyFishesV2();
        detectCollisionBetweenPlayerFishAndSeaStar(fishPlayer, seaStarObj);
        detectCollisionBetweenEnemyFishes();
        moveEnemyFishes();
        scoreAndLevel();
        showSpecialFish();
    }

};

let startGame = () => {
    ///
    if ( document.onkeydown === null ){
        document.onkeydown = (event) =>  {

            if (event.keyCode === 27){
                
                escape = true;
                if(pauseModal.style.display == "block"){
                    pauseModal.style.display = "none";
                    escape = false;
                    container.onmousemove = (event) => {

                        containerBoundingRect = container.getBoundingClientRect();
                        
                        if (parseInt(fishPlayer.style.left) < event.clientX - containerBoundingRect.left) {
                            fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif"; // change right
                        } else if (parseInt(fishPlayer.style.left) > event.clientX - containerBoundingRect.left) {
                            fishPlayer.src = "./images/Characters/player" + playerNumber + "-left.gif"; // change left
                        }
                    
                        fishPlayer.style.left = (event.clientX - containerBoundingRect.left) + 'px';
                        fishPlayer.style.top = (event.clientY - containerBoundingRect.top) + 'px';
                    
                    
                        if (event.clientX >= window.innerWidth - fishPlayer.width) {
                    
                            fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
                        }
                    
                        if (event.clientY >= window.innerHeight - fishPlayer.height) {
                    
                            fishPlayer.style.top = window.innerHeight - containerBoundingRect.top - fishPlayer.height + 'px';
                        }
                    
                    };
                }
                else{
                    pauseModal.style.display = "block";
                    escape = true;
                    container.onmousemove = null ;
                }
        
                keyboard.esc = false;
            }
        
            pauseModal.querySelector(".closeModal").addEventListener("click", function () {
                pauseModal.style.display = "none";
                escape = false;
                container.onmousemove = (event) => {

                    containerBoundingRect = container.getBoundingClientRect();
                    
                    if (parseInt(fishPlayer.style.left) < event.clientX - containerBoundingRect.left) {
                        fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif"; // change right
                    } else if (parseInt(fishPlayer.style.left) > event.clientX - containerBoundingRect.left) {
                        fishPlayer.src = "./images/Characters/player" + playerNumber + "-left.gif"; // change left
                    }
                
                    fishPlayer.style.left = (event.clientX - containerBoundingRect.left) + 'px';
                    fishPlayer.style.top = (event.clientY - containerBoundingRect.top) + 'px';
                
                
                    if (event.clientX >= window.innerWidth - fishPlayer.width) {
                
                        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
                    }
                
                    if (event.clientY >= window.innerHeight - fishPlayer.height) {
                
                        fishPlayer.style.top = window.innerHeight - containerBoundingRect.top - fishPlayer.height + 'px';
                    }
                
                };
            });
        
            keyboard.esc = false;
        };
    }
    // end menu
    if (localStorage.getObj(playerNa.value) === null)
        localStorage.setObj(playerNa.value, { scoreing: 0, level1time: 4000, level2time: 4000, level3time: 4000, numberOfLives: 0 });

   if (localStorage.getObj("highestScore") ===null)
      localStorage.setObj("highestScore",{name:"dummyUser",value:0});

   if (localStorage.getObj("highestNumLives") ===null)
      localStorage.setObj("highestNumLives",{name:"dummyUser",value:0});

   previousState=localStorage.getObj(playerNa.value);


    level = 1;
    lives = 3;
    score = 0;
    seaStarNum = 0;
    second = minutes = hours = 0;
    globalTimeInSeconds=0;
    specialFlag = 1;
    specialChFalg = true ;
    gameCompleteFlag=false;
    currentPlayerLevel1Time=null;
    currentPlayerLevel2Time=null;
    currentPlayerLevel3Time=null;
    currentPlayerHeighestScore=null;
    currentPlayerFinishNumberOfLives=null;
    currentPlayerTempBadge=[false,false,false];
    fishEnemiesList = [];
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    // backgroundWebm.src = "videos/background.webm";
    backgroundVideo.load();
    removeBadgesFromDashBoard();
    showLevelUpNotificationImage();
    interval = setInterval(UpdateGameGrid, 20);
    t = setInterval(timer, 1000);

};

let CheckGameOver = ()=> {

    if (lives === 0) {
        displayGameOver();
        clearInterval(interval);
        clearInterval(t);
        checkForFinalBadges();
        updateLocalStorage();
        updateCurrentPlayerBadges();
        localStorage.removeItem(playerNa.value);  // use this mod for now ****#
    }
};


let CheckEndOfGame = ()=> {

    if (score === 90) {

        clearInterval(interval);
        clearInterval(t);
        clearInterval(backgroundSound);
        setTimeout(displayCong, 2000);
        fishPlayer.style.display = "none";
        for (let i = 0; i < fishEnemiesList.length; i++)
            container.removeChild(fishEnemiesList[i].element);

        gameCompleteFlag = true;
        checkForFinalBadges();
        updateLocalStorage();
        localStorage.removeItem(playerNa.value);  // use this mod for now ****#
        playLevelUpSound();
    }

};




let exit = function () {
    location.reload();
};

// backgroundSound = setInterval(playUnderWaterSound, 6500);

