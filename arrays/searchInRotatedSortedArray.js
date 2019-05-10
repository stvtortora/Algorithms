// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

var search = (nums, target) => {
  if(!nums.length){ return -1 };

  const midIdx = Math.floor(nums.length / 2);
  const midVal = nums[midIdx];
  const leftSide = nums.slice(0, midIdx);
  const rightSide = nums.slice(midIdx + 1);
  let leftAns = null;
  let righAns = null;

  if(midVal === target){
      return midIdx;
  }

  if((target < midVal && ((nums[midIdx - 1] === undefined) || nums[midIdx - 1] <= midVal))|| target > midVal){
       leftAns = search(leftSide, target)
  }

  if((target > midVal && ((nums[midIdx + 1] === undefined) || nums[midIdx + 1] >= midVal)) || target < midVal){
      rightAns = search(rightSide, target);
  }

  if(leftAns !== null && leftAns > -1){
    return leftAns;
  }

  if(rightAns === null || rightAns === -1){
    return -1 ;
  }

  return rightAns + midIdx + 1;
};
