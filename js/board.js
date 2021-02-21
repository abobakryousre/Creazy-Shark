let adjustBoard = (score, level, charID, lives, seaStarNum) => {
  //Adjusting fish menu according to level
<<<<<<< HEAD
=======

>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
  fishMenu[0].src='images/Enemies/right/'+fishImages["level"+level][0];
  fishMenu[1].src='images/Enemies/right/'+fishImages["level"+level][1];
  fishMenu[2].src='images/Enemies/right/'+fishImages["level"+level][2];

  // Adjusting growth bar
  growthBarActual.style.width = ((score - (level - 1) * 30) / 30) * 100 + "%";

  // Adjusting score
<<<<<<< HEAD
  // let i = scoreNumArr.length - 1;
  // document.getElementById("")
  scoreNumArr.textContent = score;
  // while (score >= 0 && i > 0) {
  //   // scoreNumArr[i].src = 'images/Characters/numbers/' + (score % 10) + '-blue.png';
  //   i--;
  //   score = (score - (score % 10)) / 10;
  // }
=======
  
  scoreNumArr.textContent = score;
  
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

  //Adjusting lifes
  liveNumArr.textContent = lives;

<<<<<<< HEAD
  charImg.src = "images/Characters/player" + charID + "-right.gif";
  // let j = liveNumArr.length - 1;

  // while (lives >= 0 && j > 0) {
  //   liveNumArr[j].src =
  //     "images/Characters/numbers/" + (lives % 10) + "-blue.png";
  //   j--;
  //   lives = (lives - (lives % 10)) / 10;
  // }

  //Adjusting level
  // levelNum.src = 'images/Characters/numbers/' + level + '-blue.png';
  levelNum.textContent = level;

  //Adjusting seastar counter
  // seaStarImgNum.src='images/Characters/numbers/' + (seaStarNum % 6) + '-blue.png';
=======
  difuclltySpan.textContent = DIFFCUITY ;
  seaStarSpan.textContent = SEA_STAR_GIFT_NUM ;
  
  charImg.src = "images/Characters/player" + charID + "-right.gif";

  difuclltySpan.textContent = DIFFCUITY;

  //Adjusting level
 
  levelNum.textContent = level;

  //Adjusting seastar counter
  
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
  seaStarImgNum.textContent = seaStarNum % 6;
};

let removeBadgesFromDashBoard = () => {
  for (let i = 0; i < badgrArr.length; i++) badgrArr[i].style.display = "none";
};
