function cinemaTickets (arr){
    let index = 0;
    let command = arr[index];

    let studentsTicketCounter = 0;
    let stanrardTicketCounter = 0;
    let kidsTicketCounter = 0;
    
    while(command !== 'Finish') {
        let movieName = arr[index];
        if(movieName === 'Finish'){
            break;
        }

        index++;
        let ticketsCount = Number(arr[index])
        let freeSeats = ticketsCount;
        while (command !== 'End') {
            index++;
            let ticketType = arr[index];

            if(ticketType === 'End'){
                break;
            }

            switch(ticketType){
                case 'student': 
                    studentsTicketCounter++; 
                    break;
                case 'standard':
                    stanrardTicketCounter++;
                    break;
                case 'kid':
                    kidsTicketCounter++;
                    break;
            }

            freeSeats--; 
            if(freeSeats == 0){ 
                break;
            }
        }

        let soldTickets = ticketsCount - freeSeats;
        let percentFullHall = soldTickets / ticketsCount * 100;

        console.log(`${movieName} - ${percentFullHall.toFixed(2)}% full.`)
        index++   
    }

    let allSoldTickets = studentsTicketCounter + stanrardTicketCounter + kidsTicketCounter;
    let percentSudentsSoldTickets = studentsTicketCounter / allSoldTickets * 100;
    let percentStandardSoldTickets = stanrardTicketCounter / allSoldTickets * 100;
    let percentKidsSoldTickets = kidsTicketCounter / allSoldTickets * 100;

    console.log(`Total tickets: ${allSoldTickets}`)
    console.log(`${percentSudentsSoldTickets.toFixed(2)}% student tickets.`)
    console.log(`${percentStandardSoldTickets.toFixed(2)}% standard tickets.`)
    console.log(`${percentKidsSoldTickets.toFixed(2)}% kids tickets.`)
}

cinemaTickets(
["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]
)