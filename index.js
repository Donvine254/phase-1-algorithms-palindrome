function isPalindrome(word) {
  return (word.split('').reverse().join('')===word)?true:false;
}

/* 
  Add your pseudocode here
*/
/* function isPalindrome(word){
  convert word to an Array
  call Array method .split('') to extract every letter in word
  call Array method .reverse() to reverse the letters in word
  call Array method .join('') to rejoin the reversed letters in to a single word.
  use if the reversed word is equal to the input (word)
  if this evaluates to true, return true, else return false
}
 */
/*
  Add written explanation of your solution here
  the solution takes the input and converts its into an array containing the letters in the word. the letters are then reversed and joined into a new word. the tenary statement checks whether the new converted word is similar to the original word and returns true, else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
