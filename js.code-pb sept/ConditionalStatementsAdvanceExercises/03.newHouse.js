function newHouse (flowerType,flowerCount,budget) {
    let price = 0;

    if(flowerType === 'Roses'){
        price = flowerCount * 5;
        if(flowerCount > 80)
        {
            price *= 0.9;
        }
    }

    else if(flowerType === 'Dahlias'){
        price = flowerCount * 3.80;
        if(flowerCount > 90)
        {
             price *= 0.85;
        }
        
    }

    else if(flowerType === 'Tulips'){
        price = flowerCount * 2.80;
        if(flowerCount > 80)
        {
            price *= 0.85;
        }

    }

    else if(flowerType === 'Narcissus'){
         price = flowerCount * 3;
        if(flowerCount < 120)
        {
            
            price *= 1.15;
        }

    }

    else if(flowerType === 'Gladiolus'){
        price = flowerCount * 2.50;
        if(flowerCount < 80)
        {
            
             price *= 1.20;
        }

    }


    if(budget >= price){
       let moneyLeft = budget - price;
       console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);

    }
    else {
        let moneyNeeded = price - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);

    }
}

newHouse("Tulips",88,260);