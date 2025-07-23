# Two Sum

## Problem Link
[LeetCode - Two Sum](https://leetcode.com/problems/two-sum/description/)

---

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Approach: Hashmap Solution

### Short Explanation:

>**NOTE**: if `a+b = target`, then `a` and `b` are **complements** to each other.
>(i.e if `target - b = a`, we say, `a` is the complement of `b`)

We loop through the array and do:

1. when we meet a number we get it's complement, then lookup in a hashmap if we found this complement before.
2. If we didn't see the complement before, then we store the current number with it's index in the hashmap. 
3. If we saw the complement before, then we saw the 2 numbers (**`a pair`**) and the indices of the pair are returned.
>We lookup and store in a hashmap where: (key, value) --> (element, index)

### Detailed Explanation:

We loop on the array of numbers, and for each number we wanna know if its **pair** exists.

#### What's a pair? 

> if `a+b = traget`, then `a` and `b` are **pairs** (or complements)
> so if we are at 'a' we look for its pair, which is 'b'.

>If `a+b = target`, then `a` and `b` are complement to each other.
>(i.e if `target - b = a`, we say, `a` is the complement of `b`)

### Steps of thinking:

#### 🪜 Step 1: Naive idea (O(n²))
- In any iteration of the loop, we have `a`, then how do we look for its `pair`?: we can do another inner loop for the rest of the elements `b` in the array and compare as follows:
  - compute: `(a+b)` and compare result with target, if `result === target` then we found the `pair (a,b)` and return the indices (outer and inner loop counters).
    
    ****or**
    
  - pre-compute: `(c = target - a)` and compare each element `b` in the inner loop with `c`, if `b === c` then we found the `pair (a,b)`, and return the indices
      
    >****This way of comparison is important for the rest of the explanation****
  
    **Inner Loop is a bad approach because it is slow O(n^2), but will get u the answer correctly.**
  
#### 🪜 Step 2: Optimized approach using a Hashmap (O(n))

We can use the second way of comparison to find the better/faster solution.
   
1. We will use a hashmap, we will store in it: (key, value) --> (element in the array, index).
   that's it, that's the solution :D, but how does it work?, how will this hashmap help?....

2. We will loop the array but only once (no inner loops :D). and for each element `a` we calculate the value:
   
    `c = target - a (c is the complement of a).`
   
   then we look in the hashmap, does `c` exists in the hashmap?
   - If it doesnt exist in the hashmap then no pair yet. ( we have seen `a` but didn't see the complement before, so we don't have the `pair` yet), then we store `a` in the hashmap.
     - Why do we store `a` not `c` in the hashmap?: because we know for sure that `a` exists in the array not `c`, so we store `a`, and when we continue in the array we will have like a `memory` of what numbers we have seen so far in the array, and this `a` might be a part of pair in the future ( look in next line)
     
   - If it does exist in the hashmap, then we have our pair [a,c] and we return the indices (where are they?, see last point)
     - why we have the pair?: it means we are in a position in the array of nums where the complement of the current element was seen before in the array number because it exists in the hashmap. Now we have two numbers adding up to the target a+c= target, we got the pair, yaaaay💃.
      
3. In this solution we will loop the array only once, and in every element we will do a hashmap lookup.
   
4. A hashmap has `key` and `value`, the `key` is obviously each element, then what is the `value`?
   - the `value` will be the index of the element, why?----> we need the indices because the return value in this problem are the indices of the pair.
   - so when we find the pair the indices will be:
     
         [1st pair index, 2nd pair index] --> [value in the hashmap, i (current index)] 




