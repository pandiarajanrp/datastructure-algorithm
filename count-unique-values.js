function countUniqueValue(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValue([1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9])