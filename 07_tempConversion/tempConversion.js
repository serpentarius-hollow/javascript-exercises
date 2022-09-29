const ftoc = function(arg) {
  let result =  (arg - 32) * 5/9;
  let rounded = Math.round(result * 10) / 10;

  return rounded;
};

const ctof = function(arg) {
  let result =  (arg * 9 / 5) + 32;
  let rounded = Math.round(result * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
