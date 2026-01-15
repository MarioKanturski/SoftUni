function sumOfNumbers (numberText) {
    let sum = 0;
    for(let i = 0; i< numberText.length; i++){
        let number = Number(numberText[i]);
        sum += number;
         
    }

    console.log(`The sum of the digits is:${sum}`);

}

sumOfNumbers("1234");