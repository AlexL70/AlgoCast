// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mapA = createCharMap(stringA);
    const mapB = createCharMap(stringB);
    if(Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }

    for (const key in mapA) {
        if(mapA[key] !== mapB[key])
            return false;
    }

    return true;
}

function createCharMap(s) {
    let charMap = {};
    for (const char of s.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = anagrams;
