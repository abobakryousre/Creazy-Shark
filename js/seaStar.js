let seaStarTimerMax = Math.floor(Math.random() * 100) + 300 ;
let seaStarMotion= () =>{
    
    seaStarTimer++;
    if(seaStarTimer > 400)
        seaStarTimer = 0 ;
    if (seaStarTimer===seaStarTimerMax){
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
          seaStarTimer=0;
          seaStarObj.style.display='none';
          seaStarObj.style.top=0+'px';
          seaStarMovingFlag=false;
          seaStarPositionY=0;
        seaStarTimerMax = Math.floor(Math.random() * 100) + 300 ;
        }

    }
  }



  let bonusAdd= () =>{

      playblobSound() ;
      seaStarTimer=0;
      seaStarNum++;
      seaStarObj.style.display='none';
      seaStarObj.style.top=0+'px';
      seaStarMovingFlag=false;
      seaStarPositionY=0;
      seaStarTimerMax = Math.floor(Math.random() * 100) + 300 ;
  };
