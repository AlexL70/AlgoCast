// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.slice(0, str.length/2).split('').every((ch, i) => {
        return ch === str[str.length - 1 - i];
    });
}

module.exports = palindrome;

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// function palindrome(str) {
//     for(let i = 0; i < str.length / 2; i++) {
//         if(str[i] != str[str.length - 1 - i])
//             return false;
//         return true;
//     }
// }
