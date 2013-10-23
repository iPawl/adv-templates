$(function () {

    /** Обходим все виджеты в указанном блоке (по умолчанию: body) **/
    $.initWidgets = function (block) {
        $(block || document.body).find('.js-widget')
            .each(function () {
                var hasOnclick = this.onclick; // проверка наличия метода onclick
                var config = hasOnclick ? this.onclick() : {}; // если метод есть, запускаем его
                if (config.widget && $.fn[config.widget]) { // проверка наличия имени указанного виджета
                    $(this)[config.widget](config.options ? config.options : null)
                }
            })
    };

    $.initWidgets(); // поиск и инициализация всех виджетов в элементе
});