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


let CAR = {
    'Виробник': 'Ford Motor Company',
    'Модель': 'Mustang 5.2 SAT Shelby GT500',
    'Рік випуску': 2019,
    'Середня швидкість': 140,
    'Обсяг паливного баку': 59,
    'Середня витрата палива на 100 км': 9,
    'Водії': ['Андрій', 'Євген', 'Ігор'],
    addDriver: function addDriver() {
        const driver = document.getElementById('d-name').value;
        if (isNaN(driver)) {
            CAR['Водії'].push(driver);
                 
        } else {
            document.getElementById('error-dr').innerHTML = `<p style="color: red;"><i>Вкажіть коректне значення </i></p>`;  
        }
    },
    searchDriver: function searchDriver() {
        const driverFind = document.getElementById('d-name-search').value;
       
        if (!isNaN(driverFind)) {
            return document.getElementById('error-search-dr').innerHTML = `<p style="color: red;"><i>Вкажіть ім'я водія</i></p>`;  
        }
        if (CAR['Водії'].includes(driverFind)) {        
            document.getElementById('error-search-dr').innerHTML = `<p style="color: green;"><i>Водій є у списку</i></p>`;           
        } else {
            document.getElementById('error-search-dr').innerHTML = `<p style="color: red;"><i>Водій відсутній у списку</i></p>`;  
        }
    },
    showInfo: function showInfo() {
        let rez = `<ul>`;
            for (let key in CAR) {
                if (key !== 'showInfo' && key !== 'calcData' && key !== 'addDriver' && key !== 'searchDriver'){
                rez += `<li><strong>${key}:</strong> ${CAR[key]}</li>`
            }
        }
        rez += `</ul>`;
        document.getElementById('avto_info').innerHTML = rez;
    },
    calcData: function calcData() {
        const distance = getVal('distance_km');      
        if ((isNaN(distance) || Math.sign(distance) === -1) && distance !== 0 ) {
            document.getElementById('error').innerHTML = `<p style="color: red;"><i>Вкажіть коректне значення </i></p>`;  
        } else {
        let time = 0,
                stopTime = 0,
                fullTime = 0,
                fuelNeed = 0,
                fullTimeH = 0,
                fullTimeM = 0;

            time = distance / CAR['Середня швидкість'];
            stopTime = Math.trunc((time -1) /4);
            fullTime = time + stopTime;
            fullTimeH = Math.trunc(fullTime);
            fullTimeM = Math.trunc((fullTime - fullTimeH).toFixed(2) * 60);

            fuelNeed = (distance / 100 * CAR['Середня витрата палива на 100 км']).toFixed(2);

            if ((fullTimeH > 0 && fullTimeM > 0) || (fullTimeH === 0 && fullTimeM === 0)){
                document.getElementById('calc_time').innerHTML = `<p><strong>Час в дорозі: </strong>${fullTimeH} год. ${fullTimeM} хв.</p>`;
            } else if (fullTimeH > 0 && fullTimeM === 0){
                document.getElementById('calc_time').innerHTML = `<p><strong>Час в дорозі: </strong>${fullTimeH} год.</p>`;
            } else if (fullTimeH === 0 && fullTimeM > 0){
                document.getElementById('calc_time').innerHTML = `<p><strong>Час в дорозі: </strong>${fullTimeM} хв.</p>`;
            } 
            
            document.getElementById('calc_fuel').innerHTML = `<p><strong>Обсяг витраченого палива: </strong>${fuelNeed} л</p>`;
        }
    }
}


function pullDr() {
    CAR.addDriver();
    CAR.showInfo();
}

CAR.showInfo();


