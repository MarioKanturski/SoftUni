function shopping (budget,numOfVideoCards,numOfProcessors,numOfRam,) {
let sumOfVideoCards = numOfVideoCards * 250;         //500
let sumOfProcessors = sumOfVideoCards * 0.35;        //175
let sumOfRam = sumOfVideoCards * 0.10;               //50
let finaProcessorsSum = numOfProcessors * sumOfProcessors;         
let finalRamSum = numOfRam * sumOfRam;       
let totalSum = sumOfVideoCards + finaProcessorsSum + finalRamSum;  //825 


if(numOfVideoCards > numOfProcessors)
{
   totalSum *= 0.85;

}

if(totalSum <= budget)
{

  let moneyLeft = budget - totalSum;
  console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);

}
else {

    let moneyNeeded = totalSum - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
}


}


shopping(900,2,1,3);