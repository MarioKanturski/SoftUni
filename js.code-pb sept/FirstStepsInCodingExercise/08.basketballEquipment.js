 function basketballEquipment(taxForTraining){
  let shoes = taxForTraining - (taxForTraining * 0.40);//219
  let team = shoes - (shoes * 0.20);//175.2
  let ball = team / 4;            //43.80
  let accessories = ball / 5;          //8.76                   
  let totalSum = taxForTraining + shoes + team + ball + accessories;
  console.log(totalSum);//811.76 otgovor

 }

 basketballEquipment(365);