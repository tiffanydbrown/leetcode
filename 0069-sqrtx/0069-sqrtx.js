/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x >= 0 && x <= 2**31 -1) {
        return Math.floor(Math.sqrt(x));
    }
};