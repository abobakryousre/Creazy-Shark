
<<<<<<< HEAD
// specialFish = new EnemyFish(-100, window.innerHeight / 2, "specialFish.gif", 0.4, "right", "");
// specialFish.createFish();
=======
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421

let showSpecialFish = () => {

    if ( specialChFalg == true && specialFlag === 1 &&  (score === 15 || score === 45 || score === 75) ) {
        
        specialChFalg = false ;  // score change
        specialFlag = 0;           // detect event
        specialFish = new EnemyFish(-100, window.innerHeight / 2, "specialFish.gif", 0.4, "right", "");
        specialFish.createFish();
<<<<<<< HEAD
        specialFish.speedX = 4;
=======
        specialFish.speedX = 10;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
        specialFish.speedY = 0;

            specialFishInterval = setInterval( () => {
                
                specialFish.moveFishes()
                
                detectCollisionBetweenPlayerAndSpecialFish();

                if (specialFish.x > window.innerWidth + specialFish.width) {
                    container.removeChild(specialFish.element);
                    clearInterval(specialFishInterval);
                    // specialFish = new EnemyFish(-100, window.innerHeight / 2, "specialFish.gif", 0.4, "right", "");
                    // specialFish.createFish();
                    specialFlag = 1;
                }
                
<<<<<<< HEAD
            }, 100);
=======
            }, 20);
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
           
        

    }
};


let detectCollisionBetweenPlayerAndSpecialFish = () => {


    if (specialFish.width >= parseInt(fishPlayer.style.left) - specialFish.x
        && parseInt(fishPlayer.style.top) >= specialFish.y - fishPlayer.height
        && parseInt(fishPlayer.style.top) <= specialFish.y + specialFish.height) {

        container.removeChild(specialFish.element);
<<<<<<< HEAD

=======
        playblobSound() ;
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
        for (let i = 0; i < fishEnemiesList.length; i++) {

            fishEnemiesList[i].height = INIT_FISH_HEIGHT / 2 ;
            fishEnemiesList[i].width = INIT_FISH_WIDTH / 2;
            fishEnemiesList[i].element.height = INIT_FISH_HEIGHT / 2 ;
            fishEnemiesList[i].element.width = INIT_FISH_WIDTH / 2 ;

        }

        clearInterval(specialFishInterval);
        specialFlag = 1;
<<<<<<< HEAD
        // specialFish = new EnemyFish(-100, window.innerHeight / 2, "specialFish.gif", 0.4, "right", "");
        // specialFish.speedX = 4;
        // specialFish.speedY = 0;
        // specialFish.createFish();
=======
       
>>>>>>> 68fb52ca2389cf8e3c1868c294bf0385c2b8f421
        return;

    }
   
    
   

};