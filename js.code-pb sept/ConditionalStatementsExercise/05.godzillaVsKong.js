function godzillaVsKong (budgetForMovie,numOfExtra,clothingPrice) {
    let decorPrice = budgetForMovie * 0.10;
    let costForClothing = numOfExtra * clothingPrice;
    let totalPrice = decorPrice + costForClothing; 
   
    if(numOfExtra > 150)
    {
        costForClothing *= 0.90;
       

    }
      
     
    if (totalPrice > budgetForMovie ){
        let neededMoney = totalPrice - budgetForMovie;
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);    //11340.00

    }

    else{

       let leftMoney =  budgetForMovie - totalPrice;    
       console.log("Action!");
       console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);


    }
}
    
godzillaVsKong(20000,120,55.5);