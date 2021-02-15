let SEA_STAR_GIFT_NUM = 5 ;
let scoreAndLevel =  () => {
  SEA_STAR_GIFT_NUM = 4 + LEVEL_SPEED ;
  
  if (seaStarNum === SEA_STAR_GIFT_NUM ) {         // for every 5 star earn 1 life 
    lives++;
    seaStarNum = 0;
  }

  if (score - ((level - 1) * 30) === 0) {   // update flag status every new patch up and reset also original size 
    playedBefore1 = false;
    playedBefore2 = false;
    fishPlayer.height = INIT_FISH_HEIGHT ;               // need const height and width in init file*** 
    fishPlayer.width = INIT_FISH_WIDTH ;               // need const height and width in init file ***
  }
  else if (score - ((level - 1) * 30) === 10) {

    fishPlayer.height = INIT_FISH_HEIGHT * ( LEVEL1_WEIGHT + 0.2 );           // need const height and width in init file  ***
    fishPlayer.width = INIT_FISH_WIDTH * ( LEVEL1_WEIGHT + 0.2 );           // need const height and width in init file ***
    sizeSound1();
  }
  else if (score - ((level - 1) * 30) === 20) {

    fishPlayer.height = INIT_FISH_HEIGHT * ( LEVEL2_WEIGHT + 0.1 );           // need const height and width in init file  ***
    fishPlayer.width = INIT_FISH_WIDTH * ( LEVEL2_WEIGHT + 0.1 );           // need const height and width in init file  ***

    sizeSound2();
  }
  else if (score - ((level - 1) * 30) === 30) {   // upgrade level to next round 
    adjustCurrentPlayerTime();
    level++;

    if (level < 4) {

      showLevelUpNotificationImage();
      updateLocalStorage();
      backgroundWebm.src = "videos/background-" + level + ".webm";
      backgroundVideo.load();
      playLevelUpSound();

    }

      for (let i = 0; i < fishEnemiesList.length; i++)
        container.removeChild(fishEnemiesList[i].element);

      fishEnemiesList = [];
      randomMotionTimer = [];
      randomMotionCompletion = [];
      randomMotionTimerY = [];
      randomMotionCompletionY = [];
      //addNewEnemyFish();

  }

};



let addNewEnemyFish =  () => {

  if (level === 2)
    fishImages.push({ src: "blueFish.gif", weight: ( LEVEL2_WEIGHT + 0.1 ) });                // need const height and width in init file  ***
  else if (level === 3)
    fishImages.push({ src: "BOOMFish.gif", weight: ( LEVEL2_WEIGHT + 0.1 ) });                // need const height and width in init file  ***
};

let showLevelUpNotificationImage = () => {

  let levelSign = document.createElement("img");

  levelSign.src = "./images/Levels/level" + level + ".png";
  levelSign.height = LEVEL_SIGN_WIDTH  ;                         // control const height and width in init file of level up image  ***
  levelSign.width = LEVEL_SIGN_WIDTH;                          // control const height and width in init file of level up image  ***
  levelSign.style.position = "absolute";
  levelSign.style.left = window.innerWidth / 8  + "px";         // window.innerWidth / 2 - (levelSign.width /2 )**** + "px";           
  levelSign.style.top = window.innerHeight / 5 - containerBoundingRect.top - (levelSign.height / 2) + 10 + "px";    // window.innerHeight / 2 - containerBoundingRect.top - (levelSign.height/2)**** + "px";
  // levelSign.style.border = "1px solid red" ;

  container.appendChild(levelSign);

  setTimeout(() => container.removeChild(levelSign), 2000);           //  control const in init file of level up image time  ***

};

let showBadgeImage = (badgeType) => {

    let badge = document.createElement("img");
    if (badgeType==="Time1"){
        badge.src = "./images/Badges/TimeBadge1.png";
        badgrArr[0].style.display="block";
        currentPlayerTempBadge[0]=true;
    }
    else if (badgeType==="Time2") {
        badge.src = "./images/Badges/TimeBadge2.png";
        badgrArr[1].style.display="block";
        currentPlayerTempBadge[1]=true;
    }
    else if (badgeType==="Time3") {
        badge.src = "./images/Badges/TimeBadge3.png";
        badgrArr[2].style.display="block";
        currentPlayerTempBadge[2]=true;
    }
    else if(badgeType==="scoreBadge"){
      badge.src = "./images/Badges/HighScore.png";
      badgrArr[3].style.display="block";
    }
    else if(badgeType==="livesBadge"){
      badge.src = "./images/Badges/Champion.png";
      badgrArr[4].style.display="block";
    }


    badge.height = BADGE_WIDTH + 20 ;                               // control const height and width in init file of badge image  ***
    badge.width = BADGE_WIDTH ;                                // control const height and width in init file of badge image  ***
    badge.style.position = "absolute";
    badge.style.left = window.innerWidth/4 - ( badge.width / 2) + "px";     // window.innerWidth / 4 - ( badge.width /2 )**** + "px";
    badge.style.top = window.innerHeight/4 - (badge.height / 2 ) + "px";    // window.innerHeight/4 - ( badge.height / 2 )**** + "px";
    badge.style.border="medium solid black"


    container.appendChild(badge);
    setTimeout(() => container.removeChild(badge), 4000);         //  control const in init file of badge image time  ***

};




let adjustCurrentPlayerTime =  () => {

  switch (level) {
    case 1:
      {
        currentPlayerLevel1Time = globalTimeInSeconds;
      }
      break;
    case 2:
      {
        currentPlayerLevel2Time = globalTimeInSeconds - currentPlayerLevel1Time;
      }
      break;
    case 3:
      {
        currentPlayerLevel3Time = globalTimeInSeconds - currentPlayerLevel2Time;
      }
      break;
  }
  checkForTimeBadges();
}




let checkForTimeBadges =  () => {
  let deserveTime1Badge = false;
  let deserveTime2Badge = false;
  let deserveTime3Badge = false;

  switch (level) {
    case 1:
      if (currentPlayerLevel1Time < localStorage.getObj(playerNa.value).level1time)
        deserveTime1Badge = true;
      break;

    case 2:
      if (currentPlayerLevel2Time < localStorage.getObj(playerNa.value).level2time)
        deserveTime2Badge = true;
      break;

    case 3:
      if (currentPlayerLevel3Time < localStorage.getObj(playerNa.value).level3time)
        deserveTime3Badge = true;
      break;
  }
  if (deserveTime1Badge)
    showBadgeImage("Time1");

  if (deserveTime2Badge)
    showBadgeImage("Time2");

  if (deserveTime3Badge)
    showBadgeImage("Time3");
}



let checkForFinalBadges = () => {


  if(lives===0 && score>localStorage.getObj("highestScore").value)  // Gmae over case check only for score
  {
    localStorage.setObj("highestScore",{name:playerNa.value,value:score});
    showBadgeImage("scoreBadge");
  }


  if(gameCompleteFlag && lives>localStorage.getObj("highestNumLives").value )
  {
    localStorage.setObj("highestNumLives",{name:playerNa.value,value:lives});
    showBadgeImage("livesBadge");
  }

}
