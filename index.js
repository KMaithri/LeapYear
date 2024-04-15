console.log("Were you born on leap year? Check now!");
console.log("----------------------------");
var readLineSync = require("readline-sync");


//getting input from user
var userName = readLineSync.question("What is your name? ");
var userbdyear = readLineSync.question("What is your birth year? (Enter it in this format (yyyy) )");

// check for incorrect format
if(isNaN(userbdyear)){
  console.log("Error! Please enter birth year in the correct format");
}else{
  leapCheck(userbdyear);
}

//function
function leapCheck(a){
  if(a%4 === 0){
    if(a%100 === 0){
      if(a%400 === 0){
        console.log(userName.toUpperCase() + "! yes you are born in a leap year");
      }else{
        console.log(userName.toUpperCase() + "! no you are not born in a leap year");
      }
    }else{
      console.log(userName.toUpperCase() + "! yes you are born in a leap year");
    } 
  }else{
    console.log(userName.toUpperCase() + "! no you are not born in a leap year");
  }
}
