
document.onreadystatechange =  () => {

    if (document.readyState === 'complete') {

        loaderOut();
       

    }

};

let loaderOut = () => {

     load.classList.add("fadeOutUp");

};

let displayGameOver = () => {
    gameOverDiv.style.display = "block";
    gameOverDiv.style.zIndex = 999;
    gameOverDiv.classList.remove("bounceOutUp");
    gameOverDiv.classList.add("bounceInDown");
    GOSound.play();
    fishPlayer.style.display = "none";
    board.style.display = "none";

};

let gameOverUp = () => {
    gameOverDiv.classList.remove("bounceInDown");
    gameOverDiv.classList.add("bounceOutUp");
    fishPlayer.style.display = "block";
    board.style.display = "block";
    setTimeout(function () {

        gameOverDiv.style.display = "none";
        gameOverDiv.style.zIndex = 0;
    }, 1000)

};

let displayCong = () => {
    congDiv.style.display = "block";
    congDiv.style.zIndex = 999;
    congDiv.classList.remove("bounceOutUp");
    congDiv.classList.add("bounceInDown");
    congSound.play();
    fishPlayer.style.display = "none";
    board.style.display = "none";

};

let congUp = () => {
    congDiv.classList.remove("bounceInDown");
    congDiv.classList.add("bounceOutUp");
    fishPlayer.style.display = "block";
    board.style.display = "block";
    setTimeout( () => {
        congDiv.style.display = "none";
        congDiv.style.zIndex = 0;
    }, 1000)

};

let selectUp = () => {

    levelScene.style.display = "none" ;
    staticBG.style.display = "none" ;
};

let viewBadges = () => {
    badgeDiv.style.display = "block" ; 
    badgeDiv.classList.add("bounceInLeft") ;
    badgeDiv.classList.remove("bounceOutLeft") ; 
};

let hideBadges = () => {
    badgeDiv.classList.add("bounceOutLeft") ;
    badgeDiv.classList.remove("bounceInLeft") ; 
    badgeDiv.style.display = "none" ; 
};


