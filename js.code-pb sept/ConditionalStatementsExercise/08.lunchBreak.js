function lunchBreak (nameOfserial,timeForEpisode,timeForBreak) {
    let timeForLunch = timeForBreak / 8;
    let freeTime = timeForBreak / 4;
    let timeRemaining = timeForBreak - timeForLunch - freeTime;
    if(timeRemaining >= timeForEpisode)
    { 
        let timeLeft = Math.ceil(timeRemaining - timeForEpisode);
        console.log(`You have enough time to watch ${nameOfserial} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeed  = Math.ceil(timeForEpisode - timeRemaining);   
        console.log(`You don't have enough time to watch ${nameOfserial}, you need ${timeNeed} more minutes.`);
    }


}

lunchBreak("Game of Thrones",60,96);