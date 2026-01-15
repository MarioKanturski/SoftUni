function seconds (timeFirst,timeSecond,timeThird)
{
    
let totalTime = timeFirst + timeSecond + timeThird;
let minuts = Math.floor(totalTime/60);
let seconds = totalTime % 60;
if(seconds < 10)
{
    console.log(`${minuts}:0${seconds}`);
}
else {
    console.log(`${minuts}:${seconds}`);
}

}

seconds(35,45,44);