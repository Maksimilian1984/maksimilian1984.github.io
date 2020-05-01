
var slider1Toggle1 = document.querySelector('.slider-1__toggle-input-1');
var slider1Toggle2 = document.querySelector('.slider-1__toggle-input-2');
var slider1Toggle3 = document.querySelector('.slider-1__toggle-input-3');
var slider1Button1200 = document.querySelector('.slider__button-1200--1');
var slider2Button1200 = document.querySelector('.slider__button-1200--2');
var reviewsWrapper = document.querySelector('.reviews__wrapper');





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


var index = 1;
var counterUp = function () {
    index++;
    return index
};

var counterDown = function () {
    index--;
    return index
};

slider2Button1200.addEventListener('click', function () {
    if (index >= 3) {
        index = 2
    }
    counterUp();
    console.log(index);
    if (index === 2) {
        reviewsWrapper.classList.add('position-1')
    }
    if (index === 3) {
        reviewsWrapper.classList.add('position-2')
    }

});

slider1Button1200.addEventListener('click', function () {
    if (index <= 1) {
        index = 2
    }
    counterDown();
    console.log(index);
    if (index === 2) {
        reviewsWrapper.classList.remove('position-2')
    }
    if (index === 1) {
        reviewsWrapper.classList.remove('position-1')
    }

});
