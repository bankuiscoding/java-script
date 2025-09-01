//singelton

//object laterals
//In object we define key and value nd we accesss through key and their value
const mySym = Symbol("key1")
const Jsuser = {

    name:"Arya",
    "fullName":"Ankit Arya",
    age:20,
    [mySym]:"key1",
    place:"Bhopal",
    email:"anditisankit@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","Saturday"]


}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["fullName"])
console.log(Jsuser[mySym])

Jsuser.email = "ankirt45@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email = "ankirt45@gmail.com"
console.log(Jsuser)

//function

Jsuser.greeting = function(){
    console.log("Hello user")
}
console.log(Jsuser.greeting)//undefined
console.log(Jsuser.greeting())//here greeting is not a function
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(Jsuser.greetingTwo())
