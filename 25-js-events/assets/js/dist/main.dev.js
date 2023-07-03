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


var divTextTransform = document.createElement('div');
divTextTransform.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consectetur, eligendi ratione soluta hic sapiente, cumque possimus perspiciatis eos perferendis asperiores eaque quis sunt veritatis praesentium quae quod tempora dolores.'; // console.log(divTextTransform);

document.querySelector('.card-body').prepend(divTextTransform);
var areaText = document.createElement('textarea');
window.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.code === 'KeyS') {
    event.preventDefault();
    areaText.style.width = '100%';
    areaText.style.padding = '20px';
    areaText.placeholder = 'Lorem ipsum dolor sit';
    areaText = divTextTransform.replaceWith(areaText);
    areaText = document.createElement('textarea');
    areaText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consectetur, eligendi ratione soluta hic sapiente, cumque possimus perspiciatis eos perferendis asperiores eaque quis sunt veritatis praesentium quae quod tempora dolores.';
    console.log(areaText);
  }

  if (event.ctrlKey && event.code === 'KeyE') {
    event.preventDefault();
    console.log('KeyE');
    areaText = areaText.replaceWith('div');
    console.log(areaText); // divTextTransform.replaceWith('div');
    // return ;
  }
});