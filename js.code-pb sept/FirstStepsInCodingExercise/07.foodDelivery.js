 function resturantMenu (chickenMenu,fishMenu,vegetarianMenu){
    //desert = 20% ot obshtata smetka bez dostavka.
    //dostavaka = 2.50 lv.

    let chickenMenu1 = 10.35 * chickenMenu;
    let fishMenu1 = 12.40 * fishMenu;
    let vegetarianMenu1 = 8.15* vegetarianMenu;
    let sumMenu = chickenMenu1 + fishMenu1 + vegetarianMenu1;

    let desertSum = sumMenu / 5;
    let finalSum = sumMenu + desertSum + 2.50;
    console.log(finalSum);


 }



 resturantMenu(2,4,3);