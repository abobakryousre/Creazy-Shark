<<<<<<< HEAD

let seaStarMotion= () =>{
    seaStarTimer++;
    if (seaStarTimer===seaStarTimerMax){
        seaStarTimerMax=Math.floor(Math.random() * 501)+ (100 + 400* LEVEL_SPEED);
=======
let seaStarTimerMax = Math.floor(Math.random() * 100) + 300 ;
let seaStarMotion= () =>{
    
    seaStarTimer++;
    if(seaStarTimer > 400)
        seaStarTimer = 0 ;
    if (seaStarTimer===seaStarTimerMax){
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
        seaStarTimer=0;
        seaStarPositionX=Math.floor(Math.random() * parseInt(window.innerWidth));
        seaStarMovingFlag=true;

    }

    if(seaStarMovingFlag){
        seaStarObj.style.display='inline-block';
        seaStarObj.style.left=seaStarPositionX+'px';
        seaStarObj.style.top=seaStarPositionY+'px';
        seaStarPositionY=seaStarPositionY+3;
        if (seaStarPositionY>=parseInt(window.innerHeight))
        {
<<<<<<< HEAD
=======
          seaStarTimer=0;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
          seaStarObj.style.display='none';
          seaStarObj.style.top=0+'px';
          seaStarMovingFlag=false;
          seaStarPositionY=0;
<<<<<<< HEAD
          seaStarTimerMax=Math.floor(Math.random() * 501)+ (100 + 400* LEVEL_SPEED);
=======
        seaStarTimerMax = Math.floor(Math.random() * 100) + 300 ;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
        }

    }
  }



  let bonusAdd= () =>{

<<<<<<< HEAD
    
=======
      playblobSound() ;
      seaStarTimer=0;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
      seaStarNum++;
      seaStarObj.style.display='none';
      seaStarObj.style.top=0+'px';
      seaStarMovingFlag=false;
      seaStarPositionY=0;
<<<<<<< HEAD
      seaStarTimerMax=Math.floor(Math.random() * 501)+ (100 + 400* LEVEL_SPEED);
=======
      seaStarTimerMax = Math.floor(Math.random() * 100) + 300 ;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
  };
