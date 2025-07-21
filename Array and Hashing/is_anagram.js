// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//1st solution: hashmap idea
//we take each string and count each letter appeared how many times ( called frequency array )
/*ex: "anagram":
a-->3
n-->1
g-->1
r-->1
m-->1
*/
//then we take the other string and do the same array
/*ex: "nagaram":
n-->1
a-->3
g-->1
r-->1
m-->1
*/
// now we have two frequency arrays, we compare the both, if both have the same letters with the same count, then they are anagrams, if not, then......

const isAnagram = function (s, t) {
  //if there is no string in either input, not anagrams obv, duh...
  if (!s || !t) {
    return false;
  }

  //if they are not the same length, guess what :D
  if (s.length !== t.length) {
    return false;
  }

  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    // mapS.get(s.charAt(i))?
    const char = s.charAt(i);
    mapS.has(char) ? mapS.set(char, mapS.get(char) + 1) : mapS.set(char, 1);
  }
  for (let i = 0; i < t.length; i++) {
    // mapT.get(s.charAt(i))?
    const char = t.charAt(i);
    mapT.has(char) ? mapT.set(char, mapT.get(char) + 1) : mapT.set(char, 1);
  }
  for (const [key, value] of mapS) {
    if (mapT.get(key) !== value) {
      return false;
    }
  }
  return true;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//2nd solution: only works with small english letters, needs adjust for otherwise
//look down for exaplanation
const isAnagram2 = function (s, t) {
  //if there is no string in either input, not anagrams obv, duh...
  if (!s || !t) {
    return false;
  }
  //if they are not the same length, guess what :D
  if (s.length !== t.length) {
    return false;
  }
  const count = Array(26).fill(0);
  //this array is the letter array of the english alphapet (26 chars)
  //all initialized with ZERO count
  /*NOTE (IMP!!): in ASCII we know that:
    a-->97
    b-->98
    c-->99
    .......
    so to access the letters in an array that is Zero indexed we (-97) so:
    a-->0
    b-->1
    c-->2
    ......
    WE will use this idea in the solution
  */

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
    //idea?: initially all letters have count ZERO
    // when we find a letter in string s, we increment and
    // when we find a letter in string t, we decrement
    // so if both have the same count of a letter, for example both have 2 a, the the letter 'a' will gget +2 and -2, so its final value will be ZERO, same initial value
    //when we done, check the values of the array, if all is ZERO, then it is an anagram, same letters, same frequency, is any of the array is not ZERO, then a string has a letter more or less than the other onee
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) return false;
  }

  return true;
};
