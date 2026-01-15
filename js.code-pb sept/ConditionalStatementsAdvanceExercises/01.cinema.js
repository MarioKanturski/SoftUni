function cinema (typeOfProjection,countOfRows,countOfCows) {
    let price = countOfRows * countOfCows;
    if(typeOfProjection === 'Premiere') {

        console.log(`${price * 12.00.toFixed(2)}`);
        console.log('leva');
    }

    else if(typeOfProjection === 'Normal')
    {
        console.log(`${price * 7.50.toFixed(2)}`);
        console.log('leva');
    }
    else if(typeOfProjection === 'Discount') 
    {
        console.log(`${price * 5.00.toFixed(2)}`);
        console.log('leva');
    }

}

cinema("Normal", 21, 13);