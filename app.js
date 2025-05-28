// var name = "hello node";
// var a = 10;
// console.log("name", name);
// console.log("a", a);

// // window is a global object given to us by browser and not by by V8 engine
// // NodeJS has V8 engine which executes our code and nodeJS also provides us some Super powers.
// // One of the super power is a global object
// // in browser console if you write window, this, self, frames it will all point towards the window object

// console.log(global);
// console.log(this); // prints empty object
// console.log(globalThis); //prints the global object
// console.log(globalThis === global); //true

// require("./xyz.js");
// const calculateSum=require("./sum.js")
// const obj=require("./sum.js")  //you can also destructure the object as shown below
// const { calculateSum, x } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");
const { calculateMultiply, calculateSum } = require("./calculate/index");
calculateSum(10, 20);
calculateMultiply(2, 2);
// console.log(x);
