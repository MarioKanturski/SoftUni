function fruitMarket (strawberryPrice,quantityBananas,quantityOranges,quantityRaspberries,quantityStrawberry) {

   let raspberriesPrice = strawberryPrice / 2;
   let orangesPrice = raspberriesPrice -(raspberriesPrice * 0.40);
   let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.80);

   let totalBananasSum = quantityBananas * bananasPrice;
   let totalOrangesSum = quantityOranges * orangesPrice;

   let totalRaspberriSum = quantityRaspberries * raspberriesPrice;
   let totalStrawberrySum = quantityStrawberry * strawberryPrice;

   let totalSumForAllProducts = totalBananasSum + totalOrangesSum + totalRaspberriSum + totalStrawberrySum;
   console.log(totalSumForAllProducts.toFixed(2));

}

fruitMarket (48,
10,
3.3,
6.5,
1.7
);
