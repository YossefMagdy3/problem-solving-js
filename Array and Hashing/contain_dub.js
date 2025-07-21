// https://leetcode.com/problems/contains-duplicate/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//we will use hashing
//when we see a number put it in an array of that index with value 1, and for subsequent elements, if the element at current index exists in the hashmap, then return true
const containsDuplicate = function (nums) {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (map.get(nums[index])) {
      return true;
    }
    map.set(nums[index], 1);
  }
  return false;
};
nums = [1, 2, 3, 1];
const containsDuplicate2 = function (nums) {
  const mySet = new Set();
  for (let index = 0; index < nums.length; index++) {
    mySet.add(nums[index]);
  }
  const bool = nums.length === mySet.size ? false : true;
  return bool;
};
nums = [1, 2, 3, 1];

const val = containsDuplicate(nums);
console.log(val);
