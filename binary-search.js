function sort_array(data, ele) {
    let start = 0;
    let end = data.length - 1;
    let middle = Math.floor((start + end) / 2);
    console.log(start, middle, end)
    while(ele !== data[middle] && start <= end) {
        if (ele < data[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor( (start + end) / 2)
        console.log(start, middle, end)
    }
    return data[middle] === ele ? middle : -1;
}

console.log(sort_array([1,2,3,4,5], 5))

// 1,2,3,4,5
// S   M   E

// 1,2,3,4,5
//       SME