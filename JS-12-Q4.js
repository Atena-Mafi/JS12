//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

///1
 const num=88;
 let name="Sara";



///2
array.forEach(element => {
    console.log(element);
    
});

const sum=(a,b)=>{
    a+b
};




//3
console.log(`The number is ${num}`);


//4
const obj={
    name:"Atena",
    lastName:"Mafi",
};

const {lastName}=obj;
console.log(lastName);


const arr =[1,3,5,7];

const [first,second]=arr;
console.log(second);
