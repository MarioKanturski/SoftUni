function areaOfFigures (typeOfFig,number1,number2) {
      let area = 0;

     if(typeOfFig == "square"){
         area = number1 * number1;
     }

     else if (typeOfFig == "rectangle"){
        area = number1 * number2;

     }

     else if (typeOfFig == "circle"){
           area = Math.PI * number1 * number1;
        
     }

     else if(typeOfFig == "triangle")
     {
         area = number1 * number2 / 2; 

     }

    
     console.log(area.toFixed(3));

}

areaOfFigures("square",5);