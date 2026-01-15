function familyTrip (budget,nightsCount,pricePerNight,discount) {

   pricePerNight *= nightsCount;

    if(nightsCount > 7){

        pricePerNight *= 0.95;
        
    }

    let expenses = discount / 100;
    expenses *= budget;

    let totalSum = pricePerNight + expenses;
    if(totalSum <= budget){

        let moneyLeft = budget - totalSum;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    }

    else{
        let moneyNeeded = totalSum - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    }

}

familyTrip(500,
7,
66,
15  
);