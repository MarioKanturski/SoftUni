function fruitShop (fruit,dayOfWeek,quantity) {
    let price = 0;
 
  if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday")
    {
        if(fruit === 'banana')
        {
            price = quantity * 2.50;
     

        }

        else if(fruit === 'apple')
        {
            price = quantity * 1.20;
      

        }
        else if(fruit === 'orange')
        {
            price = quantity * 0.85;
       

        }
        else if(fruit === 'grapefruit')
        {

            price = quantity * 1.45;

        }
        else if(fruit === 'kiwi')
        {
            price = quantity * 2.70;
            

        }
        else if(fruit === 'pineapple')
        {
            price = quantity * 5.50;
            

        }
        else if(fruit === 'grapes')
        {
            price = quantity * 3.85;
           

        }
    }
         

       else if(dayOfWeek === 'Saturday'|| dayOfWeek === 'Sunday')
        {
   
        if(fruit === 'banana')
        {
            price = quantity * 2.70;
          
        }

        else if(fruit === 'apple')
        {
            price = quantity * 1.25;
    

        }
        else if(fruit === 'orange')
        {
            price = quantity * 0.90;
      

        }
        else if(fruit === 'grapefruit')
        {

            price = quantity * 1.60;
            
        }
        else if(fruit === 'kiwi')
        {
            price = quantity * 3.00;
           

        }
        else if(fruit === 'pineapple')
        {
            price = quantity * 5.60;
           

        }
        else if(fruit === 'grapes')
        {
            price = quantity * 4.20;
          
        }
        
    }


    if (price === 0.00) { 
        console.log('error');
    } else {
        console.log(price.toFixed(2));    
    }
}

fruitShop("tomato",
"Monday",
0.5

);