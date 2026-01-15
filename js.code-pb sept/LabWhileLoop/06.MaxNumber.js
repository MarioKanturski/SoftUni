function maxNumber (input) {

    let index =  0;
    let inputArray = input[index];
    let maxNum = Number.MIN_SAFE_INTEGER;

    let currectNum = 0;

    while(inputArray !== 'Stop') {

       currectNum = Number(inputArray);              //VAJNO
 
        if(currectNum > maxNum){                     //VAJNO
            maxNum = currectNum;                     //VAJNO
        }

        index++;
        inputArray = input[index];
    }

    console.log(maxNum);

}

maxNumber(["-10", "20", "-30", "Stop"]);