var AllProjects = function() {
    var _fillableGauge = function(element, size,textColor,circleColor,waveColor){

        d3.select(element).call(d3.liquidfillgauge, size, {
            circleColor: circleColor,
            textColor: textColor,
            waveColor: waveColor,
            waveAnimateTime: 2000,
            waveHeight: 0.13,
            waveCount: 1
        });
    };
    var _activePage = function(element){
        element.addClass("active");
    };
    var _initFancyBox = function(){
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };
    return {
        init: function() {
/*            _activePage($(".nav_proc_yetcalled"));
            _activePage($(".nav_proc_yetcalled").parent().parent());*/
            _fillableGauge("#fillgauge1",35.82,"#9f3","#178BCA","#178BCA");
            _fillableGauge("#fillgauge2",24.7,"#9f3","#ec407a","#ff8681");
            _fillableGauge("#fillgauge3",7.9,"#9f3","#4caf50","#43a047");
            _initFancyBox();
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    AllProjects.init();
});













