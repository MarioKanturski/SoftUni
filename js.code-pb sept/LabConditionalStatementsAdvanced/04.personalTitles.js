function personalTitles (age,gender) {
    if(gender == 'm')
    {
        if(age  >= 16)
        {
            console.log('Mr.');
        }
        else if(age < 16)
        {
            console.log('Master');
        }

    }
    if(gender == 'f'){
          if(age >= 16)
          {
            console.log('Ms.');
          }
          else if(age < 16)
          {
            console.log('Miss'); 
          }
    }
}

personalTitles(12,'f');