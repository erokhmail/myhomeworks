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


var CAR = {
  'Виробник': 'Ford Motor Company',
  'Модель': 'Mustang 5.2 SAT Shelby GT500',
  'Рік випуску': 2019,
  'Середня швидкість': 140,
  'Обсяг паливного баку': 59,
  'Середня витрата палива на 100 км': 9,
  'Водії': ['Андрій', 'Євген', 'Ігор'],
  addDriver: function addDriver() {
    var driver = document.getElementById('d-name').value;

    if (isNaN(driver)) {
      CAR['Водії'].push(driver);
    } else {
      document.getElementById('error-dr').innerHTML = "<p style=\"color: red;\"><i>\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F </i></p>";
    }
  },
  searchDriver: function searchDriver() {
    var driverFind = document.getElementById('d-name-search').value;

    if (!isNaN(driverFind)) {
      return document.getElementById('error-search-dr').innerHTML = "<p style=\"color: red;\"><i>\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0456\u043C'\u044F \u0432\u043E\u0434\u0456\u044F</i></p>";
    }

    if (CAR['Водії'].includes(driverFind)) {
      document.getElementById('error-search-dr').innerHTML = "<p style=\"color: green;\"><i>\u0412\u043E\u0434\u0456\u0439 \u0454 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443</i></p>";
    } else {
      document.getElementById('error-search-dr').innerHTML = "<p style=\"color: red;\"><i>\u0412\u043E\u0434\u0456\u0439 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0439 \u0443 \u0441\u043F\u0438\u0441\u043A\u0443</i></p>";
    }
  },
  showInfo: function showInfo() {
    var rez = "<ul>";

    for (var key in CAR) {
      if (key !== 'showInfo' && key !== 'calcData' && key !== 'addDriver' && key !== 'searchDriver') {
        rez += "<li><strong>".concat(key, ":</strong> ").concat(CAR[key], "</li>");
      }
    }

    rez += "</ul>";
    document.getElementById('avto_info').innerHTML = rez;
  },
  calcData: function calcData() {
    var distance = getVal('distance_km');

    if ((isNaN(distance) || Math.sign(distance) === -1) && distance !== 0) {
      document.getElementById('error').innerHTML = "<p style=\"color: red;\"><i>\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F </i></p>";
    } else {
      var time = 0,
          stopTime = 0,
          fullTime = 0,
          fuelNeed = 0,
          fullTimeH = 0,
          fullTimeM = 0;
      time = distance / CAR['Середня швидкість'];
      stopTime = Math.trunc((time - 1) / 4);
      fullTime = time + stopTime;
      fullTimeH = Math.trunc(fullTime);
      fullTimeM = Math.trunc((fullTime - fullTimeH).toFixed(2) * 60);
      fuelNeed = (distance / 100 * CAR['Середня витрата палива на 100 км']).toFixed(2);

      if (fullTimeH > 0 && fullTimeM > 0 || fullTimeH === 0 && fullTimeM === 0) {
        document.getElementById('calc_time').innerHTML = "<p><strong>\u0427\u0430\u0441 \u0432 \u0434\u043E\u0440\u043E\u0437\u0456: </strong>".concat(fullTimeH, " \u0433\u043E\u0434. ").concat(fullTimeM, " \u0445\u0432.</p>");
      } else if (fullTimeH > 0 && fullTimeM === 0) {
        document.getElementById('calc_time').innerHTML = "<p><strong>\u0427\u0430\u0441 \u0432 \u0434\u043E\u0440\u043E\u0437\u0456: </strong>".concat(fullTimeH, " \u0433\u043E\u0434.</p>");
      } else if (fullTimeH === 0 && fullTimeM > 0) {
        document.getElementById('calc_time').innerHTML = "<p><strong>\u0427\u0430\u0441 \u0432 \u0434\u043E\u0440\u043E\u0437\u0456: </strong>".concat(fullTimeM, " \u0445\u0432.</p>");
      }

      document.getElementById('calc_fuel').innerHTML = "<p><strong>\u041E\u0431\u0441\u044F\u0433 \u0432\u0438\u0442\u0440\u0430\u0447\u0435\u043D\u043E\u0433\u043E \u043F\u0430\u043B\u0438\u0432\u0430: </strong>".concat(fuelNeed, " \u043B</p>");
    }
  }
};

function pullDr() {
  CAR.addDriver();
  CAR.showInfo();
}

CAR.showInfo();