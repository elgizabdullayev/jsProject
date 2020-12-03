let a = generateNumber();
let b = generateNumber();
let c = generateNumber();

let sum = a+b+c;
let multiplication = a*b*c;
if(sum>multiplication){
    let newNum = multiplication+3;
    console.log(`Numbers are ${a}, ${b}, ${c}, their sum is ${sum}, their multiplication ${multiplication}. So a*b*c < a+b+c. New number is ${newNum}.`)
}
else {
    let newNum = sum +3;
    console.log(`Numbers are ${a}, ${b}, ${c}, their sum is ${sum}, their multiplication ${multiplication}. So a*b*c > a+b+c. New number is ${newNum}.`)
}
function generateNumber(){
    return Math.floor(Math.random() * 201) - 100
}