function repainting (nylonNeeded,paintNeeded,liquidNeeded,hoursForWorker) {
let sumOfNaylon =  (nylonNeeded + 2) * 1.50;       //18
let sumOfPaint =  (paintNeeded * 1.10) * 14.50;  //175.45
let sumOfLuqid = liquidNeeded * 5.00;              //20
let bags = 0.40;                                   //0.40
let totalSum = sumOfNaylon + sumOfPaint + sumOfLuqid + bags; //213
let sumOfWorkers = (totalSum * 30/100) * hoursForWorker;
let finalSum = totalSum + sumOfWorkers;
console.log(finalSum);
}

//Сумата, която се заплаща на майсторите за 1 час работа, 
//е равна на 30% от сбора на всички разходи за материали.

repainting(10,11,4,8);