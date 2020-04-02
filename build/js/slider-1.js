
const slider1Toggle1 = document.querySelector('.slider-1__toggle-input-1');
const slider1Toggle2 = document.querySelector('.slider-1__toggle-input-2');
const slider1Toggle3 = document.querySelector('.slider-1__toggle-input-3');
const slider1Button1200 = document.querySelector('.slider__button-1200--1');
const slider2Button1200 = document.querySelector('.slider__button-1200--2');
const reviewsWrapper = document.querySelector('.reviews__wrapper');




slider1Toggle2.addEventListener('change', function () {
    reviewsWrapper.classList.add('reviews__wrapper--1');
    reviewsWrapper.classList.remove('reviews__wrapper--2');

});
slider1Toggle3.addEventListener('change', function () {
    reviewsWrapper.classList.add('reviews__wrapper--2');
    reviewsWrapper.classList.remove('reviews__wrapper--1');

});
slider1Toggle1.addEventListener('change', function () {
    reviewsWrapper.classList.remove('reviews__wrapper--1');
    reviewsWrapper.classList.remove('reviews__wrapper--2');

});


