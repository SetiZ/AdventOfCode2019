const fs = require('fs');

const array = fs.readFileSync('input').toString().split(",").map(Number);

const program = (array) => {
  let i = 0;
  while (i < array.length) {
    opcode = array[i];
    i1 = array[i+1];
    i2 = array[i+2];
    i3 = array[i+3];
    if (array[i] === 1) {
      array[i3] = array[i1] + array[i2];
    } else if (array[i] === 2) {
      array[i3] = array[i1] * array[i2];
    } else if (array[i] === 99) {
      break;
    }
    i += 4;
  }
};

array[1] = 12;
array[2] = 2;

program(array);

console.log(array[0]);