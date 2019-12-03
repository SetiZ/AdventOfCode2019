const fs = require('fs');

const array = fs.readFileSync('input').toString().split("\n");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const array2 = array.map(x => Math.floor(x/3) - 2);

console.log(array2.reduce(reducer));
