function oldBooks(input) {
    
    let favouriteBook = input[0];
    let index = 1;

    let searchBook = input[index];
    let count = 0;

    while(favouriteBook !== searchBook){


        index++;
        searchBook = input[index];
        if(searchBook === 'No More Books'){
            break;
        }
    }

    if(favouriteBook === searchBook){
         count = index;
        console.log(`You checked ${count - 1} books and found it.`);
    } else{
        count = index;
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count - 1} books.`);
    }

}

oldBooks ((["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]));
