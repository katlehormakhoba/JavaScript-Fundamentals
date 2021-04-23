'use strict';

//------------------FUNCTIONS---------------------------------

function logger() {
    console.log(`My name is Katleho`);
}

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;


    return juice;
}
//CALLING FUNCTION 
logger();
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);



//-------------FUNCTION DECLARATION
//note you can call a function declaration before defining functio but you cant on function expression
function calcAge(birthYear){
    return 2021 - birthYear;
}
const age1 = calcAge(1996); 


//-------------FUNCTION EXPRESSION


const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

//---------------FUNCTION ARROW FUNCTION

const calcAge3 = (birthYear) => 2037 -birthYear;
const age3 = calcAge3(1991);

const yearsUntilRetirement = (birthYear) => {
    const retirementAge = 65;
    const age = 2037 - birthYear;
    const yearsLeft = retirementAge - age;
    return yearsLeft;
}


console.log(age1, age2,age3, yearsUntilRetirement(1991));


//-----------------------------FUNCTION CALLING FUNCTION----------------------------


function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor2(apples, oranges){
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;


    return juice;
}


console.log(fruitProcessor2(2,3));



//------------------------------------------TESTING

function calcAge(birthYear){
    const age = 2021 - birthYear;
    return age;
}


const yearsUntilRetirement =  (firstName) => {
    const retirementAge = 20;
    const yearsLeft = retirementAge - calcAge(1996);

    if(yearsLeft > 0){

        console.log(`${firstName} has ${yearsLeft} years left till he/she can retire😔`);
        return yearsLeft;
    }

    console.log(`${firstName} has already retired😋`)
    return -1;
}

yearsUntilRetirement('Katleho');