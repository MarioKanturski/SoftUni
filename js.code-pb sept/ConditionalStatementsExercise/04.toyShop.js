function toyShop (priceOfExcursion,numOfPuzzles,numOfDolls,numOfBears,numOfMinions,numOfTrucks) {
 let puzzelSum = numOfPuzzles * 2.60;    // 52           
 let dollsSum = numOfDolls * 3.00;       // 75           
 let bearsSum = numOfBears * 4.10;       // 122.99       
 let minionSum = numOfMinions * 8.20;    // 409.99       
 let truckSum = numOfTrucks * 2.00;      // 20           

 let totalSum = puzzelSum + dollsSum + bearsSum + minionSum + truckSum; //680  cena na igrachki             
 let toysSum = numOfPuzzles + numOfDolls + numOfBears + numOfMinions + numOfTrucks; //135   
     

 if(toysSum >= 50)     //135   
 {
    totalSum *= 0.75;   //510
    
 }
   let rent = totalSum *0.1;        //51
   let profit = totalSum - rent;   //510 - 51 = 459

if (profit >= priceOfExcursion)   //459 >= 40.8
{ 
       let leftMoney = profit - priceOfExcursion;
       console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);  
}

 else {

    let neededMoney = priceOfExcursion - profit;     //252.275
    console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);
    
 }

 
}

toyShop(40.8,20,25,30,50,10);     //Yes! 418.20 lv left. or 
                                  //Not enough money! 238.73 lv needed.