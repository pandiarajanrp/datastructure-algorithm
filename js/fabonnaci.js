function fib(n){
  let arr = [0, 1];
  for (let i = 2; i <= n; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
  console.log(arr)
  return arr[n]
}

console.log(fib(10))
