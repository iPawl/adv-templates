$.widget('adv.cart', {
    options: {length: 0, products: []},
    _create: function () {
        $.subscribe('add.product', $.proxy(this._add, this)); // подписываемся на события от блоков продуктов
        this.indicator = this.element.find('.b-cart__sum');
    },
    _add: function () {
        var product = arguments[1];
        console.log(product);
        this.options.products.push(product);
        this._render(this.options.products.length);
    },
    _render: function (length) {
        this.indicator.text(length);
    }
});