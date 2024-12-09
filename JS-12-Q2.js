// ? Question-2:Using higher-order functions:
// todo-1:write two functiones(innerFunc,outerFunc).
// todo-2:the innerFunc calculates the multiplication of two numbers.
// todo-3:call the innerFunc in the outerFunc.

// !Answer:
function outter(x) {
 return   function  inner(y) { 
 return x*y

};
}

// let result=outter(6);
// console.log(result(3));

console.log(outter(3)(7))



