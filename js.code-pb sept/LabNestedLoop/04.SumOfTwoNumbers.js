function sumOfTwoNumbers (numberOne,numberTwo,magicalNumber) {

    let count = 0;
    let sum =0;
    let combinationFound = false;

    for(let i = numberOne;i <= numberTwo;i++)
    {
        for (let j = numberOne; j <= numberTwo; j++) {
           
            count++;
            sum = i+j;
            if(sum === magicalNumber){
                combinationFound = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${magicalNumber})`);
                break;
            }
        }

        if(combinationFound){
            break;
        }
    }

    if(!combinationFound) {
      console.log(`${count} combinations - neither equals ${magicalNumber}`);
    }
}

sumOfTwoNumbers(1,10,5);