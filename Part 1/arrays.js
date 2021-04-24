'use strict';


// ARRAY




const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1992, 1983, 1985);

//ADDING ELEMENTS ON ARRAY
console.log(friends.push('Jay')); // last
console.log(friends.unshift('John')); // first

console.log(friends);

//REMOVING ELEMENTS ON ARRAY
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.indexOf('Bob'));


console.log(friends.includes('Bob'));
console.log(friends.includes('Steven'));