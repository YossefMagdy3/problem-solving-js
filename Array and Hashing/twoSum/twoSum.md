# Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Approach: Hashmap Solution

### Idea

We iterate through the array and for each element, we calculate its **complement**:  
`complement = target - current_number`.

Then we check if this complement exists in a hashmap. If it does, we return the indices of the current number and its complement.

### Why this works:

If two numbers `a` and `b` satisfy `a + b = target`, then for any number `a`, `b = target - a`.

### Steps:

1. Loop through the array once.
2. For every number `a` at index `i`, compute the complement `c = target - a`.
3. Look up `c` in the hashmap.
   - If found → we found the pair: return `[hashmap[c], i]`.
   - If not found → store `a` with its index `i` in the hashmap for future reference.

This way we check each number only once and look up in the hashmap in constant time.

### Time and Space Complexity

- **Time Complexity:** `O(n)` – One pass through the array.
- **Space Complexity:** `O(n)` – In the worst case, we may store all elements in the hashmap.

### Code

```js
const twoSum = function (nums, target) {
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashTable.has(complement)) {
      return [hashTable.get(complement), i];
    }
    hashTable.set(nums[i], i);
  }
};
```
