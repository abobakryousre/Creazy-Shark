let adjustBoard = (score, level, charID, lives, seaStarNum) => {
  //Adjusting fish menu according to level

  fishMenu[0].src='images/Enemies/right/'+fishImages["level"+level][0];
  fishMenu[1].src='images/Enemies/right/'+fishImages["level"+level][1];
  fishMenu[2].src='images/Enemies/right/'+fishImages["level"+level][2];

  // Adjusting growth bar
  growthBarActual.style.width = ((score - (level - 1) * 30) / 30) * 100 + "%";

  // Adjusting score
  
  scoreNumArr.textContent = score;
  

  //Adjusting lifes
  liveNumArr.textContent = lives;

  difuclltySpan.textContent = DIFFCUITY ;
  seaStarSpan.textContent = SEA_STAR_GIFT_NUM ;
  
  charImg.src = "images/Characters/player" + charID + "-right.gif";

  //Adjusting level
 
  levelNum.textContent = level;

  //Adjusting seastar counter
  
  seaStarImgNum.textContent = seaStarNum % 6;
};

let removeBadgesFromDashBoard = () => {
  for (let i = 0; i < badgrArr.length; i++) badgrArr[i].style.display = "none";
};
