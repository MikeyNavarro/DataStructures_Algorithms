// write a function that finds a smaller string in a larger string and add a count for how many times it appers

// Example: string GHOMGDJOMG finds the string "OMG" twice and returns the count of 2

function naivStr(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      } else {
        if (j === short.length - 1) {
          count += 1;
        }
      }
    }
  }
  return count;
}

let test = naivStr("lorie loled lol lol", "lol");
console.log(test);
