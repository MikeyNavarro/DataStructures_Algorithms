// return true or false if second array is a subsequence of the first Array

// [4,1,22,25,6,-1,8,10]
// [1,6,-1,10]
// output = true

function isValidSubsequence(arr, sequence) {
  let arrPointer = 0;
  let sequencePointer = 0;

  while (arrPointer < arr.length && sequencePointer < sequence.length) {
    if (arr[arrPointer] === sequence[sequencePointer]) {
      sequencePointer += 1;
    }
    arrPointer += 1;
  }
  if (sequencePointer === sequence.length) {
    return true;
  }
}

let test = isValidSubsequence([4, 1, 22, 25, 6, -1, 8, 10], [0, 6, -1, 10]);
console.log(test);
