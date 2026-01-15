function SumPrimeNonPrime (input) {
     
    let index = 0;
    let command = input[index];

    let primeSum = 0;
    let nonPrimeSum  = 0;
  

    while(command !== 'stop'){

        let number =  Number(command);
        let isPrime = false;

        if(number < 0){
            console.log(`Number is negative.`);
            index++;
            command = input[index];
            continue;
        }

        for (let i = 2; i < number; i++) { 
            if(number % i === 0){
                isPrime = true;
                break;
            
            }
        }

        if(isPrime === true)
        {
            nonPrimeSum += number;
        } 
        else
        {
            primeSum += number;
        }
        
        index++;
        command = input[index];
}

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);

}

SumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"]);
