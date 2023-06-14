//Zagalna functsiya
const getVal = id => document.getElementById(id).valueAsNumber;
function showResult(id, text, mode ='text'){
    if (mode === 'text'){
        document.getElementById(id).innerText = text;
    } else if (mode === 'html'){
        document.getElementById(id).innerHTML = text;
    }
    
}
function prykladxt(){ 
    const num1 = getVal('task_1');
    showResult('tas1_1_esult', `<i style="color: #5dcc1f;">${discount}</i>`, 'html');

}
//#Zagalna functsiya


function argNum() {
    return arguments.length;
}
function argumentCalc() {
    const firstArg = getVal('arg-first');
    const secondArg = getVal('arg-second');

    if (isNaN(firstArg) || isNaN(secondArg)) {
        showResult('arg-result', `<i style="color: red;">Заповніть всі поля</i>`, 'html');
        return ;
    }
    
    result = argNum(firstArg, secondArg);
    showResult('arg-result', `<i style="color: #5dcc1f;">${result}</i>`, 'html');
}



function compareNum(num1, num2){
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    }
    return 0;
}

function compareRes(){
    const number1 = getVal('comp-first');
    const number2 = getVal('comp-second');

    if (isNaN(number1) || isNaN(number2)) {
        showResult('comp-result', `<i style="color: red;">Заповніть всі поля</i>`, 'html');
        return ;
    }

    let result = compareNum(number1, number2);
    showResult('comp-result', `<i style="color: #5dcc1f;">${result}</i>`, 'html');
}

function factorialR(fnum){

    if (fnum > 0){
        return fnum * factorialR(fnum - 1);
    }
        return 1;
}
function factorialRes(){
    const number = getVal('fac-num');
    if (isNaN(number)) {
        showResult('fac-result', `<i style="color: red;">Введіть коректне значення</i>`, 'html');
        return ;
    }

    let result = '';
    result = factorialR(number);

    // for (let i=1; i<=number; i++){
    //     result *= i;
    // }

    showResult('fac-result', `<i style="color: #5dcc1f;">${result}</i>`, 'html');
}

function threeSum(a, b, c) {
    return a*100 + b*10 + c;
}

function threeSumRes() {
    const numOne = getVal('three-one');
    const numTwo = getVal('three-two');
    const numThree = getVal('three-three');

    if (isNaN(numOne) || isNaN(numTwo) || isNaN(numThree) ) {
        showResult('three-result', `<i style="color: red;">Заповніть кожне поле значенням від 1 до 9</i>`, 'html');
        return ;
    }


    let result = threeSum(numOne, numTwo, numThree);

    showResult('three-result', `<i style="color: #5dcc1f;">${result}</i>`, 'html');
}

function square(l, w=l) {
    if (isNaN(l)){
        l=w;
    } else if (isNaN(w)){
        w=l;
    } 
    return l * w;
}
function squareRes(){
    const length = getVal('length');
    const width = getVal('width');

    if (isNaN(length) && isNaN(width)) {
        showResult('square-result', `<i style="color: red;">Заповніть хоча б одне поле</i>`, 'html');
        return ;
    }
    let result = square(length, width);

    showResult('square-result', `<i style="color: #5dcc1f;">${result}</i>`, 'html');
}


function pNum(pNum) {
    let sum = 0;
    for (let i = 1; i < pNum; i++) {

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
    const perNum = getVal('per-number');

    if (isNaN(perNum)) {
        showResult('perfect-result', `<i style="color: red;">Введіть коректне значення</i>`, 'html');
        return ;
    }

    let result = pNum(perNum) ? `<i style="color: #5dcc1f;">досконале число</i>` : `<i style="color: red;">не досконале число</i>`;
    showResult('perfect-result', `${result}`, 'html');

}

function minmaxRes(){
    const minNum = getVal('min-number');
    const maxNum = getVal('max-number');

    if (isNaN(minNum) || isNaN(maxNum)) {
        showResult('minmax-result', `<i style="color: red;">Заповніть всі поля</i>`, 'html');
        return ;
    }

    let result = '';

    for ( let i = minNum; i<=maxNum; i++) {
        if (pNum(i)){
            result += i + ', ';
        }
    }
    showResult('minmax-result', `${result}`, 'html');
}