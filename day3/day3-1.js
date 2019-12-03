const fs = require('fs');

const array = fs.readFileSync('input').toString().split("\n");

// console.log(array);
let bigMatrix = [];
let bigMatrix1 = [];
let bigMatrix2 = [];

const matrixMaker = (element, bigMatrix) => {
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
}

matrixMaker(array[0], bigMatrix1);
matrixMaker(array[1], bigMatrix2);

for(one in bigMatrix1) {
  // console.log(one);
  for(two in bigMatrix2) {
    // console.log(two);
    if (bigMatrix1[one].toString() === bigMatrix2[two].toString()) {
      console.log(bigMatrix1[one])
      bigMatrix.push(bigMatrix1[one]);
      break;
    }
  }
}

// it was [ -325, 384 ]
// console.log(bigMatrix)

// [ 0, 0 ]
// [ -161, 1208 ]
// [ -68, 1208 ]
// [ -325, 648 ]
// [ -325, 384 ]
// [ -999, -113 ]
// [ -1106, -148 ]
// [ -2622, -1928 ]
// [ -2661, -1595 ]
// [ -2808, -1493 ]
// [ -2193, -426 ]
// [ -2193, -614 ]
// [ -2164, -883 ]