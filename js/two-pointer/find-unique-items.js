function findUniqueItems(list = []) {
  //check if input has lenght
  if(!list.length) return false

  //check the item with next item
  let slow = 0;
  for(let fast = 1; fast < list.length; fast++) {
    if (list[slow] !== list[fast]) {
      slow += 1;
      list[slow] = list[fast]
    }
  }
  return slow + 1;
}

const input_list = [0,1,1,2,2,3,3,4,4,5,5] 
console.log(findUniqueItems(input_list))