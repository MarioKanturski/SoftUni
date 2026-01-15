function histogram (array) {
      
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let numCount = array[0];               //VAJNO~!
    for(let i = 1;i <= numCount;i++){

        let number = array[i];      
        if(number < 200){
            count1++;    
            
        } else if (number < 400){
            count2++;
            
        }
        else if( number < 600){
            count3++;
            
        }
        else if( number < 800){
            count4++;
           
        }
        else {
            count5++;     
        }
    }

   

    p1 = count1/numCount * 100;        //VAJNO
    p2 = count2/numCount * 100;
    p3 = count3/numCount* 100;
    p4 = count4/numCount * 100;
    p5 = count5/numCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram([3,1,2,999]);