//Primitive data types

//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt=>Call by value

const score = 100
const scoreValue=100.3
const isLoggedIn = true
const outsideTemp = null
let usermail;

const id = Symbol('123')
const anotherId=Symbol('123');

console.log(id==anotherId);




//Non primitive

//Array,Object,Function

const heros = ["iron man","gobhu","hen"];
let myObj={
    name:"Ankit",
    age:12,
}

const myFunction = function(){
    console.log("Namaste India");
}