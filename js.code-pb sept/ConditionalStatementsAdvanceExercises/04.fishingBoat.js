function fishingBoat (budget,season,fishersCount) {

    let boatPrice = 0;

    if(season === 'Spring') {

        boatPrice = 3000;
        if(fishersCount <= 6){
            boatPrice *= 0.9;
        }
        else if (fishersCount <= 11){
            boatPrice *= 0.85;
        }
        else if(fishersCount > 12){
            boatPrice *= 0.75;
        }
    }

    else if(season === 'Autumn' || season === 'Summer'){

        boatPrice = 4200;
        if(fishersCount <= 6){
            boatPrice *= 0.9;
        }
        else if (fishersCount <= 11){
            boatPrice *= 0.85;
        }
        else if(fishersCount > 12){
            boatPrice *= 0.75;
        }
    }

    else if(season === 'Winter')
    {
        boatPrice = 2600;
        if(fishersCount <= 6){
            boatPrice *= 0.9;
        }
        else if (fishersCount <= 11){
            boatPrice *= 0.85;
        }
        else if(fishersCount > 12){
            boatPrice *=  0.75;
        }
    }

    if(fishersCount % 2 === 0 && season !== 'Autumn')
    {
        boatPrice *= 0.95;
    }

    if(budget >= boatPrice){
       let moneyLeft = budget - boatPrice;
       console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);

    }
    else {
        let moneyNeeded = boatPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);

    }



}

fishingBoat(2000,"Winter",13);