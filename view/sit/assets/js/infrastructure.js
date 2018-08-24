var Infrastructure = function() {


    var _fillableGauge = function(element, size){
        var config1 = liquidFillGaugeDefaultSettings();
        config1.textColor = "#9f3";
        config1.waveAnimateTime = 2000;
        config1.waveHeight = 0.13;
        config1.waveCount = 1;
        var gauge1 = loadLiquidFillGauge(element, size, config1);
    };

    return {
        init: function() {
            _fillableGauge("infra_adv_pgs",30.9);
            _fillableGauge("infra_civil_gs_pgs",80.9);
            _fillableGauge("infra_civil_dt_pgs",44);
            _fillableGauge("infra_cp_pgs",29);
            _fillableGauge("infra_pr_pgs",100);
            _fillableGauge("infra_bus_depot_pgs",39.9);
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    Infrastructure.init();
});













