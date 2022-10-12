//  Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }

  return num + recursiveRange(num - 1);
}

let test = recursiveRange(6);
console.log(test);

/* 

num = 6

num + recursiveRange(num - 1);

6 + 15 = 21
5 + 10 = 15
4 + 6 = 10
3 + 3 = 6
2 +1 = 3
1 + 0 = 1
0 = 0


*/
