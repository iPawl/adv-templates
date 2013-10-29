$(function () {
    //TODO поработать над упрощением кода
    /** Инициализируем все виджеты в указанном блоке (по умолчанию: body) **/
    $.initWidgets = function (block) {
        $(block || document.body).find('.js-widget')
            .each(function () {
                var hasOnclick = this.onclick, // проверка наличия метода onclick
                    config = hasOnclick ? this.onclick() : {}, // если метод есть, запускаем его
                    $this = $(this);
                if (config.widget && $.fn[config.widget]) { // проверка наличия имени виджета в атрибутах,  наличие виджета в сборке
                    $this[config.widget](config.options ? config.options : null).removeClass('js-widget').addClass('js-widget-inited');
                }
            })
    };

    /** Удаляем все виджеты в указанном блоке (по умолчанию: body) **/
    $.destroyWidgets = function (block) {
        $(block || document.body).find('.js-widget-inited')
            .each(function () {
                var hasOnclick = this.onclick, // проверка наличия метода onclick
                    config = hasOnclick ? this.onclick() : {}, // если метод есть, запускаем его
                    $this = $(this);
                if (config.widget && $.fn[config.widget]) { // проверка наличия имени виджета в атрибутах,  наличие виджета в сборке
                    $this[config.widget]('destroy'); // удаляем из кеша все данные виджета (события и т.п.)
                }
            })
    };

    $.initWidgets(); // поиск и инициализация всех виджетов в элементе
});