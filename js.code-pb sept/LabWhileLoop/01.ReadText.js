function readText (array) {
    let index = 0;
    let word = array[index];

    while(word !== 'Stop'){
    
        console.log(word);

        index++;    
        word = array[index];
        //index++;
     
       
       

    }

}

readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);