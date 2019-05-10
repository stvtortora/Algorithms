// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParenthesis = function(n) {
    return findCombos(n, n, '');
};

const findCombos = (openRem, closeRem, str) => {
    if(openRem === 0 && closeRem === 0){
        return [str];
    }

    let result = [];

    if(openRem < closeRem) {
        result = result.concat(findCombos(openRem, closeRem - 1, str + ')'));
    }
    if(openRem > 0){
        result = result.concat(findCombos(openRem - 1, closeRem, str + '('));
    }
    return result;
}
