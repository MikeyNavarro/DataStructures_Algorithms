// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1

function binarySearch(arr, target) {
  let startRunner = 0;
  let endRunner = arr.length - 1;
  let middleRunner = math.floor(endRunner / 2);

  while (middleRunner !== target) {
    if (middleRunner < target) {
      startRunner = middleRunner + 1;
    }
  }
}

// 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ---- 8
