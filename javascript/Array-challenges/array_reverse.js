function reverse(arr) {
  // your code here
  var temp = 0;
  var n = arr.length;
  for (var i = 0, j = n; i < n && j >= n / 2; i++, j--) {
    if (arr[i] == arr[j - 1]) {
      break;
    } else {
      temp = arr[i];
      arr[i] = arr[j - 1];
      arr[j - 1] = temp;
    }
  }
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
