
let playUnderWaterSound = () => {
    underWaterSound.play();
};


<<<<<<< HEAD
=======

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
let playEatingSound = () => {
    eatSound.play();
};

<<<<<<< HEAD
=======
let playblobSound = () => {
    blobSound.play();
};

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
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

<<<<<<< HEAD
=======
}

let muteAll = () =>{
    unMutedSvg.style.display = 'inline-block' ;
    mutedSvg.style.display = 'none' ;
    underWaterSound.muted = true ;
    eatSound.muted = true ;
    dyingSound.muted = true ;
    levelUpSound.muted = true ;
    sizeUpSound.muted = true ;
    blobSound.muted = true ;
    
}

let unMuteAll = ()=>{
    unMutedSvg.style.display = 'none' ;
    mutedSvg.style.display = 'inline-block' ;
    underWaterSound.muted = false ;
    eatSound.muted = false ;
    dyingSound.muted = false ;
    levelUpSound.muted = false ;
    sizeUpSound.muted = false ;
    blobSound.muted = false ;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
}