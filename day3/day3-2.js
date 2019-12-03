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
      // console.log(parseInt(one)+parseInt(two), bigMatrix1[one])
      // bigMatrix.push(bigMatrix1[one]);
      break;
    }
  }
}
// this one
//13836 [ -161, 1208 ]

// it was [ -325, 384 ]
// console.log(bigMatrix1)

// 0 [ 0, 0 ]
// 13836 [ -161, 1208 ]
// 14732 [ -68, 1208 ]
// 60140 [ -325, 648 ]
// 61014 [ -325, 384 ]
// 25456 [ -999, -113 ]
// 25740 [ -1106, -148 ]
// 85228 [ -2622, -1928 ]
// 89000 [ -2661, -1595 ]
// 89498 [ -2808, -1493 ]
// 76944 [ -2193, -426 ]
// 77606 [ -2193, -614 ]
// 88370 [ -2164, -883 ]
// 114376 [ -1714, -552 ]
// 105232 [ -1918, -552 ]
// 105108 [ -2336, -552 ]
// 101902 [ -2920, -1197 ]
// 102602 [ -3092, -1197 ]
// 139056 [ -3341, -2001 ]
// 124280 [ -3332, -2328 ]
// 140144 [ -3332, -2433 ]
// 130358 [ -3950, -3738 ]