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
    const a = stringA.replace(/[^\w]/g).toLowerCase();
    const b = stringB.replace(/[^\w]/g).toLowerCase();
    return objEquals(stringToObject(a), stringToObject(b));
}

function stringToObject(s) {
    let obj = {};
    for (const char of s) {
        obj[char] = obj[char] + 1 || 1;
    }
    return obj;
}

function objEquals(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length)
        return false;

    for (const key in obj1) {
        if(obj1[key] !== obj2[key])
            return false;
    }
    return true;
}

module.exports = anagrams;
