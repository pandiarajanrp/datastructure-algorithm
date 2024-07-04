var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  while( left < right  ){
      if ( numbers[ left ] + numbers[ right ] == target ){
          return [ left+1 , right+1 ];
      } else if(  numbers[ left ] + numbers[ right ] > target ){
          right--;
      } else {
          left++;
      }
  }
  return []
};

console.log(twoSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,171,18,19,20], 25))