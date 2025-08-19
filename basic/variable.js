const accountId = 14453
let accountEmail = "anditisankit@gmail.com"
var accountPassowrd = "123456"
accountCity = "Bhopal"
let accountState;

//accountId = 2//not allowed
accountEmail = "Ankit@gmail.com"
accountPassowrd = "1234fjnmdc"
accountCity = "MP"
/*
Prefer not use var because of issue in block and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassowrd,accountCity,accountState])