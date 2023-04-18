var high = [24, 27, 21, 26];
var low = [18, 19, 16, 21];
var scale = 1;
function message(element) {
  alert("Loading weather report");
}
function remove() {
  var coockie = document.querySelector("#footer");
  coockie.remove();
}
function changeScale(element) {
  if (scale == 1){
    scale = 2;
  }
  else {
    scale = 1;
  }
  if (scale == 2){
  var newHigh = document.querySelectorAll(".high");
  var newLow = document.querySelectorAll(".low");
  for (var i = 0; i < 4; i++) {
    high[i] = high[i] * (9 / 5) + 32;
    high[i] = Math.round(high[i]);
    newHigh[i].innerText = high[i];
    low[i] = low[i] * (9 / 5) + 32;
    low[i] = Math.round(low[i]);
    newLow[i].innerText = low[i];
  }
  }
  else{
  var newHigh = document.querySelectorAll(".high");
  var newLow = document.querySelectorAll(".low");
  for (var i = 0; i < 4; i++) {
    high[i] = (high[i]-32) * (5 / 9);
    high[i] = Math.round(high[i]);
    newHigh[i].innerText = high[i];
    low[i] = (low[i]-32) * (5 / 9);
    low[i] = Math.round(low[i]);
    newLow[i].innerText = low[i];
  }
  }
}
