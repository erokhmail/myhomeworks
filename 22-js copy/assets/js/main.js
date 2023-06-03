


function viewHash() {
    const count = parseInt(prompt('Enter # count'));
    let result = '';

    if (isNaN(count)) {
        alert("Enter valid count value");
        return false;
    }

    let i = 0;
    while (i<count) {
        result += '#';
        i++;
    }
    alert(result);
}

function calcDevider() {
    
    const num = parseInt(prompt('Enter your number'));
    let result = '';

    if (isNaN(num)) {
        alert("Enter valid num value");
        return false;
    }
//num = 66
    for(let i=1; i <= num/2; i++){
        if (num % i === 0) {
            // result += i + ', ';
            result = result + i + ', ';
        }
    }
    result += num;
    alert(`Your result ${result}`);
}

function calcKratni() {
    const num = parseInt(prompt('Enter your number'));
    let result = '';

    let j = 0;

    if (isNaN(num)) {
        alert("Enter valid num value");
        return false;
    }
//num = 66
    // for(let i=num; i <= 100; i++){
    //     if (i % num === 0) {
    //         // result += i + ', ';
    //         result = result + i + ', ';
    //     }
    // j++;
    // }

    let i = num;
    do {
    result += i + ', ';
    i = i + num;
    j++;

    } while ( i <= 100 ) 
    console.log(j);
    alert(`Your result ${result}`);
}
