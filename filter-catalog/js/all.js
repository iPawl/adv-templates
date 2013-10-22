$(function () {
    $('.js-widget').each(function () {
        var hasOnclick = this.onclick;
        var config = hasOnclick ? this.onclick() : {};
        if (config.widget&&$.b[config.widget]) {
            $(this)[config.widget](config.options ? config.options : null)
        }
    })
});