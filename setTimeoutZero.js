var a = 10;
var b = 20;

console.log("hello");

setTimeout(() => {
  console.log("call me asap");  //this will be called once main thread is empty
}, 0);

function multiply(x, y) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);
console.log("Result is ", c);

// Output in the cosnole will be 
// hello
// Result is 200
// call me asap
