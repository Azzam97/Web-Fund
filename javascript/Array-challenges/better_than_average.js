function betterThanAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    // calculate the average
    sum += arr[i];
  }
  sum /= arr.length;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    // count how many values are greated than the average
    if (arr[i] > sum) {
      count++;
    }
  }
  return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
