//width  length

function cake (input){
 
    let index = 0;
    let command = input[index];

    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);

    let cakeSize = width * length;

    while(command !== 'STOP') {

       index++;
       command = input[index];
       if(command === 'STOP')
       {
         console.log(`${cakeSize} pieces are left.`);
         break;
       }

       let sum = Number(command);
       cakeSize -= sum;

       if(cakeSize < 0){
           console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
           break;
       }
    }
}

cake((["10",
"10",
"20",
"20",
"20",
"20",
"21"]));
