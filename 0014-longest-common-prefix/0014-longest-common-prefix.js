/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""; // Handle empty input case

    let prefix = strs[0]; // Start with the first word

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Trim the prefix until it matches
            if (prefix === "") return ""; // If no common prefix, return empty string
        }
    }
    return prefix;
};
