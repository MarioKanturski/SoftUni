function graduation (inputArray) {

   let index = 0;
   let name = inputArray[0];  
   let average = 0;
   let expelsCount = 0;
   let passedYears = 0;
   let gradeSum = 0;

   while(expelsCount < 2 && passedYears < 12){
        
      index ++;
      let grade = Number(inputArray[index]);

      if(grade >= 4) {
         passedYears++;
      }
      else if(grade < 4){
         expelsCount++;
         break;
      } 

      gradeSum += grade;          

   }

   if(passedYears === 12){

      let numberCount = index;
      average = (gradeSum / numberCount);
     console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
   }

   else{

      console.log(`${name} has been excluded at ${passedYears + 1} grade`);
   }
   
}


graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"]);