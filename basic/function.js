function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("K")
    console.log("I")
    console.log("T")
}
//sayMyName()

function addTwoNumbers(number1,number2){
   //console.log(number1+number2)
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
const result = addTwoNumbers(2,8)
//onsole.log("Result:",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please define a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Arya"))
//When in a parameter we can not pass anything than that return undefined not a null
//console.log(loginUserMessage())-It retur undefine

//Shopping cart parameter where
// ... it is known as rest operator
function calculateCartPricen(...num1){
    return num1
}
console.log(calculateCartPricen(200,400,599))

//case-2
function calculatePrice(val1,val2,...num1){
    return num1
}
console.log(calculatePrice(299,455,34,5342))


const user = {
    username:"Ankit",
    price:13
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);
}
//handleObject(user)
handleObject({
    username:"Arya",
    price: 543
})

const myNewArray = [200,400,100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))