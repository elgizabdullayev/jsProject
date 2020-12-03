let x = generateNumber()
let y = generateNumber()

    if (x>0, y>0){
        console.log(`Ваш x = ${x}, y = ${y}. Точка находится в первой четверти.`);
    }
    else if (x<0, y>0) {
        console.log(`Ваш x = ${x}, y = ${y}. Точка находится во второй четверти.`); 
    }
    else if (x>0, y<0) {
        console.log(`Ваш x = ${x}, y = ${y}. Точка находится в четвертой четверти.`);
    }
    else if ( x<0, y<0){
        console.log(`Ваш x = ${x}, y = ${y}. Точка находится в третьей четверти.`);
    }

function generateNumber(){
    return Math.floor(Math.random() * 201) - 100
}