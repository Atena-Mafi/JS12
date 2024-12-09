//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer1:👇👇👇👇👇👇👇
function name(params) {
 console.log("Action");

function name2(params) {
console.log("Potential");

function name3(params) {
console.log("Signals");
    
}

name3()
}

name2();
};

name();


// !Answer2: 👇👇👇👇👇👇👇

// function name() {
//     console.log("Action")};
   
//    function name2() {
//    console.log("Potential")};
   
//    function name3() {
//    console.log("Signals")};
   
//    function  all() {
//     name() 
//     name2() 
//     name3() 
//    }

// all();