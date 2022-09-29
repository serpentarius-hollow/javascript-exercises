const reverseString = function(string) {
  const splitted = string.split('');
  const reversed = splitted.reverse();
  return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
