let a = generateNumber();
let b = generateNumber();
answer = 0;
if(a % 2 === 0){
  answer =  a*b;
}
else{
   answer =  a+b;
}
console.log(`Number "a" is ${a}
Number "b" is ${b}
Your result is ${answer}.`);

function generateNumber(){
    return Math.floor(Math.random() * 201) - 100
} 