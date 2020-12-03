let nums = [];
temp = 0;
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Данный массив: число номер: ${i+1} = ${nums[i]}`);
}
let index = nums.length-1
for(let n = 0; n<Math.floor(nums.length/2); n++){
    temp = nums.shift();
    nums.push(temp);
}
  
for(let m = 0; m<nums.length; m++ ){
console.log(`Новый массив: число номер ${m+1} = ${nums[m]}`);
}


function getNumber(){
    return Math.floor(Math.random() * 10);  
 }