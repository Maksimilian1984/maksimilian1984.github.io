

    ymaps.ready(init);
    var myMap;
    var myPlacemark;

function init() {

    myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.938635, 30.323118],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(59.938635, 30.323118), {
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
}

