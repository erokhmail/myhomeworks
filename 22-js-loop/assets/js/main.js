function adultIs() {
    const age = document.getElementById("adult-data").valueAsNumber;
    
    if (age >= 0 && age <= 11 ) {
        document.getElementById("adult-result").innerHTML = '<i style="color: #5dcc1f;">Дитина</i>';
    } else if (age >= 12 && age <= 17 ) {
        document.getElementById("adult-result").innerHTML = '<i style="color: #c1e159;">Підліток</i>';
    } else if (age >= 18 && age <= 59 ) {
        document.getElementById("adult-result").innerHTML = '<i style="color: #ffe700;">Дорослий</i>';
    } else if (age >= 60 && age <= 100 ) {
        document.getElementById("adult-result").innerHTML = '<i style="color: #ffa500;">Пенсіонер</i>';
    } else {
        document.getElementById("adult-result").innerHTML = '<i style="color: #ff0000;">Введіть значення від 0 до 100</i>';
        return ;
    }

}
function specSymbol() {
    const number = document.getElementById("symbol-data").valueAsNumber;
    
    switch(number) {
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
    const numFirst = document.getElementById("num-1").valueAsNumber;
    const numLast = document.getElementById("num-2").valueAsNumber;
    let result = 0;

    if (isNaN(numFirst) && isNaN(numLast)) {
        document.getElementById("num-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById("num-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById('diap-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
        return ;
    } else if (isNaN(numFirst)) {
        document.getElementById("num-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById('diap-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
        return ;
    } else if (isNaN(numLast)) {
        document.getElementById("num-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById('diap-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
        return ;
    } else if (numFirst > numLast) {        
        for (let i=numFirst; i>=numLast; i--) {
            result += i;
            console.log(result);
        }
        document.getElementById("diap-result").innerText = result;
    } 
    for (let i=numFirst; i<=numLast; i++) {
        result += i;
        console.log(result);
    }
    document.getElementById("diap-result").innerText = result; 
}

function biggestDel(){
    const numDelFirst = document.getElementById('del-1').valueAsNumber;
    const numDelSecond = document.getElementById('del-2').valueAsNumber;
    let result = 0;

    if (isNaN(numDelFirst) && isNaN(numDelSecond)) {
        document.getElementById("del-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById("del-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById('del-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
        return ;
    } else if (isNaN(numDelFirst)) {
        document.getElementById("del-1-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById('del-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
        return ;
    } else if (isNaN(numDelSecond)) {
        document.getElementById("del-2-result").innerHTML = '<i style="color: red">введіть коректне значення</i>';
        document.getElementById('del-result').innerHTML = '<i style="color: red">Розрахунок неможливий</i>';
        return ;
    }
    for (let i=1; i<=numDelFirst && i<=numDelSecond; i++){
        if (numDelFirst % i === 0 && numDelSecond % i === 0){
            result = i;
            console.log(result)
        }
    }
    document.getElementById("del-result").innerHTML = result;

}


function calcDevider(){
    const numDevider = document.getElementById('num-devider').valueAsNumber;
    let result = '';

    if(isNaN(numDevider)) {
        document.getElementById("devider-result").innerHTML = '<i style="color: #ff0000;">Введіть коректне значення</i>';
        return ;
    }

    for (let i=1; i<= numDevider/2; i++) {
        if (numDevider % i === 0) {
            result += i + ', ';
            console.log(result);
        }
    }
    result += numDevider;
   
    document.getElementById("devider-result").innerHTML = result;
}

function isPalindrome() {
    let palindrome = document.getElementById('palindrome').valueAsNumber;

    if (isNaN(palindrome) || palindrome < 10000 || palindrome > 99999) {
        document.getElementById("palindrome-result").innerHTML = '<i style="color: #ff0000;">Введіть п’ятирозрядне число</i>';
        return ;
    } else if (palindrome % 10 === 0) {
        document.getElementById("palindrome-result").innerHTML = '<i style="color: #ff0000;">Число не є паліндромом</i>';
        return ;
    }

    let palPart = 0;
    while (palindrome > palPart) {
        palPart *= 10;
        palPart += palindrome % 10;
        palindrome = Math.trunc(palindrome / 10);
        console.log(palindrome, palPart);
    }

    if (palindrome === Math.trunc(palPart / 10) ) {
        document.getElementById("palindrome-result").innerHTML = '<i style="color: #21d55d;">Число є паліндромом</i>';
        return ;
    }
    document.getElementById("palindrome-result").innerHTML = '<i style="color: #ff0000;">Число не є паліндромом</i>';

}


function sumDisc() {
    const sum = document.getElementById('disc').valueAsNumber;
    
    let discount = 0;  

    if (sum < 200 || isNaN(sum)) {
        document.getElementById("disc-result").innerHTML = '<i style="color: #ff0000;">Введіть суму від 200</i>'; 
        return ;
    } else if (sum >= 200 && sum <= 300) {
        discount = (sum - (sum / 100 * 3)).toFixed(2);
    } else if (sum > 300 && sum <= 500){
        discount = (sum - (sum / 100 * 5)).toFixed(2);
    } else if (sum > 500 ){
        discount = (sum - (sum / 100 * 7)).toFixed(2);
    }

    document.getElementById("disc-result").innerHTML = `<i style="color: #5dcc1f;">${discount}</i>`; 

}

function statistic() {
    let i = 1,
        minusResult = 0,
        nulResult = 0,
        parResult = 0,
        neparResult = 0,
        plusResult = 0;

    while (i < 11){
        const num = parseInt(prompt(`Введіть число ${i}`));  

        if (isNaN(num)) {
            alert('Введіть коректне значення');
        } else if (num < 0) {
            minusResult++;
        } else if (num > 0) {
            plusResult++;
        } else {
            nulResult++;
        }

        if (num % 2 === 0 && num !== 0){
            parResult++;
        } else if (num % 2 !== 0 && num !== 0) {
            neparResult++;
        } else {
            nulResult++;
        }
        i++;

        nulRes = nulResult / 2;
    }

    document.getElementById("statistic-result").innerHTML = `<br>
    <i style="color: #5dcc1f;">
        <b>Додатніх чисел:</b> ${plusResult}<br>
        <b>Від’ємних чисел:</b> ${minusResult}<br>
        <b>Нулів:</b> ${nulRes}<br>
        <b>Парних чисел:</b> ${parResult}<br>
        <b>Непарних чисел:</b> ${neparResult}
    </i> `; 
}
//Zagalna strilkovafunctsiya
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
//#Zagalna strilkovafunctsiya

function dayOfWeek() {
    let weekDays = new Date();
    let day = weekDays.getDay();
    let dayName = '';

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

        let dayProp = (confirm(`${dayName}. Хочеш побачити наступний день? `));
        if (dayProp){
            day = (day + 1) % 7;
        } else {
            return ;
        }
    } while (true);
}

function findNumber() {
    let from = 0;
    let to = 100;
    let middle = 50;
    let answer = '';
    
    do {
        middle = Math.round((from + to) / 2);
        answer = prompt(`Більше, менше або дорівнює ${middle}?`);
        if (answer === '>'){
            from = middle;
        }
        if (answer === '<'){
            to = middle;
        }
    } while (answer !== '=')
    alert(`Ваше число ${middle}`);
}

function findData() {
let data = getVal('year-day');
let moun = getVal('year-month');
let year = getVal('year-year');

let newDay = data + 1;
let newMoun = moun;
let newYear = year;

if (isNaN(data) || isNaN(moun) || isNaN(year)) {
    document.getElementById("year-result").innerHTML = '<i style="color: red">Заповніть всі поля</i>';
    return ;
}

switch (moun) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        if (newDay === 32){
            newDay = 1;
            newMoun++;
        };
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        if (newDay === 31){
            newDay = 1;
            newMoun++;
        };
    break;
    case 2:
        if ((year % 4 === 0 && year % 100 !==0) || (year % 400 !== 0)){
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
};

if (newMoun === 13) {
    newMoun = 1;
    newYear++;
}

const addZero = num => num < 10 ? '0' + num : '' + num;
showResult('year-result', `<i style="color: #5dcc1f;">${addZero(newDay)}/${addZero(newMoun)}/${addZero(newYear)}</i>`, 'html');

}

function multipleTable() {
let tBody = '';

    for (let i = 1; i<=10; i++){
        tBody +='<tr>';
        for (let g = 1; g<10; g++){
            mRez = i * g;
            if (g === 1){
                mRez = i;
            } else {
                mRez = i * g;
            }
            tBody += '<td>' + mRez + '</td>';
        }
        tBody +='</tr>';
}
    document.getElementById('table-result').innerHTML = tBody;
}















