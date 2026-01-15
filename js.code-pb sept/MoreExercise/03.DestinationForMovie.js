function destinationForMovie (budget,destination,season,dayCount) {


    let sum = 0;
    if(destination === 'Dubai'){

        if(season === 'Winter'){
            sum = dayCount * 45000;
        }
        else if(season === 'Summer') {
            sum = dayCount * 40000;
        }

        sum *= 0.7;
    }

    else if (destination === 'Sofia'){
        if(season === 'Winter'){
            sum = dayCount * 17000;
        }
        else if(season === 'Summer') {
            sum = dayCount * 12500;
        }

        sum *= 1.25;
    }

    else if(destination === 'London'){

    if(season === 'Winter'){
        sum = dayCount * 24000;
        }
        else if(season === 'Summer') {
            sum = dayCount * 20250;
        }

    }

    if(sum >= budget) {
        let moneyLeft = sum - budget;
        console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);
    }

    else {
        let moneyNeeded = budget - sum;
        console.log(`The director needs ${moneyNeeded.toFixed(2)} leva more!`);
    }

}

destinationForMovie(200000,'London','Summer',7);