const sumAll = function(start, end) {
  let total = 0;

  if (typeof start != "number" || typeof end != "number") {
    return 'ERROR';
  }

  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  if (start > end) {
    for (let i = end; i <= start; i++) {
      total = total + i;
    }
  } else  {
    for (let i = start; i <= end; i++) {
      total = total + i;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
