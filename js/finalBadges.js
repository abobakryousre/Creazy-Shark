
<<<<<<< HEAD

=======
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
let updateCurrentPlayerBadges = () => {


   let finalBadges = currentPlayerTempBadge;
   if (localStorage.getObj("highestScore").name == playerNa.value)
      finalBadges.push(true);
   else
      finalBadges.push(false);



   if (localStorage.getObj("highestNumLives").name == playerNa.value)
      finalBadges.push(true);
   else
      finalBadges.push(false);


   for (let i = 0; i < finalBadges.length; i++) {

      if (finalBadges[i])
         finalBadgesArr[i].style.display = "block";
      else
         finalBadgesArr[i].style.display = "none";
   }

<<<<<<< HEAD

   // console.log(finalBadges);







=======
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
}
