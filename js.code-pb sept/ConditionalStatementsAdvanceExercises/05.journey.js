function journey (budget,season) {
let destination = '';
let rest = '';
let price = 0;

if(budget <= 100){

    destination = 'Bulgaria';
    if(season === 'summer'){
        price = budget * 0.30;
        rest = 'Camp';

    }
    else if(season === 'winter'){
        price = budget * 0.70;
        rest = 'Hotel';
    }
}

else if(budget <= 1000){

    destination = 'Balkans';
    if(season === 'summer'){
        price = budget * 0.40;
        rest = 'Camp';

    }
    else if(season === 'winter'){
        price = budget * 0.80;
        rest = 'Hotel';
    }
}

else if(budget >= 1000){

    destination = 'Europe';
    if(season === 'summer'){
        price = budget * 0.90;
        rest = 'Hotel';

    }
    else if(season === 'winter'){
        price = budget * 0.90;
        rest = 'Hotel';
    }
}

console.log(`Somewhere in ${destination}`);
console.log(`${rest} - ${price.toFixed(2)}`);


}

journey(1500,'summer');