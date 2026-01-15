function worldSwimmingRecord (recordInSec,distanceInMeters,timeInSec) {
    let swimmingTime = distanceInMeters * timeInSec;        //30 000
    let time = Math.floor(distanceInMeters / 15)*12.5;   //1250
    let totalTime = swimmingTime + time;         //31250
    if(recordInSec > totalTime)                    
    {
         console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    }else { 
        let timeNeeded = totalTime - recordInSec;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    }

}


worldSwimmingRecord(10464,1500,20);