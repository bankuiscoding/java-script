//Declare with the halp of constructor

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nope"
tinderUser.isLoggedIn= false

//console.log(tinderUser)

const regularUser = {
    rmail:"anditisankit@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ankit",
            lastname:"Arya"
        }
    }
}
//console.log(regularUser.fullname.userfullname)
//how to merge object
const obj1 = {
    1:"a",2:"b"
}
const obj2 = {
    3:"a",4:"b"
}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)

//
//const obj3 ={...obj1,...obj3}
//console.log(obj3)

const users =[
    {
        id:1,
        email:"tum@gmail.com"
    },{
        id:1,
        email:""
    },{
        id:1,
        email:""
    }
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
