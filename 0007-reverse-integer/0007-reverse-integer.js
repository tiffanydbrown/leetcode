/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed =  parseFloat(
            x
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(x)
    if(reversed >= Math.pow(-2, 31) && reversed <= Math.pow(2, 31) -1) {
        return reversed;
    } else {
        return 0;
    }
};