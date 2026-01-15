function maidenParty (maidenPartyPrice,aLoveCountMessage,numberOfWaxRoses,numberOfKeyRings,numberOfCartoons,numberOfLuckySurprises) {

let totalSum = (aLoveCountMessage * 0.6) + (numberOfWaxRoses * 7.20) + (numberOfKeyRings * 3.60) + (numberOfCartoons * 18.20) + (numberOfLuckySurprises * 22);
let secontTotalSum = (aLoveCountMessage * 0.6) + (numberOfWaxRoses * 7.20) + (numberOfKeyRings * 3.60) + (numberOfCartoons * 18.20) + (numberOfLuckySurprises * 22);

let articulCount = aLoveCountMessage + numberOfWaxRoses + numberOfKeyRings + numberOfCartoons + numberOfLuckySurprises;


if(articulCount >= 25){
    
    totalSum*= 0.35;
}
  
  let totalPrice = secontTotalSum - totalSum;
  let hosting = totalPrice * 0.10;
  let finalSum = totalPrice - hosting;

  if(finalSum >= maidenPartyPrice){
    let moneyLeft = finalSum - maidenPartyPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  }

  else{

    let moneyNeeded = maidenPartyPrice - finalSum;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
  }

}

maidenParty (320,
8,
2,
5,
5,
1,
);
