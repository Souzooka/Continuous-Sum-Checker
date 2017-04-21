/*jshint esversion:6*/
function sumChecker(arr, num) {
  let sumStartIndex = 0;
  let sumTally = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > arr[i-1]) {
      for (let j = i; j >= 0; --j) {
        sumTally += arr[j];
        if (arr[j] < arr[j-1]) {
          break;
        }
      }
      if (sumTally === num) {
        return true;
      }
      sumTally = sumTally ^ sumTally;
    }
    else if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

module.exports = sumChecker;