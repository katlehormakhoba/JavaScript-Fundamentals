// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = `23`;

const im = 2;

const calcAge = (birthYear) => 2021 - birthYear;

// console.log(23);

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calctTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];


  for (let x = 0; x < temp.length; x++) {
    const curTemp = temp[x];

    // if (temp[x] > max) max = temp[x];
    max = curTemp > max ? (max = curTemp) : (max = max);
    min = curTemp < min ? (min = curTemp) : (min = min);
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calctTempAmplitude(temperatures);


//merge arrays


var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children);


const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:'))
    }

    const kelvin = (measurement.value) + 273;
    return kelvin;
};

console.log(measureKelvin());