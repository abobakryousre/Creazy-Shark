let createEnemyFishes =  () => {
    let NUM_FISH_ENEMIES = Math.floor( level * 3 + LEVEL_SPEED +( 1 + ( 3 * LEVEL_SPEED ) )  ) ; 
    foodTimer++;
    if (foodTimer > 100/(level* (NUM_FISH_ENEMIES/10) ) && fishEnemiesList.length <= NUM_FISH_ENEMIES) {

        let rand = Math.floor(Math.random() * fishImages["level"+level].length);

        let rightFish = new EnemyFish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages["level"+level][rand], fishImages.weight[rand], "right",verticalDirections[Math.round(Math.random())]);


        fishEnemiesList.push(rightFish);
        rightFish.createFish();
        pushNewFishRandomMotion();

        rand = Math.floor(Math.random() * fishImages["level"+level].length);

        let leftFish = new EnemyFish(0, fishEntryPositions[Math.floor(Math.random() * fishEntryPositions.length)],
            fishImages["level"+level][rand], fishImages.weight[rand], "left",verticalDirections[Math.round(Math.random())]);

        fishEnemiesList.push(leftFish);
        leftFish.createFish();
        pushNewFishRandomMotion();

        foodTimer = 0;
    }

}

let moveEnemyFishes =  () => {

    for (let i = 0; i < fishEnemiesList.length; i++) {
        fishEnemiesList[i].moveFishes();
        if (fishEnemiesList[i].y <= 0) {
            fishEnemiesList[i].directionVertical="down";
        }
        if (fishEnemiesList[i].x < 0 - fishEnemiesList[i].width
            || fishEnemiesList[i].x > window.innerWidth + fishEnemiesList[i].width
            || fishEnemiesList[i].y > window.innerHeight) {
            container.removeChild(fishEnemiesList[i].element);
            fishEnemiesList.splice(i, 1);
            removeFishRandomMotion(i);
        }




    }

}
