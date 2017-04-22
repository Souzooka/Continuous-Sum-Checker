/*jshint esversion:6*/
function sumChecker(arr, num) {
  let sumStartIndex = 0;
  let sumTally = 0;

  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j >= 0; --j) {
      sumTally += arr[j];
      if (sumTally === num) {
        return true;
      }
      else if (sumTally > num) {
        break;
      }
    }
    sumTally = 0;
  }
  return false;
}

module.exports = sumChecker;