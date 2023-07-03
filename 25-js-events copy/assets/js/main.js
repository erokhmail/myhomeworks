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

window.contacts.addEventListener('submit', function(event){
    event.preventDefault();

    const errors = [];

    let msg = '',
        name = window.name.value,
        email = window.email.value,
        text = window.message.value;

        if(name === ''){
            errors.push('Enter your name');
        }
        if(email === ''){
            errors.push('Enter your email');
        }
        if(errors.length === 0){
            msg =`
            <b>Name: </b>${name}
<b>Email: </b>${email}
 <b>Text: </b>${text}
            `
            sendMessage(msg);
        } else {
            alert(errors.join(' '));
        }

})

async function sendMessage(message){
    const apiToken = "5726680712:AAGxufjvVURAaIXc-a2nxzl5Ovkfk4kxh-g";
    const chatId = "-1001911238406";
    
    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;
    
    // let request = new XMLHttpRequest();
    // request.open("GET", urlString);
    // request.send();       
    // let response = request.response;


    const response = await fetch(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
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
  });
  const resp = await response.json();
  console.log(resp);
    
    // Do what you want with response
}
