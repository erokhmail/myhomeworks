"use strict";

function toggleMenu() {
  document.getElementById('hamb-bnt').classList.toggle("is-active");
  document.getElementById('mobile-sidebar').classList.toggle('open');
  document.getElementById('shadow').classList.toggle('show');
}

var lazyLoadInstance = new LazyLoad({});
var wow = new WOW({
  animateClass: "animate__animated"
});
wow.init(); // if (window.matchMedia('(preferes-color-scheme: dark)').matches) {
//     document.children[0].classList.toggle('dark');
//     }
//     window.matchMedia('(preferes-color-scheme: dark)').addEventListener('change', event => {
//     document.children[0].classList.toggle('dark');
//     });