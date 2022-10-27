/* find the two sums of an array given a target 

array = [ 3, 5, -4, -8, 11, 1, -1 ,6] , target Sum 10 
output [11, -1] */

function twoNumberSum(array, targetSum) {
  // nums is a hashmap represented as an object
  const nums = {};
  // for every num OF meaning INCLUDED in our array
  for (const num of array) {
    const potentialMatch = targetSum - num;
    // if our porential match is in our hash table then return our potential match and num
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      // If not add to our hash table our number
      nums[num] = true;
    }
  }
  // no number in our hashtable that adds to target sum
  return [];
}

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}
