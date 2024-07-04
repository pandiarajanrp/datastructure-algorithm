def removeDuplicates(nums: "List[int]") -> int:
  if not nums:
      return 0
  slow = 0
  for fast in range(1, len(nums)):
      # print(fast)
      # if current element is not duplicate,
      # slow runner grows one step and copys the current value
      print(f"comparing {nums[slow]} with {nums[fast]}")
      if nums[slow] != nums[fast]:
          slow += 1
          nums[slow] = nums[fast]
  return slow + 1

#               s   f
input_list = [0,1,1,2,2,3,3,4,4,5,5]
print(input_list)
print(removeDuplicates(input_list))