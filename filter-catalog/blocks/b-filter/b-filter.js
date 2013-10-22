$.widget('adv.filter', {
    options: {index: 0},
    _last: null,
    _create: function () {
        var _this = this;
        this.element.find('.b-filter__item').each(function (i) {
            var li = $(this);
            if (_this.options.index === i) {
                li.addClass('_pressed');
                _this._last = li;
            }
            li.attr('data-index', i);
        });
        this._on(this.element, {
            "click .b-filter__item": function (e) {
                var target = $(e.currentTarget);
                target.addClass('_pressed');
                _this._last.removeClass('_pressed');
                _this._last = target;
                $.publish('ajax.filter', {param: target.attr('data-url')});
            },
            "click a": function (e) {
                e.preventDefault();
            }
        });
    },
    _destroy: function () {
    }
});