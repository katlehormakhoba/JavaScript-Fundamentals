'use strict';


//OBJECT

const jonas = {
    firstName: 'Katleho',
    lastName: 'Makhoba',
    birthYear: 1996,
    job: 'Software Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //OBJECT METHODS
    calcAge: function (birthYear){
        console.log(this);
        return 2021 - birthYear;
    },
    calcAge2: function (){
        return 2021 - this.birthYear;
    }
};

console.log(jonas.calcAge2());
console.log(jonas['calcAge'](1998));

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas[`first${nameKey}`]);
console.log(jonas['last'+nameKey]);

let employed = true ? 'has job' : 'no job'; //ternary operator
console.log(true ? 'has job' : 'no job');
console.log(typeof(employed))
// const interestedIn = prompt(`What do you want to know about Katleho ? 
//                     Choose between firstName, lastName, job, age`);

// console.log(jonas[interestedIn]);

// const numFriends = jonas.friends.length;
// const userName = jonas.firstName;
// const bestFriend = jonas.friends[0]; 

// console.log(`${userName} has ${numFriends} friends, and his best friend is called ${bestFriend}`);