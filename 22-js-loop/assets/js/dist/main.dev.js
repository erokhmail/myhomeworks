"use strict";

function adultIs() {
  var age = document.getElementById("adult-data").valueAsNumber;

  if (age >= 0 && age <= 11) {
    document.getElementById("adult-result").innerHTML = '<i style="color: #5dcc1f;">Дитина</i>';
  } else if (age >= 12 && age <= 17) {
    document.getElementById("adult-result").innerHTML = '<i style="color: #c1e159;">Підліток</i>';
  } else if (age >= 18 && age <= 59) {
    document.getElementById("adult-result").innerHTML = '<i style="color: #ffe700;">Дорослий</i>';
  } else if (age >= 60 && age <= 100) {
    document.getElementById("adult-result").innerHTML = '<i style="color: #ffa500;">Пенсіонер</i>';
  } else {
    document.getElementById("adult-result").innerHTML = '<i style="color: #ff0000;">Введіть значення від 0 до 100</i>';
    return;
  }
}

function specSymbol() {
  var number = document.getElementById("symbol-data").valueAsNumber;

  switch (number) {
    case 0:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">)</i>';
      break;

    case 1:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">!</i>';
      break;

    case 2:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">@</i>';
      break;

    case 3:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">#</i>';
      break;

    case 4:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">$</i>';
      break;

    case 5:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">%</i>';
      break;

    case 6:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">^</i>';
      break;

    case 7:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">&</i>';
      break;

    case 8:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">*</i>';
      break;

    case 9:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #5dcc1f;">(</i>';
      break;

    default:
      document.getElementById("symbol-result").innerHTML = '<i style="color: #ff0000;">Введіть число від 0 до 9</i>';
      break;
  }
}

function sumDiapazon() {
  var numFirst = document.getElementById("num-1").valueAsNumber;
  var numLast = document.getElementById("num-2").valueAsNumber;
  var result = 0;

  if (isNaN(numFirst) && isNaN(numLast)) {
    document.getElementById("num-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById("num-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById('diap-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
    return;
  } else if (isNaN(numFirst)) {
    document.getElementById("num-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById('diap-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
    return;
  } else if (isNaN(numLast)) {
    document.getElementById("num-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById('diap-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
    return;
  } else if (numFirst > numLast) {
    for (var i = numFirst; i >= numLast; i--) {
      result += i;
      console.log(result);
    }

    document.getElementById("diap-result").innerText = result;
  }

  for (var _i = numFirst; _i <= numLast; _i++) {
    result += _i;
    console.log(result);
  }

  document.getElementById("diap-result").innerText = result;
}

function biggestDel() {
  var numDelFirst = document.getElementById('del-1').valueAsNumber;
  var numDelSecond = document.getElementById('del-2').valueAsNumber;
  var result = 0;

  if (isNaN(numDelFirst) && isNaN(numDelSecond)) {
    document.getElementById("del-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById("del-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById('del-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
    return;
  } else if (isNaN(numDelFirst)) {
    document.getElementById("del-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById('del-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
    return;
  } else if (isNaN(numDelSecond)) {
    document.getElementById("del-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
    document.getElementById('del-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
    return;
  }

  for (var i = 1; i <= numDelFirst && i <= numDelSecond; i++) {
    if (numDelFirst % i === 0 && numDelSecond % i === 0) {
      result = i;
      console.log(result);
    }
  }

  document.getElementById("del-result").innerHTML = result;
}

function calcDevider() {
  var numDevider = document.getElementById('num-devider').valueAsNumber;
  var result = '';

  if (isNaN(numDevider)) {
    document.getElementById("devider-result").innerHTML = '<i style="color: #ff0000;">Введіть коректне значення</i>';
    return;
  }

  for (var i = 1; i <= numDevider / 2; i++) {
    if (numDevider % i === 0) {
      result += i + ', ';
      console.log(result);
    }
  }

  result += numDevider;
  document.getElementById("devider-result").innerHTML = result;
}

function isPalindrome() {
  var palindrome = document.getElementById('palindrome').valueAsNumber;

  if (isNaN(palindrome) || palindrome < 10000 || palindrome > 99999) {
    document.getElementById("palindrome-result").innerHTML = '<i style="color: #ff0000;">Введіть п’ятирозрядне число</i>';
    return;
  } else if (palindrome % 10 === 0) {
    document.getElementById("palindrome-result").innerHTML = '<i style="color: #ff0000;">Число не є паліндромом</i>';
    return;
  }

  var palPart = 0;

  while (palindrome > palPart) {
    palPart *= 10;
    palPart += palindrome % 10;
    palindrome = Math.trunc(palindrome / 10);
    console.log(palindrome, palPart);
  }

  if (palindrome === Math.trunc(palPart / 10)) {
    document.getElementById("palindrome-result").innerHTML = '<i style="color: #21d55d;">Число є паліндромом</i>';
    return;
  }

  document.getElementById("palindrome-result").innerHTML = '<i style="color: #ff0000;">Число не є паліндромом</i>';
}

function sumDisc() {
  var sum = document.getElementById('disc').valueAsNumber;
  var discount = 0;

  if (sum < 200 || isNaN(sum)) {
    document.getElementById("disc-result").innerHTML = '<i style="color: #ff0000;">Введіть суму від 200</i>';
    return;
  } else if (sum >= 200 && sum <= 300) {
    discount = (sum - sum / 100 * 3).toFixed(2);
  } else if (sum > 300 && sum <= 500) {
    discount = (sum - sum / 100 * 5).toFixed(2);
  } else if (sum > 500) {
    discount = (sum - sum / 100 * 7).toFixed(2);
  }

  document.getElementById("disc-result").innerHTML = "<i style=\"color: #5dcc1f;\">".concat(discount, "</i>");
}

function statistic() {
  var i = 1,
      minusResult = 0,
      nulResult = 0,
      parResult = 0,
      neparResult = 0,
      plusResult = 0;

  while (i < 11) {
    var num = parseInt(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E ".concat(i)));

    if (isNaN(num)) {
      alert('Введіть коректне значення');
    } else if (num < 0) {
      minusResult++;
    } else if (num > 0) {
      plusResult++;
    } else {
      nulResult++;
    }

    if (num % 2 === 0 && num !== 0) {
      parResult++;
    } else if (num % 2 !== 0 && num !== 0) {
      neparResult++;
    } else {
      nulResult++;
    }

    i++;
    nulRes = nulResult / 2;
  }

  document.getElementById("statistic-result").innerHTML = "<br>\n    <i style=\"color: #5dcc1f;\">\n        <b>\u0414\u043E\u0434\u0430\u0442\u043D\u0456\u0445 \u0447\u0438\u0441\u0435\u043B:</b> ".concat(plusResult, "<br>\n        <b>\u0412\u0456\u0434\u2019\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B:</b> ").concat(minusResult, "<br>\n        <b>\u041D\u0443\u043B\u0456\u0432:</b> ").concat(nulRes, "<br>\n        <b>\u041F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B:</b> ").concat(parResult, "<br>\n        <b>\u041D\u0435\u043F\u0430\u0440\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B:</b> ").concat(neparResult, "\n    </i> ");
} //Zagalna strilkovafunctsiya


var getVal = function getVal(id) {
  return document.getElementById(id).valueAsNumber;
};

function showResult(id, text) {
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';

  if (mode === 'text') {
    document.getElementById(id).innerText = text;
  } else if (mode === 'html') {
    document.getElementById(id).innerHTML = text;
  }
}

function prykladxt() {
  var num1 = getVal('task_1');
  showResult('tas1_1_esult', "<i style=\"color: #5dcc1f;\">".concat(discount, "</i>"), 'html');
} //#Zagalna strilkovafunctsiya


function dayOfWeek() {
  var weekDays = new Date();
  var day = weekDays.getDay();
  var dayName = '';

  do {
    switch (day) {
      case 0:
        dayName = 'Неділя';
        break;

      case 1:
        dayName = 'Понеділок';
        break;

      case 2:
        dayName = 'Вівторок';
        break;

      case 3:
        dayName = 'Середа';
        break;

      case 4:
        dayName = 'Четвер';
        break;

      case 5:
        dayName = 'П\'ятниця';
        break;

      case 6:
        dayName = 'Субота';
        break;
    }

    var dayProp = confirm("".concat(dayName, ". \u0425\u043E\u0447\u0435\u0448 \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0434\u0435\u043D\u044C? "));

    if (dayProp) {
      day = (day + 1) % 7;
    } else {
      return;
    }
  } while (true);
}

function findNumber() {
  var from = 0;
  var to = 100;
  var middle = 50;
  var answer = '';

  do {
    middle = Math.round((from + to) / 2);
    answer = prompt("\u0411\u0456\u043B\u044C\u0448\u0435, \u043C\u0435\u043D\u0448\u0435 \u0430\u0431\u043E \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ".concat(middle, "?"));

    if (answer === '>') {
      from = middle;
    }

    if (answer === '<') {
      to = middle;
    }
  } while (answer !== '=');

  alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(middle));
}

function findData() {
  var data = getVal('year-day');
  var moun = getVal('year-month');
  var year = getVal('year-year');
  var newDay = data + 1;
  var newMoun = moun;
  var newYear = year;

  if (isNaN(data) || isNaN(moun) || isNaN(year)) {
    document.getElementById("year-result").innerHTML = '<i style="color: red">Заповніть всі поля</i>';
    return;
  }

  switch (moun) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (newDay === 32) {
        newDay = 1;
        newMoun++;
      }

      ;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      if (newDay === 31) {
        newDay = 1;
        newMoun++;
      }

      ;
      break;

    case 2:
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 !== 0) {
        if (newDay === 30) {
          newDay = 1;
          newMoun++;
        }
      } else {
        if (newDay === 29) {
          newDay = 1;
          newMoun++;
        }
      }

      break;
  }

  ;

  if (newMoun === 13) {
    newMoun = 1;
    newYear++;
  }

  var addZero = function addZero(num) {
    return num < 10 ? '0' + num : '' + num;
  };

  showResult('year-result', "<i style=\"color: #5dcc1f;\">".concat(addZero(newDay), "/").concat(addZero(newMoun), "/").concat(addZero(newYear), "</i>"), 'html');
}

function multipleTable() {
  var tBody = '';

  for (var i = 1; i <= 10; i++) {
    tBody += '<tr>';

    for (var g = 1; g < 10; g++) {
      mRez = i * g;

      if (g === 1) {
        mRez = i;
      } else {
        mRez = i * g;
      }

      tBody += '<td>' + mRez + '</td>';
    }

    tBody += '</tr>';
  }

  document.getElementById('table-result').innerHTML = tBody;
}