function findMe(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let names = ["mikey", "ben", "jake", "carlos"];

let test = findMe(names, "mikey");

console.log(test);
