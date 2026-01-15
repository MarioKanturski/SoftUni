function MultiplyTable (number) {

    let number1 = number;
    let stringNumbers = number1.toString();

    let x1 = parseInt(stringNumbers[2]); 
    let x2 = parseInt(stringNumbers[1]); 
    let x3 = parseInt(stringNumbers[0]);



for (let i = 1; i <= x1; i++){
    for(let j = 1;j <= x2;j++){
        for(let k = 1; k <= x3;k++){

         let sum = i * j * k;
        console.log(`${i} * ${j} * ${k} = ${sum};`);
          
        }       
    }
}

}

MultiplyTable(324);