// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    for(let key of str) {
        chars[key] = chars[key] + 1 || 1;
    }
    let max = 0;
    let maxChar = ''
    for(let key in chars) {
        if(chars[key] > max) {
            max = chars[key];
            maxChar = key;
        }
    }
    return maxChar;
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
