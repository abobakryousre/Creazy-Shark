
specialFish = new EnemyFish(-100, window.innerHeight / 2, "specialFish.gif", 0.4, "right", "");
specialFish.createFish();

let showSpecialFish = () => {

    if (level === 1 && score === 5 && specialFlag === 1) {

        specialFlag = 0;
        specialFish.speedX = 7;
        specialFish.speedY = 0;

        specialFishInterval = setInterval( () => {

            specialFish.moveFishes()

            detectCollisionBetweenPlayerAndSpecialFish();

            if (specialFish.x > window.innerWidth + specialFish.width) {
                container.removeChild(specialFish.element);
                clearInterval(specialFishInterval);
              
            }

        }, 20);

    }
};


let detectCollisionBetweenPlayerAndSpecialFish = () => {


    if (specialFish.width >= parseInt(fishPlayer.style.left) - specialFish.x
        && parseInt(fishPlayer.style.top) >= specialFish.y - fishPlayer.height
        && parseInt(fishPlayer.style.top) <= specialFish.y + specialFish.height) {

        container.removeChild(specialFish.element);

        for (let i = 0; i < fishEnemiesList.length; i++) {

            fishEnemiesList[i].height = INIT_FISH_HEIGHT / 2 ;
            fishEnemiesList[i].width = INIT_FISH_WIDTH / 2;
            fishEnemiesList[i].element.height = INIT_FISH_HEIGHT / 2 ;
            fishEnemiesList[i].element.width = INIT_FISH_WIDTH / 2 ;

        }

        clearInterval(specialFishInterval);
        return;

    }

};