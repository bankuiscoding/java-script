//Calculate date from january 1 1970
let myDate =  new Date()
//console.log(myDate);
//console.log(myDate.toString())
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toDateString());
//console.log(typeof myDate);


let myCreateDate = new Date(2025,8,22)//month start from zero
//console.log(myCreateDate.toDateString());

let mynewDate = new Date("2025-09-14")
console.log(mynewDate.toLocaleString())
console.log(mynewDate.toString())

let myTimeStamp = Date.now()
    console.log(myTimeStamp)
    console.log(myCreateDate.getTime())
    //for second
    console.log(Date.now()/1000)

    let newDate = new Date()
    console.log(newDate)
    console.log(newDate.getMonth()+1)
    console.log(newDate.getDay)

    newDate.toLocaleStringa('default',
        {
            weekday: "long"
        
        }
    )
    


