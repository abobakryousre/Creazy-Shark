
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