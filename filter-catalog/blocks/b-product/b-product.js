$.widget('adv.product', {
    options: {id: undefined},
    _create: function () {
        this._on(this.element, {
            "click .b-product__add-to-cart": function (e) {
                alert('lol');
                e.preventDefault();
            }
        });
    },
    _destroy: function () {
    }
});