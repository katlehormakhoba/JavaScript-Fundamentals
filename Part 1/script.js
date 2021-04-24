'use strict';


//LOOPS

const jonas = {
    firstName: 'Katleho',
    lastName: 'Makhoba',
    birthYear: 1996,
    job: 'Software Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //OBJECT METHODS
    calcAge: function (birthYear) {
        console.log(this);
        return 2021 - birthYear;
    },
    calcAge2: function () {
        return 2021 - this.birthYear;
    }
};

const katleho = ['Katleho',
    'Makhoba',
    1996, 'Software Developer',
    ['Michael', 'Peter', 'Steven']
];




//FOR LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
// }



//WHILE LOOP



let dice = Math.trunc(Math.random() * 6)+ 1; // random number
while(dice !== 6){
    console.log('You rolled', dice);
    
 dice = Math.trunc(Math.random() * 6)+ 1;
}
// console.log('dice',dice);