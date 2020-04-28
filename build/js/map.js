

    ymaps.ready(init);





function init() {

   var myMap = new ymaps.Map("map", {

        center: [59.938635, 30.323118],

        zoom: 16
    });

  var  myPlacemark = new ymaps.Placemark(myMap.getCenter(59.938635, 30.323118), {
        balloonContentHeader: "HTML Academy",
        balloonContentBody: "",
        balloonContentFooter: "",
        hintContent: ""
    },
    {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './build/img/map-marker.svg',
        // Размеры метки.
        iconImageSize: [36, 35],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
};

