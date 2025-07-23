/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  // Hashmap solution
  //short explanation: when i see a number i get his complement, then lookup if i found this complement before, if i saw it, then i saw the 2 numbers and the indices are returned, if i didnt see it then store the current number with its index

  //better explanation: we loop on the array of numbers, and for every number we wanna know if its pair exists ( what's a pair? : a+b = traget, a and b are pairs so if we are at 'a' we look for its pair, that is 'b')
  /* 1) now we have a, how do we look for the pair?: we can loop for the rest of the elements in the array and do:
    (a+b) and compare with target 
    ****or 
    (c = target - a) and compare every element with 'c', if we get a match then we found 'b'  
    "keep this way in mind we will use it later"
    looping is bad approach because it is slow O(n^2), but will get u the answer*/

  /* 2) we can use the second way of comparison to find the better/faster solution.
  we will also have a hash map and we will store in it the number and its index, that's it :D, but how does this solution work?---->
  we will loop the array but only once and for every elment 'a' we calculate the value 
  c = target - a (c is called the complement of a)
  and look in the hashmap, does 'c' exists there? if it does then we have our pair [a,c]
  if it doesnt exist in the hashmap then no pair yet. then what will we store in the hashmap now?--->
  we store 'a' not 'c', because i know for sure that 'a' exists in the array not 'c' so we store 'a' because it might be part of a pair in the future.

  in this solution we will loop the array only once, and in every element we will do a hashmap lookup
  */
  /* 3) last point: a hashmap has key and value, the key is obviously the each element, then what is the value?
 the value will be the index of the element, why?----> because the return in this problem are the indices of the pair 
 so when we find the pair the indices will be:
 [1st pair index, 2nd pair index] --> [value in the hashmap, i (current index)] 
 */
  const hashTable = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashTable.has(complement)) {
      return [hashTable.get(complement), i];
    }
    hashTable.set(nums[i], i);
  }
};
