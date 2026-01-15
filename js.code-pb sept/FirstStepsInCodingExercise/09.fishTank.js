 function fishTank (length,width,heightInCentimetersm,percantages) {
    let volume = length * width * heightInCentimetersm;  //29962
    let volumeInLiters = volume /1000;        // 299.62
    let litresNeeded = volumeInLiters * (1 - percantages/100);     // 248.6887
    console.log(litresNeeded);
 }

 fishTank(85,75,47,17);