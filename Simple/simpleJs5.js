let mark = generateNumber();
 if(0<=mark && mark<=19){
     console.log(`Your point is ${mark}. Mark is F.`)
 }
 else if(20<=mark && mark<=39){
    console.log(`Your point is ${mark}. Mark is E.`)
}
else if(40<=mark && mark<=59){
    console.log(`Your point is ${mark}. Mark is D.`)
}
else if(60<=mark && mark<=74){
    console.log(`Your point is ${mark}. Mark is C.`)
}
else if(75<mark && mark<=89){
    console.log(`Your point is ${mark}. Mark is B.`)
}
else if(90<=mark && mark<=100){
    console.log(`Your point is ${mark}. Mark is A.`)
}



function generateNumber(){
    return Math.floor(Math.random() * 100)
} 