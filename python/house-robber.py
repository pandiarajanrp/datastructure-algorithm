def rob(nums):
    last, now = 0, 0
    for i in nums:
        last, now = now, max(last + i, now)
        print(last, now)
    return now


print(rob([2,7,9,3,1]))