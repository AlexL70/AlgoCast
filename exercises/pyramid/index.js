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
    let rowlen = n * 2 - 1;
    for(let i = 1; i <= n; i++) {
        let level = "";
        while(level.length < rowlen) {
          level += level.length < (Math.trunc(rowlen / 2) - i + 1)
                || level.length > (Math.trunc(rowlen / 2) + i - 1)
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
