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


window.contacts.addEventListener('submit', function (event) {
  event.preventDefault();
  var errors = [];
  var msg = '',
      name = window.name.value,
      email = window.email.value,
      text = window.message.value;

  if (name === '') {
    errors.push('Enter your name');
  }

  if (email === '') {
    errors.push('Enter your email');
  }

  if (errors.length === 0) {
    msg = "\n            <b>Name: </b>".concat(name, "\n<b>Email: </b>").concat(email, "\n <b>Text: </b>").concat(text, "\n            ");
    sendMessage(msg);
  } else {
    alert(errors.join(' '));
  }
});

function sendMessage(message) {
  var apiToken, chatId, urlString, response, resp;
  return regeneratorRuntime.async(function sendMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiToken = "5726680712:AAGxufjvVURAaIXc-a2nxzl5Ovkfk4kxh-g";
          chatId = "-1001911238406";
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage?chat_id=").concat(chatId, "&text=").concat(message, "&parse_mode=HTML"); // let request = new XMLHttpRequest();
          // request.open("GET", urlString);
          // request.send();       
          // let response = request.response;

          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(apiToken, "/sendMessage"), {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: 'HTML'
            })
          }));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          resp = _context.sent;
          console.log(resp); // Do what you want with response

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}