// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    for(let char of str) {
        chars[char] = chars[char] + 1 || 1;
    }
    let max = 0;
    Object.values(chars).forEach(val => {
        max = max < val ? val : max;
    });
    let index = Object.values(chars).findIndex(el => el === max);
    return Object.keys(chars)[index];
}

module.exports = maxChar;

// function maxChar(str) {
//     let keys = [];
//     let values = [];
//     str.split('').forEach(element => {
//         let index = keys.findIndex(el => el === element);
//         if(index < 0) {
//             keys.push(element);
//             values.push(1);
//         } else {
//             values[index]++;
//         }
//     });
//     maxValue = 0;
//     maxIndex = -1;
//     values.forEach((element, index) => {
//         if(element > maxValue){
//             maxValue = element;
//             maxIndex = index;
//         }
//     });
//     return keys[maxIndex];
// }
