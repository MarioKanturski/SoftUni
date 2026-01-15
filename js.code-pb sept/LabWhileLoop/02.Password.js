function password (array) {
   let name = array[0];
   let password = array[1];
   
   let wrongPassowrd = array[2];
   let index = 3;    

   while(wrongPassowrd !== password){

        //index++;    
        wrongPassowrd = array[index];
        index++;
   }

   console.log(`Welcome ${name}!`);


}

password((["Nakov","1234","Pass","1324","1234"]));