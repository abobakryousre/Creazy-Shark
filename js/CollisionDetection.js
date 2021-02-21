let bom = document.createElement("img");


let detectCollisionBetweenPlayerFishAndEnemyFishesV2 = function () {

      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (fishEnemiesList[i].direction === "right") {
                  if (parseInt(fishPlayer.style.left) > fishEnemiesList[i].x) {
<<<<<<< HEAD
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height //+ 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height /*- 20*/) {
=======
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x + 5
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 15
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 15) {
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    boom();

                                    resetTheGameAfterThePlayerFishDies();


                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    specialChFalg = true ; //new
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }


                        }

                  } else {

                        if (fishEnemiesList[i].x - parseInt(fishPlayer.style.left) <= fishPlayer.width
                              && fishEnemiesList[i].x - parseInt(fishPlayer.style.left) >= 0
<<<<<<< HEAD
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height //+ 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height /*- 20*/) {
=======
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 15
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 15) {
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421


                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("right", "left");
                                    boom();

                                    resetTheGameAfterThePlayerFishDies();


                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    specialChFalg = true ; //new
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }
                        }
                  }

            } else {

                  if (parseInt(fishPlayer.style.left) > fishEnemiesList[i].x) {
<<<<<<< HEAD
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height //+ 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height /*- 20*/) {
=======
                        if (fishEnemiesList[i].width >= parseInt(fishPlayer.style.left) - fishEnemiesList[i].x + 5
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 15
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 15) {
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    fishEnemiesList[i].element.src = fishEnemiesList[i].imgSrc.replace("left", "right");

                                    boom();

                                    resetTheGameAfterThePlayerFishDies();

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    specialChFalg = true ; //new
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }
                        }
                  } else {

                        if (fishEnemiesList[i].x - parseInt(fishPlayer.style.left) <= fishPlayer.width
                              && fishEnemiesList[i].x - parseInt(fishPlayer.style.left) >= 0
<<<<<<< HEAD
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height //+ 20
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height/* - 20*/) {
=======
                              && parseInt(fishPlayer.style.top) >= fishEnemiesList[i].y - fishPlayer.height + 15
                              && parseInt(fishPlayer.style.top) <= fishEnemiesList[i].y + fishEnemiesList[i].height - 15) {
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

                              if (fishPlayer.height < fishEnemiesList[i].height) {

                                    boom();
                                    resetTheGameAfterThePlayerFishDies();

                              } else {

                                    container.removeChild(fishEnemiesList[i].element);
                                    playEatingSound();
                                    score++;
                                    specialChFalg = true ; //new
                                    fishEnemiesList.splice(i, 1);
                                    removeFishRandomMotion(i);
                              }

                        }
                  }

            }
      }

};


let boom = function () {

      bom.src = "./images/Box_And_Boom/BOOOM.gif";
<<<<<<< HEAD
      bom.height = INIT_FISH_WIDTH * 3 ;
      bom.width = INIT_FISH_WIDTH * 3 ;
=======
      bom.height = INIT_FISH_WIDTH * 2 ;
      bom.width = INIT_FISH_WIDTH * 1 ;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
      bom.style.position = "absolute";
      bom.style.left = parseInt(fishPlayer.style.left) - containerBoundingRect.left + "px";
      bom.style.top = parseInt(fishPlayer.style.top) - containerBoundingRect.top + "px";

      container.appendChild(bom);
      setTimeout(() => container.removeChild(bom), 1000);

};



let resetTheGameAfterThePlayerFishDies = function () {

      lives--;
      fishPlayer.style.display = "none";
      clearInterval(interval);
      playdyingSound();

      setTimeout(() => {

            for (let i = 0; i < fishEnemiesList.length; i++)
                  container.removeChild(fishEnemiesList[i].element);

            fishEnemiesList = [];
            randomMotionTimer=[];
            randomMotionCompletion=[];
            randomMotionTimerY=[];
            randomMotionCompletionY=[];
            fishPlayer.style.display = "block";
            interval = setInterval(UpdateGameGrid, 20);


      }, 1000);

};


let detectCollisionBetweenEnemyFishes = function () {

      for (let i = 0; i < fishEnemiesList.length; i++) {

            if (fishEnemiesList[i].direction === "right") {
                  for (let j = 0; j < fishEnemiesList.length; j++) {
                     if(fishEnemiesList[i] !== undefined && fishEnemiesList[j] !== undefined ) {  
                              if (i != j && fishEnemiesList[j].direction == "left"
                                    && fishEnemiesList[i].weight != fishEnemiesList[j].weight) {

                                    if (fishEnemiesList[j].x - fishEnemiesList[i].x <= fishEnemiesList[i].width
                                          && fishEnemiesList[i].y >= fishEnemiesList[j].y - fishEnemiesList[i].height + (fishEnemiesList[i].height * 0.3)
                                          && fishEnemiesList[i].y <= fishEnemiesList[j].y + fishEnemiesList[j].height - (fishEnemiesList[i].height * 0.3)
                                          && fishEnemiesList[i].x >= fishEnemiesList[j].x - fishEnemiesList[i].width + (fishEnemiesList[i].width * 0.3)
                                          && fishEnemiesList[i].x <= fishEnemiesList[j].x + fishEnemiesList[j].width - (fishEnemiesList[i].width * 0.3)
                                          && fishEnemiesList[i].x > 0
                                          && fishEnemiesList[i].x <= window.innerWidth + fishEnemiesList[i].width
                                          && fishEnemiesList[j].x > 0
                                          && fishEnemiesList[j].x <= window.innerWidth) {

<<<<<<< HEAD
                                          // console.log("collision happend between fish at x : " + fishEnemiesList[i].x
                                          //     + " and y: " + fishEnemiesList[i].y + " and fish at x : " + fishEnemiesList[j].x
                                          //     + " and y: " + fishEnemiesList[j].y + " and array length : " + fishEnemiesList.length);
=======
                                          
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

                                          if (fishEnemiesList[i].weight > fishEnemiesList[j].weight) {
                                                container.removeChild(fishEnemiesList[j].element);
                                                fishEnemiesList.splice(j, 1);
                                                removeFishRandomMotion(i);


                                          }
                                          else if (fishEnemiesList[i].weight < fishEnemiesList[j].weight) {
                                                container.removeChild(fishEnemiesList[i].element);
                                                fishEnemiesList.splice(i, 1);
                                                removeFishRandomMotion(i);

                                          }

                                    }

                              }
                        }

                  }

            }

      }

};




function detectCollisionBetweenPlayerFishAndSeaStar(dragMe, rect){
  
  let object_1 = dragMe.getBoundingClientRect();
  let object_2 = rect.getBoundingClientRect();

  if (object_1.left < object_2.left + object_2.width  && object_1.left + object_1.width  > object_2.left &&
		object_1.top < object_2.top + object_2.height && object_1.top + object_1.height > object_2.top) {
    bonusAdd();
  }

}