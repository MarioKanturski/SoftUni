function moving (input) {
   
    let width = 0;
    let length = 0;
    let height = 0;

    let boxes = 0;

    let index = 0;
    let command = input[index];


    width = Number(input[index]);

    index++;
    length = Number(input[index]);

    index++;
    height = Number(input[index]);

    let totalFreeSpace = width * length * height;

    let sumOfKubicMeters = 0;


    while (command !== 'Done'){
           
         
        index++;
        command = input[index];
        if(command === 'Done'){
            index --;
            command = input[index];
            let kubicMeters = Number(command);
            sumOfKubicMeters += kubicMeters;
            break;
        }
        
        let kubicMeters = Number(command);
        sumOfKubicMeters += kubicMeters;

        if(totalFreeSpace <= sumOfKubicMeters){
            console.log(`No more free space! You need ${Math.abs(totalFreeSpace - sumOfKubicMeters)} Cubic meters more.`);
            break;
        }
    }
    
    index ++;
    command = input[index];
    if(command === 'Done') {

        index--
        command = input[index];
        let kubicMeters1 = Number(command);
        sumOfKubicMeters -= kubicMeters1;
        console.log(`${totalFreeSpace - sumOfKubicMeters} Cubic meters left.`);
    }
}

moving((["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
);