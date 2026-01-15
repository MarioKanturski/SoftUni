function building (firstNumber,secondNumber) {

    for(let i = firstNumber;1 <= i; i--)
    {
        let print = '';
        for( let j = 0;j < secondNumber;j++){
            
            if(i === firstNumber){
               print += `L${i}${j} `;
            }

            else if(i % 2 === 0){
                print += `O${i}${j} `;
            }

            else if(i % 2 !== 0){
                print += `A${i}${j} `;
            }
        }

        console.log(print);
    }
}

building(6,4)