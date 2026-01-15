function yardGreening (meters) {
  let squareMeter = 7.61;
  let sum = squareMeter * meters;
  let discount  =  sum * 0.18;
  let finalPrice = sum - discount;
  console.log(`The final price is: ${finalPrice} lv.`);

  console.log(`The discount is: ${discount} lv.`);

}

yardGreening(550);