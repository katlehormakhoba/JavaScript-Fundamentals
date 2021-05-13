'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (true) {
//       output = `NEW OUTPUT`;
//       console.log(output);

//     }

//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = `Katleho`;
// calcAge(1991);

console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this)
}

const calcAgeArr = (birthYear) =>{
    console.log(2037 - birthYear);
    console.log(this)
}

calcAgeArr(1980)
calcAge(1991)


const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this)
    }
}

jonas.calcAge();