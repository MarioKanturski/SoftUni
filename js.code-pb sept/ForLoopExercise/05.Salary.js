function salary (array) {
let openTabs = array[0];
let salary = Number(array[1]);
for(let i = 2;i < openTabs + 2 ;i++){
    let tabs = array[i]; 
    if(tabs === 'Facebook'){
        
        salary -= 150;
    }
    else if (tabs === 'Instagram') {
        salary -= 100;  
    }

    else if (tabs === 'Facebook') {
        salary -= 150;
    }

    else if (tabs === 'Reddit') {
        salary -= 50;
    }

    else if(tabs === 'Facebook') {
        salary -= 150;
    }
     else if(tabs === 'Facebook') {
        salary -= 150;
    }


    

}

  if(salary <= 0) {
    console.log(`You have lost your salary.`);
  }
  else {
    console.log(salary);
  }

}

salary([10,

750,

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"]);