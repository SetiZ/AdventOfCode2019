const fs = require('fs');

const array = fs.readFileSync('input').toString().split("\n");

// console.log(array);
let bigMatrix = [];
let bigMatrix1 = [];
let bigMatrix2 = [];

array.forEach(element => {
  const wire = element.split(",");
  let lat = 0;
  let long = 0;
  wire.forEach(point => {
    var letr=  point.match(/[a-zA-Z]+/g).toString();
    var num = point.match(/\d+/g).toString();
    // console.log(point);
    switch (letr) {
      case 'L':
        for(i=0;i<num;i++) {
          bigMatrix.push([lat - i, long]);
        }
        lat = lat - i;
        break;
      case 'U':
        for(i=0;i<num;i++) {
          bigMatrix.push([lat, long - i]);
        }
        long = long - i;
        break;
      case 'R':
        for(i=0;i<num;i++) {
          bigMatrix.push([lat + i, long]);
        }
        lat = lat + i;
        break;
      case 'D':
        for(i=0;i<num;i++) {
          bigMatrix.push([lat, long + i]);
        }
        long = long + i;
        break;
    }
  })
});

// var doubles = bigMatrix.reduce(function (out, item) {
//   return out.concat(out.filter(function (comp) {
//     console.log(item[0] == comp[0], item[1] == comp[1])
//     return (item[0] == comp[0] && item[1] == comp[1]);
//   }).length ? [] : [item])
// }, []);

// console.log(doubles);
bigMatrix.forEach(el =>{
  console.log(el);
})