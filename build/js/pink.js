'use strict';

var buttonBurger = document.querySelector('.button-toggle');
var menu = document.querySelector('.menu');
var pageHeaderWrapper = document.querySelector('.page-header__wrapper-toggle');
var buttonToggleItem1 = document.querySelector('.button-toggle__item-1');
var buttonToggleItem2 = document.querySelector('.button-toggle__item-2');
var buttonToggleItem3 = document.querySelector('.button-toggle__item-3');


 buttonBurger.addEventListener('click', function (evt) {
       evt.preventDefault();
       menu.classList.toggle('menu--visible');
       pageHeaderWrapper.classList.toggle('page-header__wrapper-toggle--when-open-menu');
       buttonToggleItem1.classList.toggle('button-toggle__item-1--1');
       buttonToggleItem2.classList.toggle('button-toggle__item-2--1');
       buttonToggleItem3.classList.toggle('button-toggle__item-3--1');
 });


var inputSurname = document.querySelector('#input-surname');
var inputName = document.querySelector('#input-name');
var inputPatronymic = document.querySelector('#input-patronymic');
var inputPhone = document.querySelector('#input-phone');
var inputEmail = document.querySelector('#input-email');
var formButton = document.querySelector('.page-form__button');
var modalWindowError = document.querySelector('.modal-window-error');
var modalWindowMessage = document.querySelector('.modal-window-message');
var modalWindowErrorClose = document.querySelector('.modal-window-error__close');
var modalWindowMessageClose = document.querySelector('.modal-window-message__close');



formButton.addEventListener('click', function () {
    if (inputEmail.validity.valid && inputName.validity.valid && inputPatronymic.validity.valid && inputPhone.validity.valid && inputSurname.validity.valid) {
        modalWindowMessage.classList.add('modal-window-visible');
    } else {
        modalWindowError.classList.add('modal-window-visible');
    }
    if(!inputEmail.validity.valid) {
        inputEmail.setCustomValidity('Введите адрес формата name@mail.ru');
        inputEmail.classList.add('error');
    }
    if(!inputPhone.validity.valid) {
        inputPhone.setCustomValidity('Введите телефон в формате 0-000-000-00-00');
        inputPhone.classList.add('error');
    }
    if(!inputName.validity.valid) {
        inputName.classList.add('error');
    }
    if(!inputSurname.validity.valid) {
        inputSurname.classList.add('error');
    }
    if(!inputPatronymic.validity.valid) {
        inputPatronymic.classList.add('error');
    }
});

modalWindowErrorClose.addEventListener('click', function () {
    modalWindowError.classList.remove('modal-window-visible');
    inputPatronymic.classList.remove( 'error');
    inputEmail.classList.remove( 'error');
    inputName.classList.remove( 'error');
    inputSurname.classList.remove( 'error');
    inputPhone.classList.remove( 'error');
    });

modalWindowMessageClose.addEventListener('click', function () {
    modalWindowMessage.classList.remove('modal-window-visible');

});





