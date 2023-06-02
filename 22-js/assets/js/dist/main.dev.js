"use strict";

function viewHash() {
  var count = parseInt(prompt('Enter # count'));
  var result = '';

  if (isNaN(count)) {
    alert("Enter valid count value");
    return false;
  }

  var i = 0;

  while (i < count) {
    result += '#';
    i++;
  }

  alert(result);
}

function calcDevider() {
  var num = parseInt(prompt('Enter your number'));
  var result = '';

  if (isNaN(num)) {
    alert("Enter valid num value");
    return false;
  } //num = 66


  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      // result += i + ', ';
      result = result + i + ', ';
    }
  }

  result += num;
  alert("Your result ".concat(result));
}

function calcKratni() {
  var num = parseInt(prompt('Enter your number'));
  var result = '';
  var j = 0;

  if (isNaN(num)) {
    alert("Enter valid num value");
    return false;
  } //num = 66
  // for(let i=num; i <= 100; i++){
  //     if (i % num === 0) {
  //         // result += i + ', ';
  //         result = result + i + ', ';
  //     }
  // j++;
  // }


  var i = num;

  do {
    result += i + ', ';
    i = i + num;
    j++;
  } while (i <= 100);

  console.log(j);
  alert("Your result ".concat(result));
}