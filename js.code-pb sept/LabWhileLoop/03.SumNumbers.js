function sumNumbers (array) {
    let index = 0;
    let number = Number(array[index]);

    let sum = 0;
    let secondIndex = 1;
    while(sum <= number){
      
      let totalnumber = Number(array[secondIndex]);
      secondIndex++;
      
      if(sum >= number){          // Moje i bez tova no znaka v while trqbva da bude < , a ne <= 
        break;
      }

      sum += totalnumber;
    
    }

    console.log(sum);


}

sumNumbers((["100","10","20","30","40"]));