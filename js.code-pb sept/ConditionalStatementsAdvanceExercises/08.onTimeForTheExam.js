function onTimeForExam(examHour, examMinute, arrivalHour, arrivalMinute) {
     
  let totalExamMin = examHour * 60 + examMinute;
  let totalArrivalMin = arrivalHour * 60 + arrivalMinute;

  let totalDiffMin = Math.abs(totalExamMin - totalArrivalMin);

  let diffHour = Math.floor(totalDiffMin / 60);
  let diffMin = totalDiffMin % 60;

  if(totalDiffMin === totalArrivalMin){
    console.log('On time');
  }

  else if (totalExamMin < totalArrivalMin){

    console.log('Late');
    if(totalDiffMin < 60){
      console.log(`${diffMin} minutes after the start`);
    }else {
      if(diffMin < 10){
        console.log(`${diffHour}:0${diffMin} hours after the start`);
      }
      else {
        console.log(`${diffHour}:${diffMin} hours after the start`);
      }
    }
  } 

  else{
    if(totalDiffMin <= 30 ){
      console.log('On time');
      console.log(`${diffMin} minutes before the start`);
    } else {
      console.log(`Early`);
       if(totalDiffMin < 60){
      console.log(`${diffMin} minutes before the start`);
    }else {
      if(diffMin < 10){
        console.log(`${diffHour}:0${diffMin} hours before the start`);
      }
      else {
        console.log(`${diffHour}:${diffMin} hours before the start`);
      }
    }
  }
  }
}

onTimeForExam(16,0,15,0)