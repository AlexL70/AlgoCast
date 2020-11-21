// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];
    for (const word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

module.exports = capitalize;

// function capitalize(str) {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }

// function capitalize(str) {
//     let arr = str.split('');
//     for(let i = 0; i < arr.length; i++) {
//         if(i == 0 || (arr[i] !== ' ' && arr[i - 1] === ' ')) {
//             arr[i] = arr[i].toUpperCase();
//         }
//     }
//     return arr.join('');
// }
