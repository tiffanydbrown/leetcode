/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original = x;
    let digit, result = 0;

    while (x > 0) {
    digit = x % 10;
    result = (result * 10) + digit;
    x = x/10|0;
    }
    if(result !== original) {
        return false;
    }
    return true;
};