/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (x > -100.0 && x < 100.0) {
        if (n >= (-2) ** 31 && n <= 2 ** 31 -1) {
            return Math.pow(x, n)
        }
    }
    
};