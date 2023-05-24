/*Правильні імена змінних 
let userName;
let length;
let user28;
let _radius;
*/

// Неправильні імена змінних
// let 28user;
// let user-surname;
// let let = 2;
// let return = 2;
// let calc-Perimeter; 

/*стилі написання імен змінних
camelCase
PascalCase 
snake_case
SCREAMING_SNAKE_CASE
*/

function userName() {
    const username = prompt('Вкажіть своє ім\'я');

    if (username) {
        alert(`Привіт, ${username}`);
    }

}

function userAge() {
    const useryear = +prompt('Вкажіть ваш рік народження');
    const currentyear = new Date().getFullYear();

    let result = 0;

    if (useryear >= 1923 && useryear <= 2005) {
        result = currentyear - useryear;
        alert(`Ваш вік ${result}`);
    } else if (useryear < 1923){
        alert(`You're too old for this shit`);
    } else if (useryear > 2005){
        alert(`You're too young for this shit`);
    }

}

function calcPerimeter() {
    const length = +prompt('Вкажіть довжину сторони квадрату в мм');
    
    let result = 0;

    if (length !== 0 && length !== '' && !Number.isNaN(length)) {
        result = length * 4;
        alert(`Периметр квадрату дорівнює ${result}мм`);
    } else {
        alert('Введіть коректне значення')
    }

}

function circleArea() {
    const circleradius = +prompt('Вкажіть радіус кола в мм');
    
    let result = 0;

    if (circleradius !== 0 && circleradius !== '' && !Number.isNaN(circleradius)) {
        result = +(Math.PI * Math.pow (circleradius,2)).toFixed(2);
        alert(`Площа кола дорівнює ${result}мм^2`);
    } else {
        alert('Введіть коректне значення')
    }

}

function userSpeed() {
    const userdistance = +prompt('Вкажіть відстань в кілометрах між двома містами');
    const usertime = +prompt('Вкажіть кількість годин, за яку потрібно дістатися місця призначення');
    
    let result = 0;

    if (userdistance !== 0 && userdistance !== '' && !Number.isNaN(userdistance) && usertime !== 0 && usertime !== '' && !Number.isNaN(usertime) && Number.isInteger(usertime)) {
        result = userdistance / usertime;
        alert(`Рекомендована швидкість ${result} км/год`);
    } else {
        alert('Введіть коректне значення')
    }

}

function currConvertor() {
    const dollars = +prompt('Вкажіть суму в $');
    const eurocurs = 0.93;
    
    let result = 0;

    if (dollars !== 0 && dollars !== '' && !Number.isNaN(dollars)) {
        result = +(dollars * eurocurs).toFixed(2);
        alert(`${dollars} $ = ${result} €`);
    } else {
        alert('Введіть коректну суму')
    }

}