let nums = [];
temp = 0;
for(let i = 0; i<10; i++){
    nums[i]=getNumber();
    console.log(`Данный массив: число номер: ${i+1} = ${nums[i]}`);
}
for(let j = 0; j< nums.length-1; j++){
    for(let n = j+1; n< nums.length; n++){
        if(nums[j]>nums[n]){
            temp=nums[j];
            nums[j] = nums[n];
            nums[n] = temp;
        }
    }
}
for(let i = 0; i<nums.length; i++){
    console.log(`Отсортированный массив: число номер: ${i} = ${nums[i]}`);
}

function getNumber(){
    return Math.floor(Math.random() * 100);  
 }