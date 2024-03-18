/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');
 
  if(sSorted.length != tSorted.length) {
    return false;
  } 

  for(let i = 0; i < sSorted.length; i++) {
    if(sSorted[i] != tSorted[i]) {
      return false;
        } 
    }
  return true;

};