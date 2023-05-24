"use strict";

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
  var username = prompt('Вкажіть своє ім\'я');

  if (username) {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442, ".concat(username));
  }
}

function userAge() {
  var useryear = +prompt('Вкажіть ваш рік народження');
  var currentyear = new Date().getFullYear();
  var result = 0;

  if (useryear >= 1923 && useryear <= 2005) {
    result = currentyear - useryear;
    alert("\u0412\u0430\u0448 \u0432\u0456\u043A ".concat(result));
  } else if (useryear < 1923) {
    alert("You're too old for this shit");
  } else if (useryear > 2005) {
    alert("You're too young for this shit");
  }
}

function calcPerimeter() {
  var length = +prompt('Вкажіть довжину сторони квадрату в мм');
  var result = 0;

  if (length !== 0 && length !== '' && !Number.isNaN(length)) {
    result = length * 4;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0443 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(result, "\u043C\u043C"));
  } else {
    alert('Введіть коректне значення');
  }
}

function circleArea() {
  var circleradius = +prompt('Вкажіть радіус кола в мм');
  var result = 0;

  if (circleradius !== 0 && circleradius !== '' && !Number.isNaN(circleradius)) {
    result = +(Math.PI * Math.pow(circleradius, 2)).toFixed(2);
    alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(result, "\u043C\u043C^2"));
  } else {
    alert('Введіть коректне значення');
  }
}

function userSpeed() {
  var userdistance = +prompt('Вкажіть відстань в кілометрах між двома містами');
  var usertime = +prompt('Вкажіть кількість годин, за яку потрібно дістатися місця призначення');
  var result = 0;

  if (userdistance !== 0 && userdistance !== '' && !Number.isNaN(userdistance) && usertime !== 0 && usertime !== '' && !Number.isNaN(usertime) && Number.isInteger(usertime)) {
    result = userdistance / usertime;
    alert("\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C ".concat(result, " \u043A\u043C/\u0433\u043E\u0434"));
  } else {
    alert('Введіть коректне значення');
  }
}

function currConvertor() {
  var dollars = +prompt('Вкажіть суму в $');
  var eurocurs = 0.93;
  var result = 0;

  if (dollars !== 0 && dollars !== '' && !Number.isNaN(dollars)) {
    result = +(dollars * eurocurs).toFixed(2);
    alert("".concat(dollars, " $ = ").concat(result, " \u20AC"));
  } else {
    alert('Введіть коректну суму');
  }
}