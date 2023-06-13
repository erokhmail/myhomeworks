"use strict";

var CART = [{
  name: 'Milk',
  price: 30.00,
  qty: 2,
  total: 60.00,
  isBuy: false
}, {
  name: 'Apple',
  price: 10.25,
  qty: 3,
  total: 30.75,
  isBuy: false
}];

function addToCard() {
  var name = document.getElementById("prod_name").value;
  var qty = document.getElementById("prod_qty").valueAsNumber;
  var price = document.getElementById("prod_price").valueAsNumber;

  if (name === '' || isNaN(price) || isNaN(qty)) {
    //  alert("Enter product info");
    toast.danger("Enter product info");
    return;
  }

  var ind = CART.findIndex(function (el) {
    return el.name === name;
  });

  if (ind !== -1) {
    CART[ind].qty += qty;
    CART[ind].total += CART[ind].qty * CART[ind].price;
    CART[ind].isBuy = false;
  } else {
    CART.push({
      // name: name,
      name: name,
      // qty: qty,
      qty: qty,
      // price: price,
      price: price,
      total: qty * price,
      isBuy: false
    });
  }

  document.getElementById("prod_name").value = '';
  document.getElementById("prod_name").value = 1;
  document.getElementById("prod_name").value = ''; // alert('Successfully added to cart');

  toast.success('Successfully added to cart');
  viewCartList();
  console.log(CART);
}

function buyProduct(index) {
  CART[index].isBuy = true;
  toast.info('Product is bought');
  viewCartList();
}

function removeProduct(index) {
  if (confirm('Delete product?')) {
    CART.splice(index, 1);
    toast.info('Product removed');
    viewCartList();
  }
}

function changeProductQty(index, operator) {
  if (operator === 'plus') {
    CART[index].qty++;
  } else {
    CART[index].qty--;

    if (CART[index].qty === 0) {
      removeProduct(index);
      return;
    }
  }

  CART[index].isBuy = false;
  CART[index].total = CART[index].qty * CART[index].price;
  viewCartList();
}

function viewCartList() {
  var tBody = '';
  CART.forEach(function (product, index) {
    var badge = product.isBuy ? '<span class="badge bg-success">Bought</span>' : '<span class="badge bg-danger">Didn\'t buy</span>';
    tBody += "        \n        <tr>\n            <td>".concat(product.name, "</td>\n            <td>").concat(badge, "</td>\n            <td>\n                <div class=\"input-group mb-3\">\n                    <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(").concat(index, ",'minus')\">-</button>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"\" aria-label=\"Example text with two button addons\" value=\"").concat(product.qty, "\" readonly>\n                    <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(").concat(index, ",'plus')\">+</button>\n                </div>  \n            </td>\n            <td>").concat(product.price.toFixed(2), "</td>\n            <td>").concat(product.total.toFixed(2), "</td>\n            <td>\n            ").concat(!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(' + index + ')">Buy</button>' : '', "\n            ").concat(!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(' + index + ')">Delete</button>' : '', "\n            </td>\n        </tr>");
  });
  document.getElementById('cart_tbody').innerHTML = tBody;
  var totals = calcTotal();
  document.getElementById('cartTotal').innerHTML = totals.totalSum.toFixed(2);
  document.getElementById('bought').innerHTML = totals.bought.toFixed(2);
  document.getElementById('notBought').innerHTML = totals.notBought.toFixed(2);
}

;
viewCartList();

function calcTotal() {
  // return CART.reduce((acc, val) => acc + val.total, 0);
  var bought = 0,
      notBought = 0,
      totalSum = 0; // CART.forEach((product) =>{
  //     totalSum += product.total;
  //     //if(product.isBuy === true)
  //     if(product.isBuy) {
  //         bought += product.total;
  //     } else {
  //         notBought += product.total;
  //     }
  // } );
  //sproschuemo shob ne vykonuvaty 3 tsyklichni operatsiyi skladannya

  CART.forEach(function (product) {
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
  return {
    bought: bought,
    notBought: notBought,
    totalSum: totalSum
  };
} // function toast(text = 'Hello', type = 'info') {
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