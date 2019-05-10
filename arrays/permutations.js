// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
//
// Examples:
//
// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

const permutations = (string) => {
  var results = [];

  if (string.length === 1) {
    results.push(string);
  }

  for (var i = 0; i < string.length; i++) {
    var firstchar = string[i];

    if (string.indexOf(firstchar) !== i) {
      continue;
    }

    var otherchars = string.slice(0, i) + string.slice(i + 1);
    var innerPerms = permutations(otherchars);

    for (var j = 0; j < innerPerms.length; j++) {
      results.push(firstchar + innerPerms[j]);
    }
  }
  
  return results;
}
