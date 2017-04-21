/*jshint*/
function sumChecker(arr, num) {
  let sumStartIndex = 0;
  let sumTally = 0;
  const sumsArr = [];

  for (let i = 0; i < arr.length; ++i) {
    sumsArr.push(arr[i]);
    if (arr[i] > arr[i-1]) {
      for (let j = i; j >= 0; --j) {
        sumTally += arr[j];
        if (arr[j] < arr[j-1]) {
          break;
        }
      }
      sumsArr.push(sumTally);
      sumTally = sumTally ^ sumTally;
    }
  }
  console.log(sumsArr);

  return sumsArr.indexOf(num) > -1;
}

module.exports = sumChecker;