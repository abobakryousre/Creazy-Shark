
// export * as src from "./init.js" ;

// DOM ELEMENTS
let fishPlayer = document.getElementById("fishPlayer");         // player's fish image  
let container = document.getElementById("container");           // game space 
let board = document.getElementById("board");                   // board status above game space 

// audio elements of the Game Displayed : none (default)
let eatSound = document.getElementById("eat");
let dyingSound = document.getElementById("die");
let levelUpSound = document.getElementById("level");
let underWaterSound = document.getElementById("underWater");
let sizeUpSound = document.getElementById("sizeUp");
let GOSound = document.getElementById("gameOverSound");

let badgeBTN = document.getElementById("badgeBtn") ;
let badgeDiv = document.getElementById("currentPlayerBadges") ;
let gameOverDiv = document.getElementById("gameOver");
let congDiv = document.getElementById("CongDiv");
let congSound = document.getElementById("congSound");
let scoreRecord = document.getElementById("score");
let levelRecord = document.getElementById("level");
let HScoreRecord = document.getElementById("HScore");

let scoreNumArr = document.getElementsByClassName('scoreNum');              //4 images for score
let liveNumArr = document.getElementsByClassName('liveNum');                //2 images for lives

let growthBarTotal = document.getElementById('growthBarTotal');             // growth bar total div
let growthBarActual = document.getElementById('growthBarActual');           // growth bar actual div
let growthDiv = document.getElementById('growthDiv');                       // growth container 

let charImg = document.getElementById('charImg');  // char img in live div
let levelNum = document.getElementById('levelNum'); //1 img for level number
let fishMenu = document.getElementsByClassName('menuChar');                 // fishes displayed in board status
let scoreDiv = document.getElementById('scoreDiv');

let liveDiv = document.getElementById('liveDiv');
let levelDiv = document.getElementById('levelDiv');
let seaStarObj = document.getElementById('seaStar');
let seaStarImgNum = document.getElementById('seaStarNum');
let timeDiv = document.getElementById('timer');
let secondNumArr = document.getElementsByClassName('secondNum');
let minNumArr = document.getElementsByClassName('minNum');
let hourNumArr = document.getElementsByClassName('hourNum');
let backgroundVideo = document.getElementById("backgroundVideo");
let backgroundWebm = document.getElementById("backgroundWebm");
let containerBoundingRect = container.getBoundingClientRect();

let specialFish;                                                // just declaring special fish variable 
let badgrArr = document.getElementsByClassName('bad');




let finalBadgesArr=document.getElementsByClassName("finalBadges");
/////////////////////////////////////////////



let score = 0;
let level = 1;
let lives = 3;
let foodTimer = 0;

// need const height and width in init file ***
const INIT_FISH_WIDTH = 100 ;                       // fish size   level= size * speed * num * 1/ time * 1/seastar * 1/special fish
const INIT_FISH_HEIGHT = INIT_FISH_WIDTH - 40 ;

let LEVEL_SPEED = 0 ;                                // enemy fish speed 0 default
const NUM_FISH_ENEMIES = 12 * level *  level *  level * (1+ LEVEL_SPEED * 100) ;                           // num of fish enemies 9 default
const SEA_STAR_GIFT_NUM = 4 + LEVEL_SPEED ;
let seaStarTimerMax = Math.floor(Math.random() * 501) + (100 + 400* LEVEL_SPEED);

const LEVEL0_WEIGHT = 0.8  ;
const LEVEL1_WEIGHT = 1.1  ;    
const LEVEL2_WEIGHT = 1.4  ;
const LEVEL3_WEIGHT = 1.7  ;

const LEVEL_SIGN_WIDTH = 250 ;
const BADGE_WIDTH = 180 ;

fishPlayer.style.width = INIT_FISH_WIDTH ;
fishPlayer.style.height = INIT_FISH_HEIGHT ;
/// end of const

let currentPlayerLevel1Time = null;
let currentPlayerLevel2Time = null;
let currentPlayerLevel3Time = null;
let currentPlayerHeighestScore = null;
let currentPlayerFinishNumberOfLives = null;
let gameCompleteFlag = false;


let randomMotionTimer = [];
let randomMotionCompletion = [];
let randomMotionTimerY = [];
let randomMotionCompletionY = [];

let verticalDirections = ["top", "down"];
let seaStarTimer = 0;


let seaStarPositionX;
let seaStarPositionY = 0;
let seaStarMovingFlag = false;
let seaStarNum = 0;

let gameover = false;

let specialFlag = 1;
let specialChFalg = true ;

let interval;
let specialFishInterval;

let backgroundSound;
let playerNumber;

let previousState;
let fishEnemiesList = [];
let fishEntryPositions = [0, Math.round(container.clientHeight/4.33) , Math.round(container.clientHeight/2.17) , Math.round(container.clientHeight/1.443), Math.round(container.clientHeight/1.083) ];               // split screen into 5 Y sections in px  
let fishImages = {
    level1: ["whiteFish.gif", "gray_fish.gif", "tuna.gif", "yellowFish.gif"],
    level2: ["gray_fish.gif", "tuna.gif", "yellowFish.gif", "blueFish.gif"],
    level3: ["tuna.gif", "yellowFish.gif", "blueFish.gif", "shark.gif"],
    weight: [LEVEL0_WEIGHT , LEVEL1_WEIGHT, LEVEL2_WEIGHT , LEVEL3_WEIGHT ]                      // need to set const for relative weights***           // refer to fish weights  according to fish imgs relatively as UX 
}

let playedBefore1 = false;              // indicate on every new level reset size for update status before level 1 
let playedBefore2 = false;              // indicate on every new level reset size for update status before level 2 

let second = 0 ;
let minutes = 0 ;
let hours = 0 ;
let globalTimeInSeconds=0;
let currentPlayerTempBadge=[false,false,false];



