// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.
//
// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.
//
// Return any permutation of T (as a string) that satisfies this property.
//
// Example :
// Input:
// S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation:
// "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
//
//
// Note:
//
// S has length at most 26, and no character is repeated in S.
// T has length at most 200.
// S and T consist of lowercase letters only.

const customSortString = (S, T) => {
  const customMerge = (left, right, idx) => {
    let merged = '';

    while (left.length && right.length) {
      if (idx[left[0]] < idx[right[0]]) {
        merged += left[0];
        left = left.slice(1);
      } else {
        merged += right[0];
        right = right.slice(1);
      }
    }

    return merged + left + right;
  }

  const mergeSort = (str, idx) => {
    if (str.length <= 1) {
      return str;
    }

    const mid = Math.floor(str.length / 2);
    const left = mergeSort(str.slice(0, mid), idx);
    const right = mergeSort(str.slice(mid), idx);

    return customMerge(left, right, idx);
  }

  const sIdx = {};

  for (let i = 0; i < S.length; i++) {
    sIdx[S[i]] = i;
  }

  let inS = '';
  let others = '';

  for (let j = 0; j < T.length; j++) {
    let letter = T[j];
    if (typeof sIdx[letter] !== 'undefined') {
      inS += letter;
    } else {
      others += letter;
    }
  }

  return mergeSort(inS, sIdx) + others;
};
