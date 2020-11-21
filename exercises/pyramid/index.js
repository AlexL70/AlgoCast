// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const rowlen = n * 2 - 1;
    const midpoint = Math.floor(rowlen / 2);
    for(let i = 0; i < n; i++) {
        let level = "";
        for(let row = 0; row < rowlen; row++) {
          level += row < (midpoint - i)
                || row > (midpoint + i)
                    ? ' ' : '#';
        }
        console.log(level);
    }
}

//pyramid(10);
module.exports = pyramid;

// function pyramid(n, rowlen = n * 2 - 1, level = "") {
//     if(n === 0)
//         return;

//     if(level === "")
//         pyramid(n - 1, rowlen);

//     if (level.length === rowlen) {
//         console.log(level);
//         return;
//     }

//     level += level.length < (Math.trunc(rowlen / 2) - n + 1)
//           || level.length > (Math.trunc(rowlen / 2) + n - 1)
//         ? ' ' : '#';
//     pyramid(n, rowlen, level);
// }
