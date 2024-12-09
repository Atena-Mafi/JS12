//? You have an object with a string property. Implement a method named counterString for the object that performs the following tasks:
//todo1: Convert the received string into an array based on spaces.
//todo2: Calculate the length of each element in the array.
//todo3: Return a new array containing the lengths of the elements.
//way 1👇👇👇
const obj = {
  string: "Hello world how are you?",
  counterString(){
  let arr= this.string.split(" ");
  let result=arr.map((item)=>item.length)
  return result
  }

};
console.log(obj.counterString());
// note: obj.counterString("Hello world how are you?")==>[ 5, 5, 3, 3, 4 ]
//way 2👇👇👇

// const obj = {
//     counterString(text){
//     let arr= text.split(" ");
//     let result=arr.map((item)=>item.length)
//     return result
//     }
//   };
//   console.log(obj.counterString("You can enter anything"));
