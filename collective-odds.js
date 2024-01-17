function collectodds(nums) {
    const odds = [];
    function helper(idx) {
        if (nums[idx] === undefined) return null;
        //console.log('idx', idx)
        if (nums[idx] % 2 === 1) {
            odds.push(nums[idx])
        }
        //console.log('odds', odds)
        helper(idx + 1)
    }
    helper(0);
    return odds;
}

console.log(collectodds([1, 4, 10, 0, 11, 34,35,67,87, 91]))