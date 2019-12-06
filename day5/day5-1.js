const fs = require('fs');

const array = fs.readFileSync('input').toString().split(",").map(Number);

const program = (array, input) => {
  let i = 0, step = 4;
  while (i < array.length) {
    opcode = array[i];
    i1 = array[i+1];
    i2 = array[i+2];
    i3 = array[i+3];
    if (opcode === 1) {
      array[i3] = array[i1] + array[i2];
      step = 4
    } else if (opcode === 2) {
      array[i3] = array[i1] * array[i2];
      step = 4
    } else if (opcode === 3) {
      array[i1] = input;
      step = 2
    } else if (opcode === 4) {
      step = 2
      return array[i1];
    } else if (opcode === 99) {
      break;
    }
    i += step;
  }
};

// array[1] = 12;
// array[2] = 2;

console.log(program([3,0,4,0,99], 1));
// console.log(program(array, 1));

// console.log(array[0]);