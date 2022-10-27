// Write a function that returns the squared array

function sortedSquaredArray(array) {
  let squared = [];
  array.sort((a, b) => a - b);

  for (let num of array) {
    squared.push(num * num);
  }
  return squared;
}

let test = sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]);
console.log(test);
