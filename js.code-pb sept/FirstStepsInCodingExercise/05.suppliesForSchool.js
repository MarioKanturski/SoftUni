function suppliesForSchool (pens,markers,liquid,percantDiscount){
 let sumOfPens = pens * 5.80;         //11,6
 let sumOfMarkers = markers * 7.20;  //21,6
 let sumOfLuqid = liquid * 1.20;    //4,8
 let totalSum = sumOfPens + sumOfMarkers + sumOfLuqid;
 let finalSum = totalSum-(totalSum * percantDiscount/100);

 console.log(finalSum);       // 28.5
}

suppliesForSchool(2,3,4,25);