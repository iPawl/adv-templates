$.widget('adv.catalog', {
    options: {ajaxUrl: '/ajax/'},
    _create: function () {
        var _this = this;
        $.subscribe('ajax.filter', $.proxy(_this._render, _this));
    },
    _render: function () {
        var _this = this,
            param = arguments[1].param;

        _this.element.append('<div class="b-catalog__loader"></div>');

        setTimeout(function () {
            _this.element.load(_this.options.ajaxUrl + param);
        }, 300)
    }
});