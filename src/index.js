module.exports = function maxSubsNoDups(str) {
  let max = 0, i = 0, j = 0;
  let substr = [];
  str = str.split('');
  while (j < str.length) {
    const char = str[j];
    if (substr.indexOf(char) === -1) {
      substr.push(char);
      j++;
    } else {
      max = Math.max(max, substr.length);
      i += substr.splice(0, substr.indexOf(char) + 1).length;
    }
  };

  max = Math.max(max, substr.length);
  return max;
}
