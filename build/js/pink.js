const buttonBurger = document.querySelector('.button-toggle');
const menu = document.querySelector('.menu');
const pageHeaderWrapper = document.querySelector('.page-header__wrapper-toggle');
const buttonToggleItem1 = document.querySelector('.button-toggle__item-1');
const buttonToggleItem2 = document.querySelector('.button-toggle__item-2');
const buttonToggleItem3 = document.querySelector('.button-toggle__item-3');



 buttonBurger.addEventListener('click', function (evt) {
       evt.preventDefault();
       menu.classList.toggle('menu--visible');
       pageHeaderWrapper.classList.toggle('page-header__wrapper-toggle--when-open-menu');
       buttonToggleItem1.classList.toggle('button-toggle__item-1--1')
       buttonToggleItem2.classList.toggle('button-toggle__item-2--1');
       buttonToggleItem3.classList.toggle('button-toggle__item-3--1');



 })


