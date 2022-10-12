// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

let test = power(3, 4);
console.log(test);

// 2 * power(2, 3) 2 * 8 = 16
// 2 * power(2, 2) 2 * 4 = 8
// 2 * power(2,1) = 2 * 2 = 4
// 2 * power()    = 2 * 1 = 2
