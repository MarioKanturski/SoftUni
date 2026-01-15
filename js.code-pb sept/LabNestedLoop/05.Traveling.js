function travelling (input) {
    
    let index = 0;
    
    while(input[index] !== 'End'){

      let destination = input[index];
      index++;

      let budget = Number(input[index]);
      index++;

      let saving = 0;

       while(saving < budget){
          let sum = Number(input[index]);
          saving += sum;
          index++;
       }

       console.log(`Going to ${destination}!`);
       
    }

}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);