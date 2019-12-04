const input = '178416-676461';
const array = input.split('-');
const start = parseInt(array[0])
const end = parseInt(array[1])
let trail = 0
let deux = 0
// console.log(start, end)
for (let t = start; t < end; t++) {
  output = []
  truc = []
  for (var i = 0; i < t.toString().length; i++) {
    output.push(+t.toString().charAt(i));
  }
  // console.log(output)
  sorted = Array.prototype.slice.call(output).sort();
  // console.log(JSON.stringify(output), JSON.stringify(sorted))
  let count = {};
  if (JSON.stringify(output) === JSON.stringify(sorted)) {
    let index = output[0];
    // count[index] = 1;
    for (n=1;n <output.length; n++) {
      // count[index] = count[index] ? count[index] + 1 : 1;
      if (output[n] === index) {
        // console.log(output);
        // count[index] = count[index] ? count[index] + 1 : 1;
        trail++;
        truc = output
        break;
      } else {
        index = output[n];
      }
    }

    
    if (truc.length != 0) {
      index = truc[0];
      console.log(truc)
      for (n=0;n <truc.length; n++) {
        
        count[index] = count[index] ? count[index] + 1 : 1;
        index = truc[n+1];
      }
      console.log(count);
      val = Object.values(count);
      // console.log(val)
      for(p=0;p<val.length;p++) {
        if (val[p] == 2) {
          // console.log(truc)
          // console.log(val, count)
          deux++
          break;
        }
      }
    }
  }
}
console.log(trail)
console.log(deux)