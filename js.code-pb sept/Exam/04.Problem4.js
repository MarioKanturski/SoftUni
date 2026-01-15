function runningChallenge(input) {
    let N = Number(input[0]); 
    let M = Number(input[1]);
    let totalDistance = M;

    for (let i = 0; i < N; i++) {
        let percent = Number(input[i + 2]); 
        M += M * (percent / 100);
        totalDistance += M;
    }

    if (totalDistance >= 1000) {
        let extra = Math.ceil(totalDistance - 1000);
        console.log(`You've done a great job running ${extra} more kilometers!`);
    } else {
        let needed = Math.ceil(1000 - totalDistance);
        console.log(`Sorry Mrs. Ivanova, you need to run ${needed} more kilometers`);
    }
}


runningChallenge(["5", "30", "10", "15", "20", "5", "12"]);



