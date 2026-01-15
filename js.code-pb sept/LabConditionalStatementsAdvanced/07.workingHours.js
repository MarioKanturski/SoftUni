function workingHours (hours,day) {
   if(hours >= 10 && hours <= 18)
   {  
       if(day == 'Monday')
       {
        console.log('open');
       }
       else if(day == 'Tuesday')
       {
        console.log('open');
       }
       else if(day == 'Wednesday')
       {
        console.log('open');
       }
       else if(day == 'Thursday') 
       {
        console.log('open');
       }
       else if(day == 'Friday')
       {
         console.log('open');

       }
       else if(day == 'Saturday')
       {
          console.log('open'); 
       }
       else if(day == 'Sunday')
       {
        console.log('closed');
       }
      
   }

   else 
   {
        console.log('closed');

   }

}

workingHours(11,
"Sunday"
)




