function trekkingMania (array) {

 let musalaCount = 0;
 let monblanCount = 0;
 let kilimandjaroCount = 0;
 let k2Count = 0;
 let everestCount = 0;



 let numberOfGroups = Number(array[0]);
    

 for(let i = 1;i<=numberOfGroups;i++){

    let numberOfPeopleInGroups = Number(array[i]);

    if(numberOfPeopleInGroups <= 5){

        musalaCount+=numberOfPeopleInGroups;
    }
    else if(numberOfPeopleInGroups <= 12){
        
        monblanCount+=numberOfPeopleInGroups;


    }
    else if(numberOfPeopleInGroups <= 25){
        
        kilimandjaroCount+=numberOfPeopleInGroups;


    }
     else if(numberOfPeopleInGroups <= 40){
        
       k2Count+=numberOfPeopleInGroups;


    }
    else {
        everestCount+=numberOfPeopleInGroups;


    }
 }

  let totalCount = musalaCount + monblanCount + kilimandjaroCount + k2Count + everestCount;
  
  let musalaPercant = musalaCount / totalCount * 100;                         //VAJNO
  let monblanPercant = monblanCount / totalCount * 100;
 let kilimandjaroPercant = kilimandjaroCount / totalCount * 100;
   let k2Percant = k2Count / totalCount * 100;
   let everestPercant = everestCount / totalCount * 100;

    console.log(`${musalaPercant.toFixed(2)}%`);
   console.log(`${monblanPercant.toFixed(2)}%`);
    console.log(`${kilimandjaroPercant.toFixed(2)}%`);
    console.log(`${k2Percant.toFixed(2)}%`);
    console.log(`${everestPercant.toFixed(2)}%`);
}

trekkingMania(["10","10","5","1","100","12", "26", "17", "37", "40", "78"]);