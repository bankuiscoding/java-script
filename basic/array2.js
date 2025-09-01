const marvel_heroes = ["thore","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)//due to this it create array of array not merge


//console.log(marvel_heroes)
// const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes)

//const all_new_heroes = [...marvel_heroes,...dc_heroes]//spread opertor
//console.log(all_new_heroes)

//const another_array = [1,2,3,4,[78,43,45],753,[3424,534,342,[4524,244323]]]
//const real_another_array = another_array.flat(Infinity)//this method remove the problem of arrayu of array
//console.log(real_another_array


console.log(Array.isArray("Arya"))
console.log(Array.from("Arya"))//this method convert into array
console.log(Array.from({name:"arya"}))//interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


