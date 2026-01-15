function accountBalance (inputArray) {
     
    let index = 0;
    let input = inputArray[index];
    let sum = 0;

    //let secondIndex = 1;
    

    while(input !== 'NoMoreMoney'){

        let money = Number(input);
    
        if(money < 0){
           console.log(`Invalid operation!`);
            break;
        }

        sum += money;

        index++;
        input = inputArray[index];

        console.log(`Increase: ${money.toFixed(2)}`);
        
    }

    console.log(`Total: ${sum.toFixed(2)}`);

}

accountBalance(["120", "45.55", "-150"]);