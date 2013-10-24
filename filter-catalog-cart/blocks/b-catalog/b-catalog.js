$.widget('adv.catalog', {
    options: {ajaxUrl: '/ajax/'},
    _create: function () {
        var _this = this;
        $.subscribe('ajax.filter', $.proxy(_this._render, _this));
    },
    _render: function () {
        var _this = this,
            param = arguments[1].param;
        $.destroyWidgets(_this.element);  // удаляем из кеша все данные виджета (события и т.п.)
        _this.element.append('<div class="b-catalog__loader"></div>');
        setTimeout(function () {
            _this.element.load(_this.options.ajaxUrl + param, function () {
                $.initWidgets(_this.element); // инициализируем все виджеты в указанном блоке
            });
        }, 300)
    }
});