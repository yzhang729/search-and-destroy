'use strict';

// Complete this algo
const binarySearch = (array, target) => {
  //if array length is 1, return true or false depending on value
  //find midpoint of array
  //if midpoint matches target, return true
  //else compare target to midpoint
  //recursively perform binarySearch on left/right subarray
  if (array.length === 1) {
    return array[0] === target;
  }

  let midpoint = Math.floor(array.length / 2);
  if (array[midpoint] === target) {
    return true;
  } else if (array[midpoint] > target) {
    const leftArray = array.slice(0, midpoint);
    return binarySearch(leftArray, target);
  } else {
    const rightArray = array.slice(midpoint);
    return binarySearch(rightArray, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
