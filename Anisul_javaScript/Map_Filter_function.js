// "use strict"
// x=20;
// console.log(`x = ${x}`);// error veriable is not defined.
// //var x;

let a = [10,45,25,35];

// let squaer = a.map((x)=>{
//     return x*x;
// });
//console.log(squaer);
                            // short hand of map():::
let squ = a.map(x=> x*x);
console.log(squ);

// let newNumber=a.filter((x)=>{
//     return x>10;
// });
// console.log(newNumber);
                                    // short hand of filter():::

let newNum=a.filter(x=> x>10);
console.log(newNum);