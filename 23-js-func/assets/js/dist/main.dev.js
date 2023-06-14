"use strict";

//Zagalna functsiya
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
} //#Zagalna functsiya


function argNum() {
  return arguments.length;
}

function argumentCalc() {
  var firstArg = getVal('arg-first');
  var secondArg = getVal('arg-second');

  if (isNaN(firstArg) || isNaN(secondArg)) {
    showResult('arg-result', "<i style=\"color: red;\">\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0432\u0441\u0456 \u043F\u043E\u043B\u044F</i>", 'html');
    return;
  }

  result = argNum(firstArg, secondArg);
  showResult('arg-result', "<i style=\"color: #5dcc1f;\">".concat(result, "</i>"), 'html');
}

function compareNum(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  }

  return 0;
}

function compareRes() {
  var number1 = getVal('comp-first');
  var number2 = getVal('comp-second');

  if (isNaN(number1) || isNaN(number2)) {
    showResult('comp-result', "<i style=\"color: red;\">\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0432\u0441\u0456 \u043F\u043E\u043B\u044F</i>", 'html');
    return;
  }

  var result = compareNum(number1, number2);
  showResult('comp-result', "<i style=\"color: #5dcc1f;\">".concat(result, "</i>"), 'html');
}

function factorialR(fnum) {
  if (fnum > 0) {
    return fnum * factorialR(fnum - 1);
  }

  return 1;
}

function factorialRes() {
  var number = getVal('fac-num');

  if (isNaN(number)) {
    showResult('fac-result', "<i style=\"color: red;\">\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</i>", 'html');
    return;
  }

  var result = '';
  result = factorialR(number); // for (let i=1; i<=number; i++){
  //     result *= i;
  // }

  showResult('fac-result', "<i style=\"color: #5dcc1f;\">".concat(result, "</i>"), 'html');
}

function threeSum(a, b, c) {
  return a * 100 + b * 10 + c;
}

function threeSumRes() {
  var numOne = getVal('three-one');
  var numTwo = getVal('three-two');
  var numThree = getVal('three-three');

  if (isNaN(numOne) || isNaN(numTwo) || isNaN(numThree)) {
    showResult('three-result', "<i style=\"color: red;\">\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043A\u043E\u0436\u043D\u0435 \u043F\u043E\u043B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F\u043C \u0432\u0456\u0434 1 \u0434\u043E 9</i>", 'html');
    return;
  }

  var result = threeSum(numOne, numTwo, numThree);
  showResult('three-result', "<i style=\"color: #5dcc1f;\">".concat(result, "</i>"), 'html');
}

function square(l) {
  var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;

  if (isNaN(l)) {
    l = w;
  } else if (isNaN(w)) {
    w = l;
  }

  return l * w;
}

function squareRes() {
  var length = getVal('length');
  var width = getVal('width');

  if (isNaN(length) && isNaN(width)) {
    showResult('square-result', "<i style=\"color: red;\">\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0445\u043E\u0447\u0430 \u0431 \u043E\u0434\u043D\u0435 \u043F\u043E\u043B\u0435</i>", 'html');
    return;
  }

  var result = square(length, width);
  showResult('square-result', "<i style=\"color: #5dcc1f;\">".concat(result, "</i>"), 'html');
}

function pNum(pNum) {
  var sum = 0;

  for (var i = 1; i < pNum; i++) {
    if (pNum % i == 0) {
      sum += i;
    }
  }

  if (sum == pNum) {
    return true;
  }

  return false;
}

function perfectRes() {
  var perNum = getVal('per-number');

  if (isNaN(perNum)) {
    showResult('perfect-result', "<i style=\"color: red;\">\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F</i>", 'html');
    return;
  }

  var result = pNum(perNum) ? "<i style=\"color: #5dcc1f;\">\u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435 \u0447\u0438\u0441\u043B\u043E</i>" : "<i style=\"color: red;\">\u043D\u0435 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435 \u0447\u0438\u0441\u043B\u043E</i>";
  showResult('perfect-result', "".concat(result), 'html');
}

function minmaxRes() {
  var minNum = getVal('min-number');
  var maxNum = getVal('max-number');

  if (isNaN(minNum) || isNaN(maxNum)) {
    showResult('minmax-result', "<i style=\"color: red;\">\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0432\u0441\u0456 \u043F\u043E\u043B\u044F</i>", 'html');
    return;
  }

  var result = '';

  for (var i = minNum; i <= maxNum; i++) {
    if (pNum(i)) {
      result += i + ', ';
    }
  }

  showResult('minmax-result', "".concat(result), 'html');
}