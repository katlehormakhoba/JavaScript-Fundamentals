'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const properties = Object.keys(restaurant);
// // console.log(properties);

// for(const [i,open, close] of Object.entries(restaurant.openingHours)){
//   console.log(`On ${i} we open from ${open} to ${close}`)
// }

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.length);
console.log(airline.indexOf('r'));

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const chechMiddleSeat = seat => {
  //b and e are middle seats

  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E')
    console.log(`You got the middle seat 🤣🤣`);
  else console.log(`You got Lucky`);
};

chechMiddleSeat(`11B`);
chechMiddleSeat(`23C`);
chechMiddleSeat(`3E`);

console.log(airline.toUpperCase());

const passenger = 'jOnAs';
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();

const anouncement =
  'All passengers come to the boarding door 23. boarding door 23';

console.log(anouncement.replace('door', 'gate'));
console.log(anouncement.replaceAll('door', 'gate'));
console.log(passengerCorrect);

//-----------------------------Distructuring array
// const arr = [2,3,4];

// const [x,y,z] = arr;

// console.log(x,y,z);

// let [main, ,second] = restaurant.categories;

// console.log(main,second);

// [main,second] = [second, main]

// console.log(main,second);

//-----------------------------Distructuring OBJECT

// const {name, openingHours, categories} = restaurant;

// console.log(name, openingHours, categories);

// const arr = [7,8,9];
// const newArr = [1,2].concat(arr);
// const secNewArr = [1,2,...arr];

// console.log(newArr);

// console.log(secNewArr);

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu)

// const add = function(...numbers){
//   console.log(numbers);
// }

// add(2,3,4,5,6)

// let main = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
// ];
// let first = [];
// let middle = [];
// let last = [];

// console.log(main);

// // const displayPictures = ()=>{
// //   for(let x=0 ; x<main.length; x++){
// // console.log()
// //   }

// // }
// const sortPictures = pick => {
//   let looper = 0;
//   for (let x = 0; x < main.length / 3; x++) {
//     first[x] = main[looper];
//     looper++;

//     middle[x] = main[looper];
//     looper++;

//     last[x] = main[looper];
//     looper++;
//   }

//   if (pick == 1) main = [...middle, ...first, ...last];

//   if (pick == 2) main = [...last, ...middle, ...first];

//   if (pick == 3) main = [...first, ...last, ...middle];
// };

// sortPictures(3);
// console.log(main);
