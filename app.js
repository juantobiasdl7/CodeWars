// Title: Format a string of names like 'Bart, Lisa & Maggie'.
// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, 
//         which should be separated by an ampersand.

function list(names){
    let arr = [];
    for(let i = 0; i<names.length; i++){

        if(i < names.length-2){
            arr.push(names[i].name + ",");
        }else if(i < names.length-1){
            arr.push(names[i].name + " &");
        }else{
            arr.push(names[i].name);
        }
    }
    let newArr = arr.join(" ");
    // console.log(newArr);
    return newArr;
  }

  console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));