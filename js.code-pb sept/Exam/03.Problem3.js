function ExcursionCalculator (peopleCount,season) {

    let sum = 0;
    if(peopleCount <= 5){
        if(season === 'spring'){

            sum = peopleCount * 50;
        }

        else if(season === 'summer') {
            sum = peopleCount * 48.5;
            sum *= 0.85;
        }
        else if(season === 'autumn'){

            sum = peopleCount * 60;
        }

        else if(season === 'winter'){
            sum = peopleCount * 86;
            sum *= 1.08;
        }
    }

    else if(peopleCount > 5){
      if(season === 'spring'){

            sum = peopleCount * 48;
        }

        else if(season === 'summer') {
            sum = peopleCount * 45;
            sum *= 0.85;
        }
        else if(season === 'autumn'){

            sum = peopleCount * 49.50;
        }

        else if(season === 'winter'){
            sum = peopleCount * 85;
            sum *= 1.08;
        }

    }

    console.log(`${sum.toFixed(2)} leva.`);

}

ExcursionCalculator(5,
'spring'
);