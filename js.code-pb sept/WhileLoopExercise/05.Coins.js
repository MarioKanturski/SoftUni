function coins (coins) {

    coins = Math.round(coins *= 100);
    let cointCount = 0;

    while(coins > 0){

       if(coins >= 200){
        coins -= 200;
        cointCount++;
       }
       else if(coins >= 100){
        coins -= 100;
        cointCount++;
       }
       else if(coins >= 50){
        coins -= 50;
        cointCount++;
       }

       else if(coins >= 20){
        coins -= 20;
        cointCount++;
       }

       else if(coins >= 10){
        coins -= 10;
        cointCount++;
       }

       else if(coins >= 5){
        coins -= 5;
        cointCount++;
       }

       else if(coins >= 2){
        coins -= 2;
        cointCount++;
       }
       else if(coins >= 1){
        coins -= 1;
        cointCount++;
       }
    }

    console.log(cointCount);

}

coins(1);