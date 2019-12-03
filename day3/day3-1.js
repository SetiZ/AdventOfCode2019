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

// array.forEach(element => {
//   const wire = element.split(",");
//   let lat = 0;
//   let long = 0;
//   wire.forEach(point => {
//     var letr=  point.match(/[a-zA-Z]+/g).toString();
//     var num = point.match(/\d+/g).toString();
//     // console.log(point);
//     switch (letr) {
//       case 'L':
//         for(i=0;i<num;i++) {
//           bigMatrix.push([lat - i, long]);
//         }
//         lat = lat - i;
//         break;
//       case 'U':
//         for(i=0;i<num;i++) {
//           bigMatrix.push([lat, long - i]);
//         }
//         long = long - i;
//         break;
//       case 'R':
//         for(i=0;i<num;i++) {
//           bigMatrix.push([lat + i, long]);
//         }
//         lat = lat + i;
//         break;
//       case 'D':
//         for(i=0;i<num;i++) {
//           bigMatrix.push([lat, long + i]);
//         }
//         long = long + i;
//         break;
//     }
//   })
// });

// var doubles = bigMatrix.reduce(function (out, item) {
//   return out.concat(out.filter(function (comp) {
//     console.log(item[0] == comp[0], item[1] == comp[1])
//     return (item[0] == comp[0] && item[1] == comp[1]);
//   }).length ? [] : [item])
// }, []);

// console.log(doubles);
// bigMatrix.forEach(el =>{
//   console.log(el);
// })

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

  // var toto = bigMatrix2.map((item) => {
  //   console.log(t);
  //   console.log(item.toString(), bigMatrix1[one].toString())
  //   if ((item.toString() === bigMatrix1[one].toString())) {
  //     console.log(item);
  //     break;
  //   }
  //   return (item.toString() === bigMatrix1[one].toString());
  // })
  // t++;
  // console.log(toto);
}

console.log(bigMatrix)

// bigMatrix1.forEach(el =>{
//   console.log(el);
// })

// bigMatrix2.forEach(el =>{
//   console.log(el);
// })