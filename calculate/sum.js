// Modules protects its variables and functions from being accessed by other files. To access the function calculateSum, we need to export it and import in the file we need to use it.
var x = "hello";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
console.log(module.exports); //empty object
// module.exports=calculateSum
// module.exports = { calculateSum: calculateSum, x: x }  // you can also write as shown below
module.exports = { calculateSum, x };
