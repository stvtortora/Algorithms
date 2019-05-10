// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// Example 1:
//
// Given nums = [1,1,1,2,2,3],
//
// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
//
// It doesn't matter what you leave beyond the returned length.
// Example 2:
//
// Given nums = [0,0,1,1,1,1,2,3,3],
//
// Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
//
// It doesn't matter what values are set beyond the returned length.

const removeDuplicates = (nums) => {
  if(nums.length <= 2) {
    return nums.length;
  }

  let streak = 1;
  let prev = nums[0];
  let i = 1;

  while (i < nums.length) {
     if(nums[i] === prev) {
        if (streak >= 2) {
          nums.splice(i, 1);
        } else {
          i++;
        }
      streak++;
    } else {
      prev = nums[i];
      streak = 1;
      i++;
    }
  }

  return nums.length;
};
