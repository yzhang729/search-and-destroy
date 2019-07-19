'use strict';

// Complete this algo
const minJumps = arr => {
  //start at first element
  //look for largest element within range
  //iterate until you reach end
  let jumpCount = 0;
  let i = 0;
  while (i < arr.length) {
    let currentArr = arr.slice(i + 1, i + arr[i] + 1);
    let maxValue = currentArr.reduce((a, b) => (a < b ? b : a));
    if (i + arr[i] >= arr.length - 1) {
      jumpCount++;
      return jumpCount;
    }
    if (i + maxValue >= arr.length - 1) {
      jumpCount += 2;
      return jumpCount;
    }
    let maxValueIndex = arr.indexOf(maxValue);
    i = maxValueIndex;
    jumpCount++;
  }
};

module.exports = minJumps;
