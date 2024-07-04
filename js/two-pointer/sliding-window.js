function maxSubArraySum(arr, num) {
  let max = arr.slice(0, 3).reduce((prev, el) => prev + el, 0);
  for(i = num; i < arr.length; i++) {
    const iterMax = max - arr[i - num] + arr[i];
    max = Math.max(max, iterMax);
  }
  return max;
}

maxSubArraySum([1,3,2,4,6,5,7,8,9,23,4,53,56,78], 3)