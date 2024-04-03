/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  quotient = dividend / divisor
  if(quotient > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  } else if (quotient < -(2 ** 31)) {
   return -(2 ** 31) 
  } else {
    return Math.trunc(quotient)
  }
};