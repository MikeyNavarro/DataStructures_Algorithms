//  Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

test = factorial(4);
console.log(test);

/* when num = 4

return num * factorial (num -1)

return 4 * factorial(4 -1) = 24
return 3 * factorial(3 -1) = 6
return 2 * factorial(2 -1) = 2
return 1 * factorial(1-1) = 1
return 1

*/
