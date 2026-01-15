function skiTip (daysOfStay,typeOfRoom,assessment) {
  let totalDayOfStay = daysOfStay - 1;
  let totalPrice = 0;
  if(typeOfRoom === 'room for one person') {
    totalPrice = totalDayOfStay * 18.00;
  }

  else if(typeOfRoom === 'apartment'){
    totalPrice = totalDayOfStay*25.00;
    if(totalDayOfStay < 10)
    {
        totalPrice *= 0.70;
    }

    else if(totalDayOfStay > 10 && totalDayOfStay < 15)
    {
        totalPrice *= 0.65;
    }

    else if(totalDayOfStay > 15)
    {
        totalPrice *= 0.50;
    }
  }

else if(typeOfRoom === 'president apartment'){
    totalPrice = totalDayOfStay*35.00;
    if(totalDayOfStay < 10)
    {
        totalPrice *= 0.90;
    }

    else if(totalDayOfStay > 10 && totalDayOfStay < 15)
    {
        totalPrice *= 0.85;
    }

    else if(totalDayOfStay > 15)
    {
        totalPrice *= 0.80;
    }
  }

  if(assessment === 'positive'){
    totalPrice *= 1.25;

  }

  else if (assessment === 'negative'){
        totalPrice *= 0.9;

  }

  console.log(totalPrice.toFixed(2));

}

skiTip (2, "apartment", "positive");