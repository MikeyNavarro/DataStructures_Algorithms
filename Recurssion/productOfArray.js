function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  const [head, ...tail] = arr;

  return head * productOfArray(tail);
}

let test = productOfArray(3, 2, 5);
console.log(test);
