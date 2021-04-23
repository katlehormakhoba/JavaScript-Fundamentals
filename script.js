'use strict';


//OBJECT

const jonas = {
    firstName: 'Katleho',
    lastName: 'Makhoba',
    age: 2021-1996,
    job: 'Software Developer',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas[`first${nameKey}`]);
console.log(jonas['last'+nameKey]);


const interestedIn = prompt(`What do you want to know about Katleho ? 
                    Choose between firstName, lastName, job, age`);

console.log(jonas[interestedIn]);