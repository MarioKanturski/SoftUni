function oscars (array) {

   let actorName = array[0];
   let points = Number(array[1]);
   let judjeCount = array[2];

   for(let i = 3;i < judjeCount *2 +3 ;i+=2){
       let judjeName = array[i];
       let judjePoints = Number(array[i+1]);
       points += judjeName.length * judjePoints / 2;
       if(points > 1250.5){

        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
        break;

       }

   }    

   if(points <= 1250.5) {
    let pointNeeded =  1250.5 - points;
    console.log(`Sorry, ${actorName} you need ${pointNeeded.toFixed(1)} more!`)
   }


   



}

oscars(["Zahari Baharov","205",4,"Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);