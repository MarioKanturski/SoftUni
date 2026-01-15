function examPreparation(input) {
    
    let maxBadGrades = Number(input[0]);

    let index = 1;
    let command = input[index];

    let badGradeCount = 0;
    let numberOfProblems = 0;
    let gradeSum = 0;
    let lastProblem = '';

    while(command !== 'Enough'){    
        lastProblem = command;

        index++; 
        let problemGrade = Number(input[index]);

        if(problemGrade <= 4){
            badGradeCount++;

            if(badGradeCount === maxBadGrades){
            console.log(`You need a break, ${numberOfProblems} poor grades.`);
            break;
            }
        }

        numberOfProblems++;
        gradeSum += problemGrade;

        index++; 
        command = input[index];
    }

    if(command === 'Enough'){
        let average = gradeSum / numberOfProblems;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}


examPreparation((["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]));
