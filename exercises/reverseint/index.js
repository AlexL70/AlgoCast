// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let sign = Math.sign(n);
    return parseInt((n * sign).toString().split('').reverse().join('')) * sign;
}

module.exports = reverseInt;

// function reverseInt(n) {
//     let copy = n < 0 ? -n : n;
//     let reversed = 0;
//     while(copy > 0) {
//         reversed *= 10;
//         reversed += copy % 10;
//         copy = Math.floor(copy / 10);
//     }
//     return n < 0 ? -reversed : reversed;
// }
