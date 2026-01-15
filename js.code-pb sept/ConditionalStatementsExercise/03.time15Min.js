function time15Min(hour,minut){
  let totalMinuts = minut + 15;
  if(totalMinuts >= 60)
  {
    hour += Math.floor(totalMinuts/60);
    totalMinuts = totalMinuts % 60;
  }

  if (hour >= 24)
  {
    hour = hour %24;
  }

 if (totalMinuts < 10)
  {

    console.log(`${hour}:0${totalMinuts}`);
  }
  else {
    console.log(`${hour}:${totalMinuts}`);
  }

}

time15Min(12,49);