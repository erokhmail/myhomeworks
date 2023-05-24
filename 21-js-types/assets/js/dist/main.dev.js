"use strict";

function sumResult() {
  var numFirst = 0.1;
  var numSecond = 0.2;
  var result = +(numFirst + numSecond).toFixed(1);
  document.getElementById("sum-result-1").innerText = result;
}

function sumStr() {
  var str = '1';
  var num = 2;
  var result = +(+str + num).toFixed();
  document.getElementById("sum-result-2").innerText = result;
}

function fleshRes() {
  var constGb = document.getElementById("flesh-data").valueAsNumber;
  var sizeDefault = 820;

  if (isNaN(constGb)) {
    document.getElementById("flesh-result-3").innerHTML = '<i style="color: red">Введіть коректне значення</i>';
    return false;
  }

  var result = Math.floor(constGb * 1024 / sizeDefault);
  document.getElementById("flesh-result-3").innerText = result;
}

function chocolateCalc() {
  var amount = document.getElementById("amount-data").valueAsNumber;
  var cost = document.getElementById("cost").valueAsNumber;

  if (isNaN(amount)) {
    document.getElementById("quantity").innerHTML = '<i style="color: red">Введіть коректне значення</i>';
    return false;
  }

  var result = Math.floor(amount / cost);
  document.getElementById("quantity").innerText = result;

  if (isNaN(cost)) {
    document.getElementById("rest-amount").innerHTML = '<i style="color: red">Введіть коректне значення</i>';
    return false;
  }

  var resultRest = +(amount - cost * result).toFixed(2);
  document.getElementById("rest-amount").innerText = resultRest;
}