$(function() {
    var customNouiToolTip = $.Link({
        target: '-tooltip-<div class="noui-tooltip"></div>',
        method: function (value) {
            $(this).html('<span class="text-semibold">' + value + 'Bil</span>');
        }
    });
    $(".noui-slider-tooltip").noUiSlider({
        start: [3, 50],
        connect: true,
        range: {
            'min': 1,
            'max': 100
        },
        serialization: {
            lower: [ customNouiToolTip, $.Link({ target: $("#noui-tooltip-val1") }) ],
            upper: [ customNouiToolTip, $.Link({ target: $("#noui-tooltip-val2") }) ]
        }
    });
});
