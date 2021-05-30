'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 10 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  bookings.push(booking);

  return bookings;
};

console.log(createBooking('hello', 2, 15));

// let sum = 0;
// for (let x = 101; x <= 140; x++) {
//   sum = sum + x;
//   console.log(`When x is : ${x} sum is : ${sum}`);
// }

console.log(typeof 1.1);
class ALG_GRD_002a {
  constructor(a, b, q) {
    this.a = a;
    this.b = b;
    this.q = q;
    this.sum = 0;
    
  }

  getSum = () => {
    // 1 <= a< b;(b–a + 1)must be divisible by q(to ensure that every batch of numbers fits perfectly)
    const devisable = ((this.b - this.a + 1) / this.q) % 1;
    if (this.a >= 1 && this.a < this.b && devisable === 0) {
       
        console.log(`Validation succsessfull here is your answer`);
        for (let x = this.a; x <= this.b; x++) {
          
          this.sum = this.sum + x;
          //   console.log(`When x is : ${x} sum is : ${this.sum}`);
        }
        console.log(`Sum from ${this.a} to ${this.b}: ${this.sum}`);
     
    }
    else console.log(`Ooops please check your input`);
  };
}

new ALG_GRD_002a(101, 140, 40).getSum();
new ALG_GRD_002a(141, 180, 40).getSum();
new ALG_GRD_002a(181, 220, 40).getSum();
new ALG_GRD_002a(101, 500, 40).getSum();
