function trainTheTrainers (input) {

    let avgGrade = 0;
    let avgFinalScore = 0;
    
    let jury = Number(input[0]);
    let index = 1;
    let presentationName = input[index];    

    
    let gradeCount = 0;
    let sum = 0;
    let secondSum = 0;   // tazi suma e ravna na purvata suma 

    while(presentationName !== 'Finish') {

        let presentationGrade = 0;
        for(let i = 0;i < jury;i++){
            index++;
            presentationGrade = Number(input[index]);
            secondSum += presentationGrade;
            sum += presentationGrade;
            gradeCount++;
        }

        avgGrade = sum / jury;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);
      
        index++;
        presentationName = input[index];
        sum = 0;

    }

    avgFinalScore = secondSum / gradeCount;
    console.log(`Student's final assessment is ${avgFinalScore.toFixed(2)}.`);
    

}

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);