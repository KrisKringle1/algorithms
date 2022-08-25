/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  //loop through the ransom note
  //if character is in magazine, splice it out
  //if its not, return false
  //if loop completes return true

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (magazine.includes(char)) {
      magazine = magazine.replace(char, "_");
    } else {
      return false;
    }
  }
  return true;
};
