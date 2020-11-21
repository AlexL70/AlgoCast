// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let line = 1; line <= n; line++) {
        let str = "";
        for(let step = 1; step <= n; step++) {
            if(step <= line){
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

module.exports = steps;
