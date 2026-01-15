function vacation (input) {
    let excursionMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let spendCount = 0;
    let totalDayCount = 0;
    

    while (availableMoney < excursionMoney) {
        
        let command = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        totalDayCount++;

        if (command === "spend") {
            availableMoney -= sum;
            if (availableMoney < 0) 
            {
                availableMoney = 0;
            }
                
            spendCount++;

            if (spendCount === 5) {
                console.log("You can't save the money.");
                console.log(totalDayCount);
                break;
            }

        } 
        
        else if (command === "save") {
            availableMoney += sum;
            spendCount = 0;
        }
    }

    if(availableMoney >= excursionMoney){
        console.log(`You saved the money for ${totalDayCount} days.`);  
    }
}

vacation((["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
);