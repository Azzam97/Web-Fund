function alwaysHungry(arr) {
  var count = 0;
  for (var digit = 0; digit < arr.length; digit++) {
    if (arr[digit] == "food") {
      count++;
    }
  }
  if (count > 0) {
    for (var print = 0; print < count; print++) {
      console.log("yummy");
    }
  } else {
    console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
