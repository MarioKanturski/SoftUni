function sum (depositeSum,timeForDeposite,yearlyInterestPercant) {
 let finalSum = depositeSum + timeForDeposite *((depositeSum * yearlyInterestPercant/100)/12);
 console.log(finalSum);        
                                //kogato primerno imame atribut chislo = "5.7 " za da stane v procenti go delim na /100 
                                //trqbva da bude 202.85;
                                //(depositeSum * yearlyInterestPercant/100) tova e ravno na 11,40 otkudeto delim /12 meseca
                                //otkudeto stava 0.95 sled tova depositSum = 200 + 
                                // + timeForDeposit = 3 * 0.95 = 202.85;
                               
}

sum (200,3,5.7);