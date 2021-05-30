'use strict';

// class ALG_GRD_002a {
//   constructor(a, b, q) {
//     this.a = a;
//     this.b = b;
//     this.q = q;
//     this.sum = 0;

//   }

//   getSum = () => {
//     // 1 <= a< b;(b–a + 1)must be divisible by q(to ensure that every batch of numbers fits perfectly)
//     const devisable = ((this.b - this.a + 1) / this.q) % 1;
//     if (this.a >= 1 && this.a < this.b && devisable === 0) {

//         console.log(`Validation succsessfull here is your answer`);
//         for (let x = this.a; x <= this.b; x++) {

//           this.sum = this.sum + x;
//           //   console.log(`When x is : ${x} sum is : ${this.sum}`);
//         }
//         console.log(`Sum from ${this.a} to ${this.b}: ${this.sum}`);

//     }
//     else console.log(`Ooops please check your input`);
//   };
// }

// new ALG_GRD_002a(101, 140, 40).getSum();
// new ALG_GRD_002a(141, 180, 40).getSum();
// new ALG_GRD_002a(181, 220, 40).getSum();
// new ALG_GRD_002a(101, 500, 40).getSum();

// let num = 16;
// for (let x = 1; x <= 16; x++) {
//   let deviasableThree = x % 3;
//   let deviasableFive = x % 5;
  
//   if (deviasableThree === 0 && deviasableFive === 0) {
//     num = num + 'FizzBuzz ';
    
//   } else if (deviasableThree === 0) {
//     num = num + 'Fizz ';
//   } else if (deviasableFive === 0) {
//     num = num + 'Buzz ';
//   } else{
//     num = num + String(x)+' ';
//   } 
//   console.log(x,'this is x')
// }


const solveArr = (arr)=>{
  let startMe = arr.indexOf(1);
  let LastEnemy = arr.lastIndexOf(2);
  let firstEnemy = arr.indexOf(2);
  console.log(startMe, LastEnemy, firstEnemy);
  if(startMe < LastEnemy) console.log(`this is the correct answer: ${startMe - LastEnemy}`);
  else console.log(`this is the correct answer: ${firstEnemy}`);
}
solveArr([1,0,0,0,2,2,2]);
solveArr([2, 0, 0, 0, 2, 2, 1, 0])



function closestToZero(numbers)
{
    if (numbers.length === 0) return 0;
    
    let closest = numbers[0];

    for(let i = 0; i < numbers.length;i++){
        let number = numbers[i];
        let absNumber =  Math.abs(number);
        let absClosest = Math.abs(closest);

        if (absNumber < absClosest) 
        {
            closest = number;
        } 
        else if (absNumber === absClosest && closest < 0) 
        {
            closest = number;
        }
    }

    return closest;
}