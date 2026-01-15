function cleverLily (age,washingMachinePrice,pricePerToys) {
    
    let savedMoney = 0;
    let moneyFromParents = 10;                       //VAJNO~!
    
    for(let i = 1;i<=age ;i++){

        if(i % 2 === 0){
            savedMoney  += moneyFromParents- 1 ;     //VAJNO~!
            moneyFromParents += 10;
            
           
        }

        else {
           savedMoney += pricePerToys;
        }
    }
      
    
    if(savedMoney >= washingMachinePrice){
          
        let moneyLeft = savedMoney - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);

    }

    else {

        let moneyNeeded = washingMachinePrice - savedMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }

        

}

cleverLily(10,170.00,6);