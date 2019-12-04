const input = '178416-676461';
const array = input.split('-');
const start = parseInt(array[0])
const end = parseInt(array[1])
let trail = 0
console.log(start, end)
for (let t = start; t < end; t++) {
  output = []
  for (var i = 0; i < t.toString().length; i++) {
    output.push(+t.toString().charAt(i));
  }
  // console.log(output)
  sorted = Array.prototype.slice.call(output).sort();
  // console.log(JSON.stringify(output), JSON.stringify(sorted))
  if (JSON.stringify(output) === JSON.stringify(sorted)) {
    let index = output[0];
    for (n=1;n <output.length; n++) {
      if (output[n] === index) {
        console.log(output);
        trail++;
        break;
      } else {
        index = output[n];
      }
    }
  }
}
console.log(trail)