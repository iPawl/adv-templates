$.widget('adv.product', {
    options: {id: undefined},
    _create: function () {
        this._on(this.element, {
            "click .b-product__add-to-cart": function (e) {
                $.publish('add.product', {id: this.options.id}); // публикуем событие  добавлении товара
                console.log(this.options.id);
                e.preventDefault();
            }
        });
    }
});