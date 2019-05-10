// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.
//
// Example 1:
//
// Input: [3,4,5,1,2]
// Output: 1
// Example 2:
//
// Input: [4,5,6,7,0,1,2]
// Output: 0

const findMin = (nums) => {
    const helper = (nums) => {
        if (nums.length <= 1) {
            return null;
        }

        const midIdx = Math.floor(nums.length / 2);
        const midEl = nums[midIdx];
        const oneBefore = nums[midIdx - 1];
        const oneAfter = nums[midIdx + 1];

        if (typeof oneAfter !== 'undefined' && oneAfter < midEl) {
            return oneAfter;
        }
        
        if (typeof oneBefore !== 'undefined' && oneBefore > midEl) {
            return midEl;
        }

        const checkLeft = helper(nums.slice(0, midIdx));
        const checkRight = helper(nums.slice(midIdx + 1));
        return checkLeft !== null ? checkLeft : checkRight;
    }

    const ans = helper(nums);
    return ans !== null ? ans : nums[0];
};
