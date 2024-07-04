const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (another in map) {
      return [map[another], i];
    }
    map[nums[i]] = i;
  }

  return null;
};

const nums = [2, 11, 15, 8, 6, 10, 7];
const target = 9;

console.log(twoSum(nums, target))