'use strict';

// Complete this algo
const binarySearch = (array, target, head = 0, tail = array.length - 1) => {
  //if array length is 1, return true or false depending on value
  //find midpoint of array
  //if midpoint matches target, return true
  //else compare target to midpoint
  //recursively perform binarySearch on left/right subarray
  if (tail - head === 0) {
    return array[head] === target;
  }

  let midpoint = Math.floor((tail + 1 - head) / 2) - 1;
  if (array[midpoint] === target) {
    return true;
  } else if (array[midpoint] > target) {
    //const leftArray = array.slice(0, midpoint);
    return binarySearch(array, target, head, midpoint - 1);
  } else {
    //const rightArray = array.slice(midpoint);
    return binarySearch(array, target, midpoint + 1);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
