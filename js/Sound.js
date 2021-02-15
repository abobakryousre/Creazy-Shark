
let playUnderWaterSound = () => {
    underWaterSound.play();
};


let playEatingSound = () => {
    eatSound.play();
};

let playdyingSound = () => {
    dyingSound.play();
};

let playLevelUpSound = () => {
    levelUpSound.play();
};

let sizeSound1 = () => {
    if (!playedBefore1){
          sizeUpSound.play() ;
        }
          playedBefore1 = true  ; 

}
let sizeSound2 = () => {
    if (!playedBefore2){
          sizeUpSound.play() ;
        }
          playedBefore2 = true  ; 

}

let muteAll = () =>{
    unMutedSvg.style.display = 'inline-block' ;
    mutedSvg.style.display = 'none' ;
    underWaterSound.muted = true ;
    eatSound.muted = true ;
    dyingSound.muted = true ;
    levelUpSound.muted = true ;
    sizeUpSound.muted = true ;
    console.log("mute")
}

let unMuteAll = ()=>{
    unMutedSvg.style.display = 'none' ;
    mutedSvg.style.display = 'inline-block' ;
    underWaterSound.muted = false ;
    eatSound.muted = false ;
    dyingSound.muted = false ;
    levelUpSound.muted = false ;
    sizeUpSound.muted = false ;
    console.log("unmute")
}