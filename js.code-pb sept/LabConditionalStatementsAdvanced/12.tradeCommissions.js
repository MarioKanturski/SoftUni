function tradeCommission (city,sales,) {
    let price = 0;
 
    if (sales >= 0 && sales <= 500)
    {
        if(city === 'Sofia')
        {
            price = (sales * 5)/100;
             console.log(price.toFixed(2));    
        }

        else if(city === 'Varna')
        {
            price = (sales * 4.5)/100;
             console.log(price.toFixed(2));    
      

        }
        else if(city === 'Plovdiv')
        {
            price = (sales * 5.5)/100;
             console.log(price.toFixed(2));    
       

        }

          else {
            console.log('error');
        }

        
        
    }
         

    else if(sales > 500 && sales <= 1000)
    {
   
        if(city === 'Sofia')
        {
            price = (sales * 7)/100;
             console.log(price.toFixed(2));    
          
        }

        else if(city === 'Varna')
        {
            price = (sales * 7.5)/100;
             console.log(price.toFixed(2));    
    

        }
        else if(city === 'Plovdiv')
        {
            price = (sales * 8)/100;
             console.log(price.toFixed(2));    
      

        }

          else {
            console.log('error');
        }
     
        
    }


    else if(sales > 1000 && sales <= 10000)
    {
      if(city === 'Sofia')
        {
            price = (sales * 8)/100;
             console.log(price.toFixed(2));    

          
        }

        else if(city === 'Varna')
        {
            price = (sales * 10)/100;
            console.log(price.toFixed(2));  
        }
        else if(city === 'Plovdiv')
        {
            price = (sales * 12)/100;
             console.log(price.toFixed(2));    
        }
          else {
         console.log('error');
        }

      

    }

    else if(sales > 10000){
        
        if(city === 'Sofia')
        {
            price = (sales * 12)/100;
             console.log(price.toFixed(2));    

          
        }

        else if(city === 'Varna')
        {
            price = (sales * 13)/100;
            console.log(price.toFixed(2));  
            
              
    

        }
        else if(city === 'Plovdiv')
        {
            price = (sales * 14.5)/100;
            console.log(price.toFixed(2));    


        }

        else {
            console.log('error');
        }

        
    }

      else {
            console.log('error');
        }


   
}


tradeCommission("Varna",
3874.50
);
