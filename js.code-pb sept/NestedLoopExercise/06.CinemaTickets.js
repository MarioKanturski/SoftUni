function CinemaTickets (input) {
let index =0;
let command = input[index];

index++;
let freePlaces = Number(input[index]);

let studentCount = 0;
let standardCount = 0;
let kidCount = 0;

let totalBillSum =0;
let billetsCount  = 0;

let firstSum = 0;
while(command !== 'Finish'){

    index++;
    command = input[index];
    while(command !== 'End') {

    if(command === 'student'){
        studentCount++;
    }

    else if(command === 'standard'){
        standardCount++;
    }
    else if(command === 'kid'){
        kidCount++;
    } 

    totalBillSum = studentCount + standardCount + kidCount;

    if(totalBillSum <= freePlaces){
       firstSum = totalBillSum * freePlaces;  

    }


    if(command === 'Finish'){
        break;
    }

       index++;
       command = input[index];

    }
    
    console.log(`${command} - ${firstSum}% full.`);
    
}
    let billCount = studentCount + standardCount + kidCount;
    console.log(`Total tickets: ${billCount}`);

}

CinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"]);