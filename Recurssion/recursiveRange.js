function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }

  return num + recursiveRange(num - 1);
}

let test = recursiveRange(6);
console.log(test);
