function EqualSumsEvenOddPosition (firstNumber , secondNumber) {
   
    let print = '';
    for(let i = firstNumber;i <= secondNumber;i++){
        let evenSum = 0;
        let oddSum = 0; 
        let currentNum = String(i);
            
        for(let j = 0;j < currentNum.length;j++){
           let currentDigit = Number(currentNum[j]);    
           
           if(j % 2 === 0)       
            {
                evenSum += currentDigit;
            }
            else {
                oddSum += currentDigit;
            }
        }

        if(oddSum === evenSum){
            print += `${i} `;
        }
    }
    console.log(print);

}

EqualSumsEvenOddPosition(100000,100050);