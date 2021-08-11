'use strict';

const menu = document.querySelector('#menu');
const bg = document.querySelector('#bg');
const nav = document.querySelector('#nav');
menu.addEventListener('click', function(e) {
    console.log(e);
    bg.opacity.value = 1;
    nav.opacity.value = 1;
});