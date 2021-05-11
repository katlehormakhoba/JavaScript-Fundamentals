'use strict';

const modal = document.querySelector('.modal');
const ovelay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

for(let x = 0; x < btnOpenModal.length; x++){
    console.log(btnOpenModal[x].textContent)
}