function BestPlayer (input) {

   let index = 0;
   let command = input[index];

   index++;
   let playerScore = Number(input[index]);

   while(command !== 'END') {
        let playerName = input[index];
        playerScore = Number(playerName);

        if(playerScore >= 10) {
            break;
        }
       index++;
       command = input[index];
   }

   if(command === 'END') {

    if(playerScore === playerScore) {
        if(playerScore >= 3) {
           index-=2;
           command = input[index];
           console.log(`${command} is the best player!`);
           console.log(`He has scored ${playerScore} goals and made a hat-trick !!!`);
 
        }    
    else {
          index-=4;
        command = input[index];
        console.log(`${command} is the best player!`);

        index++;
        playerScore = input[index];
        console.log(`He has scored ${playerScore} goals.`);
     

    }
      }


    else if(command !== 'END') {

    index--;
    command = input[index]; 
    console.log(`${command} is the best player!`);
    console.log(`He has scored ${playerScore} goals and made a hat-trick !!!`);
       
    
   }
    
    else {
    index-=2;
      command = input[index];
      console.log(`${command} is the best player!`);

      index++;
      playerScore = input[index];
      console.log(`He has scored ${playerScore} goals and made a hat-trick !!!`);
    }
      
   }

   else if(command !== 'END') {

    index--;
    command = input[index]; 
    console.log(`${command} is the best player!`);
    console.log(`He has scored ${playerScore} goals and made a hat-trick !!!`);
        
}

}

BestPlayer ((["Petrov",
"2",
"Drogba",
"11"])
);