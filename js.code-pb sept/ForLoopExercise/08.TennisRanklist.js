function tennisRanklist (array){

    let numberOfTournaments = Number(array[0]);
    let startingPoints = Number(array[1]);

    let pointsForW = 0;
    let pointsForF = 0;
    let pointsForSF = 0;
    let wonCount = 0;

    for(let i = 2;i < numberOfTournaments + 2;i++){
        let typeOfTournaments = array[i];
        if(typeOfTournaments === 'W'){
            pointsForW += 2000;
            wonCount ++;
        }
        else if(typeOfTournaments === 'F'){
            pointsForF += 1200;
        }
        else if(typeOfTournaments === 'SF'){
            pointsForSF += 720;
        }
    }

     let totalPoints = startingPoints + pointsForW + pointsForF + pointsForSF;
     console.log(`Final points: ${totalPoints}`);

     let avrgPoints = (pointsForW + pointsForF + pointsForSF) / numberOfTournaments;     //vajno
     console.log(`Average points: ${Math.floor(avrgPoints)}`);
             
     let percant = (wonCount / numberOfTournaments) * 100;    //vajno
     console.log(`${percant.toFixed(2)}%`)

   

}

// Final points: 6190 
// Average points: 1360 
// 50.00%

tennisRanklist((["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]));