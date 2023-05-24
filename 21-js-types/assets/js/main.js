
function sumResult() {
    const numFirst = 0.1;
    const numSecond = 0.2;

    let result = +((numFirst + numSecond).toFixed(1));
    document.getElementById("sum-result-1").innerText = result;
}

function sumStr() {
    const str = '1';
    const num = 2;

    let result = +((+(str) + num).toFixed());
    document.getElementById("sum-result-2").innerText = result;
}

function fleshRes() {
    const constGb = document.getElementById("flesh-data").valueAsNumber;
    const sizeDefault = 820;
    
    if (isNaN(constGb)) {
        document.getElementById("flesh-result-3").innerHTML = '<i style="color: red">Введіть коректне значення</i>';
        return false;
    }

    let result = Math.floor(constGb * 1024 / sizeDefault);
    document.getElementById("flesh-result-3").innerText = result;

}

function chocolateCalc() {
    const amount = document.getElementById("amount-data").valueAsNumber;
    const cost = document.getElementById("cost").valueAsNumber;
    
    if (isNaN(amount)) {
        document.getElementById("quantity").innerHTML = '<i style="color: red">Введіть коректне значення</i>';
        return false;
    }

    let result = Math.floor(amount / cost);
    document.getElementById("quantity").innerText = result;

    if (isNaN(cost)) {
        document.getElementById("rest-amount").innerHTML = '<i style="color: red">Введіть коректне значення</i>';
        return false;
    }    

    let resultRest = +(amount - (cost * result)).toFixed(2);
    document.getElementById("rest-amount").innerText = resultRest;

}

