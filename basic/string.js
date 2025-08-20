

//console.log(name+repoCount+"value");
//not recommend
const name = "Ankit- Arya"
const repoCount = 30

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('arya-ankit')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringone= '         ankit     '
console.log(newStringone)
console.log(newStringone.trim());


const url = "https://ubiquitous-lamp-g4455pv46v7jf7v6.github.dev/"

console.log(url.replace('%20','_'));

console.log(url.includes('arya'));

console.log(gameName.split('_'))