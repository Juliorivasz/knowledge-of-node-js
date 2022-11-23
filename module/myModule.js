let mySecretVariable = 'abcdef';
const myWeb = './juliorivas.github.io/PortFolio';
const myOld = 22;
const myMoney = [100, 1000, 10000];
const user = {
    name: 'Julio',
    lastName: 'Rivas',
    old: 22
}

// module.exports = {
//     mySecretVariable,
//     myWeb,
//     myOld,
//     myMoney,
//     user
// }


// and 
// tambien conocido como common js
module.exports.web = myWeb;
module.exports.old = myOld;
module.exports.money = myMoney;
module.exports.user = user;

console.log(module)