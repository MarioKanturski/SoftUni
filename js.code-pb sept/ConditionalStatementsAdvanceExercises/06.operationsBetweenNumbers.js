function operationsBetweenNumbers (number1,number2,operation) {
    let price = 0;
    if(operation === '+'){

        price = number1 + number2;
        if(price % 2 === 0)
        {
            console.log(`${number1} ${operation} ${number2} = ${price} - even`);
        }
        else {
            console.log(`${number1} ${operation} ${number2} = ${price} - odd`);
        }
    }

    else if(operation === '-'){

        price = number1 - number2;
        if(price % 2 === 0)
        {
            console.log(`${number1} ${operation} ${number2} = ${price} - even`);
        }
        else {
            console.log(`${number1} ${operation} ${number2} = ${price} - odd`);
        }
    }

    else if(operation === '*'){

        price = number1 * number2;
        if(price % 2 === 0)
        {
            console.log(`${number1} ${operation} ${number2} = ${price} - even`);
        }
        else {
            console.log(`${number1} ${operation} ${number2} = ${price} - odd`);
        }
    }

    else if(operation === '/'){
       
        price = number1 / number2;
        if(number2 === 0)
        {
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            console.log(`${number1} ${operation} ${number2} = ${price.toFixed(2)}`);
        }  

    }

    else if(operation === '%'){
           
        price = number1 % number2;
        if(number2 === 0)
        {
            console.log(`Cannot divide ${number1} by zero`);
        }
        else {
            console.log(`${number1} ${operation} ${number2} = ${price}`);
        }  
    } 
}


operationsBetweenNumbers(10,12,'+');