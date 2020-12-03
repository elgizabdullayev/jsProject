let nums = [];
let newNums = [];
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Данный массив: индекс ${i} = ${nums[i]}`);
}
let index = nums.length-1;
for(let n = 0; n<10; n++){
    newNums[index]= nums[n];
    index--;
}
for(let m = 0; m<newNums.length; m++ ){
console.log(`Реверсированный массив: индекс ${m} = ${newNums[m]}`);
}


function getNumber(){
    return Math.floor(Math.random() * 10);  
 }