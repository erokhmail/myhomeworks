"use strict";

var CART = [{
  id: 1234,
  name: 'Milk',
  price: 30.00,
  qty: 2,
  total: 60.00,
  isBuy: false
}, {
  id: 4545,
  name: 'Bread',
  qty: 3,
  price: 10.00,
  total: 30.00,
  isBuy: false
}, {
  id: 6464,
  name: 'Cheese',
  qty: 1,
  price: 55.00,
  total: 55.00,
  isBuy: false
}];

function addToCard() {
  var name = document.getElementById("prod_name").value;
  var qty = document.getElementById("prod_qty").valueAsNumber;
  var price = document.getElementById("prod_price").valueAsNumber;

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

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
      id: getRandomIntInclusive(1000, 9999),
      name: name,
      // qty: qty,
      qty: qty,
      // price: price,
      price: price,
      total: qty * price,
      isBuy: false
    });
  }

  ;
  document.getElementById("prod_name").value = '';
  document.getElementById("prod_name").value = 1;
  document.getElementById("prod_name").value = ''; // alert('Successfully added to cart');

  toast.success('Successfully added to cart');
  viewCartList(); //console.log(CART)
}

function buyProduct($btn) {
  var tr = $btn.closest('tr');
  var id = +tr.dataset.id;
  var index = CART.findIndex(function (product) {
    return product.id === id;
  });
  CART[index].isBuy = true;
  tr.children[1].innerHTML = '<span class="badge bg-success">Bought</span>';
  tr.children[tr.children.length - 1].innerText = '';
  toast.info('Product is bought'); // viewCartList();
}

function removeProduct($btn) {
  if (confirm('Delete product?')) {
    var id = +$btn.closest('tr').dataset.id;
    var index = CART.findIndex(function (product) {
      return product.id === id;
    });
    CART.splice(index, 1);
    $btn.closest('tr').remove();
    toast.success('Product is removed'); // viewCartList();
  }
}

function changeProductQty($btn) {
  var operator = $btn.dataset.change;
  var tr = $btn.closest('tr');
  var id = +tr.dataset.id;
  var index = CART.findIndex(function (product) {
    return product.id === id;
  });

  if (operator === 'plus') {
    CART[index].qty++;
  } else {
    CART[index].qty--;

    if (CART[index].qty === 0) {
      var removeBtn = tr.querySelector('.btn-danger');
      removeProduct(removeBtn);
      return false;
    }
  }

  CART[index].isBuy = false;
  CART[index].total = CART[index].qty * CART[index].price; // viewCartList();

  tr.querySelector('.form-control').value = CART[index].qty;
  tr.querySelector('.total').innerText = CART[index].total.toFixed(2);
}

function viewCartList() {
  var tBody = '';
  CART.forEach(function (product) {
    tBody += cartListRow(product);
  });
  document.getElementById('cart_tbody').innerHTML = tBody;
  var totals = calcTotal();
  document.getElementById('cartTotal').innerHTML = totals.totalSum.toFixed(2);
  document.getElementById('bought').innerHTML = totals.bought.toFixed(2);
  document.getElementById('notBought').innerHTML = totals.notBought.toFixed(2);
}

;

function cartListRow(product) {
  var badge = product.isBuy ? '<span class="badge bg-success">Bought</span>' : '<span class="badge bg-danger">Didn\'t buy</span>';
  return "        \n        <tr data-id=\"".concat(product.id, "\">\n            <td>").concat(product.name, "</td>\n            <td>").concat(badge, "</td>\n            <td>\n                <div class=\"input-group mb-3\">\n                    <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(this)\" data-change=\"minus\">-</button>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"\" aria-label=\"Example text with two button addons\" value=\"").concat(product.qty, "\" readonly>\n                    <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"changeProductQty(this)\" data-change=\"plus\">+</button>\n                </div>  \n            </td>\n            <td>").concat(product.price.toFixed(2), "</td>\n            <td class=\"total\">").concat(product.total.toFixed(2), "</td>\n            <td>\n            ").concat(!product.isBuy ? '<button type="button" class="btn btn-warning" onclick="buyProduct(this)">Buy</button>' : '', "\n            ").concat(!product.isBuy ? '<button type="button" class="btn btn-danger" onclick="removeProduct(this)">Delete</button>' : '', "\n            </td>\n        </tr>");
}

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