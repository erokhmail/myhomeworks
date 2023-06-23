let CART = [
    {
        id:1234,
       name: 'Milk',
       price: 30.00,
       qty: 2,
       total: 60.00,
       isBuy: false
    },
    {
        id:4545,
        name: 'Bread',
        qty: 3,
        price: 10.00,
        total: 30.00,
        isBuy: false,
      },
      {
        id:6464,
        name: 'Cheese',
        qty: 1,
        price: 55.00,
        total: 55.00,
        isBuy: false,
      }
];

function addToCard() {
    const name = document.getElementById("prod_name").value;
    const qty = document.getElementById("prod_qty").valueAsNumber;
    const price = document.getElementById("prod_price").valueAsNumber;
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

if (name === '' || isNaN(price) || isNaN(qty)){
//  alert("Enter product info");
 toast.danger("Enter product info");
 return ;
}

const ind = CART.findIndex(el => el.name === name);

if(ind !== -1){
    CART[ind].qty += qty;
    CART[ind].total += CART[ind].qty * CART[ind].price;
    CART[ind].isBuy = false;
} else {
    CART.push({
        // name: name,
        id: getRandomIntInclusive(1000,9999),
        name,
        // qty: qty,
        qty,
        // price: price,
        price,
        total: qty * price,
        isBuy: false
    });
};
    document.getElementById("prod_name").value = '';
    document.getElementById("prod_name").value = 1;
    document.getElementById("prod_name").value = '';

    // alert('Successfully added to cart');
toast.success('Successfully added to cart');

    viewCartList();
    //console.log(CART)
}


function buyProduct($btn) {
    const tr = $btn.closest('tr');
    const id = +tr.dataset.id;
    const index = CART.findIndex((product) => product.id === id);

    CART[index].isBuy = true;

    tr.children[1].innerHTML = '<span class="badge bg-success">Bought</span>';
    tr.children[tr.children.length - 1].innerText = '';
    
    toast.info('Product is bought');

    // viewCartList();
}

function removeProduct($btn) {
    if (confirm('Delete product?')) {
        const id = +$btn.closest('tr').dataset.id;
        const index = CART.findIndex((product) => product.id === id);
        CART.splice(index, 1);
    
        $btn.closest('tr').remove();
        toast.success('Product is removed');

       // viewCartList();
    }
}

function changeProductQty($btn) {
    const operator = $btn.dataset.change;
    const tr = $btn.closest('tr');
    const id = +tr.dataset.id;
    const index = CART.findIndex((product) => product.id === id);


    if (operator === 'plus') {
        CART[index].qty++;
    } else {
        CART[index].qty--;
        if (CART[index].qty === 0) {
            const removeBtn = tr.querySelector('.btn-danger');
            removeProduct(removeBtn);
            return false;
        }
    }
    CART[index].isBuy = false;
    CART[index].total = CART[index].qty * CART[index].price;

    // viewCartList();
    tr.querySelector('.form-control').value = CART[index].qty;
    tr.querySelector('.total').innerText = CART[index].total.toFixed(2);
}

function viewCartList() {
    let tBody = '';

    CART.forEach(function(product){
        tBody += cartListRow(product);
    });

    document.getElementById('cart_tbody').innerHTML = tBody; 
    const totals = calcTotal();
    document.getElementById('cartTotal').innerHTML = (totals.totalSum).toFixed(2);
    document.getElementById('bought').innerHTML = (totals.bought).toFixed(2);
    document.getElementById('notBought').innerHTML = (totals.notBought).toFixed(2);
};


function cartListRow(product){
    let badge = product.isBuy ? '<span class="badge bg-success">Bought</span>' : '<span class="badge bg-danger">Didn\'t buy</span>';
        return `        
        <tr data-id="${product.id}">
            <td>${product.name}</td>
            <td>${badge}</td>
            <td>
                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" onclick="changeProductQty(this)" data-change="minus">-</button>
                    <input type="number" class="form-control" placeholder="" aria-label="Example text with two button addons" value="${product.qty}" readonly>
                    <button class="btn btn-outline-secondary" type="button" onclick="changeProductQty(this)" data-change="plus">+</button>
                </div>  
            </td>
            <td>${product.price.toFixed(2)}</td>
            <td class="total">${product.total.toFixed(2)}</td>
            <td>
            ${!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(this)">Buy</button>' : ''}
            ${!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(this)">Delete</button>' : ''}
            </td>
        </tr>`
}

viewCartList();

function calcTotal() {
    // return CART.reduce((acc, val) => acc + val.total, 0);
    let bought = 0,
        notBought = 0,
        totalSum = 0;

    // CART.forEach((product) =>{
    //     totalSum += product.total;
    //     //if(product.isBuy === true)
    //     if(product.isBuy) {
    //         bought += product.total;
    //     } else {
    //         notBought += product.total;
    //     }
    // } );
    //sproschuemo shob ne vykonuvaty 3 tsyklichni operatsiyi skladannya
    CART.forEach((product) => {
        //if(product.isBuy === true)
        // if(product.isBuy) {
        //     bought += product.total;
        // } else {
        //     notBought += product.total;
        // }
        //extra optymizatsiya
       product.isBuy ? bought += product.total : notBought += product.total;
    });

    totalSum = bought + notBought;
    return {bought, notBought, totalSum};
}


// function toast(text = 'Hello', type = 'info') {
//     /*beforebegin */
//     if(document.getElementById('my-toast') !== null){
//         document.getElementById('my-toast').remove();
//     }
//     document.body.insertAdjacentHTML('afterbegin', `<div id="my-toast" class="my-toast ${type}">${text}</div>`)

//     setTimeout(function(){
//         if(document.getElementById('my-toast') !== null){
//             document.getElementById('my-toast').remove();
//         }
//     }, 3000)
// }
