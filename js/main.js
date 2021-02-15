
let gamePlay;
let exitFlag = false;
let escapeFlag = false;
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


let UpdateGameGrid =  () => {

    CheckEndOfGame();
    if( (! gameCompleteFlag) && (! escapeFlag)){
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



pauseModal.querySelector("#resumeAll").addEventListener("click", function () {         //**/ */
    pauseModal.style.display = "none";
    board.style.display = "flex";
    fishPlayer.style.display = "block" ;
    escapeFlag = false;
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
/*** */
let startGame = () => {
    ///
    board.style.display = "none" ;
    fishPlayer.style.display = "none" ; 
    pauseModal.style.display = "block";     //** */

    escapeFlag = true;                      /** */
    if ( document.onkeydown === null ){
        document.onkeydown = (event) =>  {

            if (event.keyCode === 27){
                BoardMenuBtnAction();
            }
        
            pauseAction();
        
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



let BoardMenuBtnAction = function(){
    escapeFlag = false;
    if(pauseModal.style.display == "block"){
        pauseModal.style.display = "none";
        board.style.display = "flex";
        fishPlayer.style.display = "block" ;
        escapeFlag = false;
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
        escapeFlag = true;
        container.onmousemove = null ;
    }

    keyboard.esc = false;
}


let pauseAction = function(){
    pauseModal.querySelector("#resumeAll").addEventListener("click", function () {
        pauseModal.style.display = "none";
        board.style.display = "flex";
        fishPlayer.style.display = "block" ;
        escapeFlag = false;
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
}





backgroundSound = setInterval(playUnderWaterSound, 6500);