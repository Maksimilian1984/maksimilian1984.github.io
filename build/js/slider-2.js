var priseTable = document.querySelector('.prise__table');

var slider2Toggle1 = document.querySelector('.slider-2__toggle-input-1');
var slider2Toggle2 = document.querySelector('.slider-2__toggle-input-2');
var slider2Toggle3 = document.querySelector('.slider-2__toggle-input-3');


slider2Toggle2.addEventListener('change', function () {
    priseTable.classList.add('prise__table--p-2');
    priseTable.classList.remove('prise__table--p-3');

})

slider2Toggle3.addEventListener('change', function () {
    priseTable.classList.add('prise__table--p-3');
    priseTable.classList.remove('prise__table--p-2');

})

slider2Toggle1.addEventListener('change', function () {
    priseTable.classList.remove('prise__table--p-3');
    priseTable.classList.remove('prise__table--p-2');

})