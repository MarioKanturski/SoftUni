function mixNumber (input) {

    let index =  0;
    let inputArray = input[index];
    let mixNum = Number.MAX_SAFE_INTEGER;     //VAJNO

    let currectNum = 0;

    while(inputArray !== 'Stop') {

       currectNum = Number(inputArray);

        if(currectNum < mixNum){         //VAJNO
            mixNum = currectNum;         //VAJNO
        }

        index++;
        inputArray = input[index];
    }

    console.log(mixNum);

}

mixNumber(["-10", "20", "-30", "Stop"]);