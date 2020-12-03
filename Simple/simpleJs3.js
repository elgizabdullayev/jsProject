let a = generateNumber();
let b = generateNumber();
let c = generateNumber();
let sum = 0
if(a>0){
    sum += a
}
if(b>0){
    sum += b
}
if(c>0){
    sum += c
}
console.log(`Sum is ${sum}, numbers are ${a}, ${b}, ${c}.`)
function generateNumber(){
    return Math.floor(Math.random() * 201) - 100
}