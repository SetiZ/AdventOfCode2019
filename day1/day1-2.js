const fs = require('fs');

const array = fs.readFileSync('input').toString().split("\n");
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const fuel = (x, sum) => {
  const floor = Math.floor(x/3) - 2;
  if (floor <= 0) {
    return sum;
  } else {
    return floor + fuel(floor, sum);
  }
}
const array2 = array.map(x => fuel(x, 0));



console.log(array2.reduce(reducer));
