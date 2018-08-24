var KpiDeatil = function() {

    var _kpiProgressDetail = function(element){
        Highcharts.chart({
            chart: {
                zoomType: 'xy',
                renderTo: element
            },
            title: {
                text: null
            },
            credits:false,
            xAxis: [{
                categories: ['May-17','Jun-17','Jul-17','Aug-17','Sep-17','Oct-17','Nov-17','Dec-17','Jan-18','Feb-18','Mar-18','Apr-18','May-18','Jun-18','Jul-18','Aug-18','Sep-18','Oct-18','Nov-18','Dec-18'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    style: {
                        color: Highcharts.getOptions().colors[1],
                        fontWeight: '600'
                    }
                },
                max:140,
                title: {
                    enabled: false,
                    text: 'Actual',
                    style: {
                        color: Highcharts.getOptions().colors[1],
                        fontWeight: '600'
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Cumulative',
                    style: {
                        color:'#005FAD',
                        fontWeight: '600'
                    }
                },
                max:700,
                labels: {
                    style: {
                        color:'#005FAD',
                        fontWeight: '600'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                enabled:false,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Baseline (Monthly)',
                type: 'spline',
                color:'#FF0000',
                data: [29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],
                marker: {
                    enabled: false
                },
                dashStyle:'ShortDash'

            }, {
                name: 'KPI Target (Monthly)',
                type: 'column',
                color:'#0070C0',
                data: [7,15,17,20,17,34,57,65,65,58,43,34,29,36,28,24,16,10,5,2],

            }, {
                name: 'Actual',
                type: 'column',
                color:'#8de031',
                data: [6,13,16,20,13,36,51,71,69,54,20],

            },{
                name: 'Cumulative Target',
                type: 'spline',
                yAxis: 1,
                color:'#005FAD',
                data: [7,22,39,59,76,110,167,232,297,355,398,432,461,497,525,549,565,575,580,582],
/*                marker: {
                    enabled: false
                }*/
            },{
                name: 'Cumulative Actual',
                type: 'spline',
                yAxis: 1,
                color:'#8de031',
                data: [6,19,35,55,68,104,155,226,295,349,369]
            },{
                type: 'pie',
                name: 'Progress',
                data: [{
                    name: 'Actual',
                    y: 63.40,
                    color: '#6ce472'
                }, {
                    name: 'Remaining',
                    y: 36.60,
                    color: '#eae7e7'
                }],
                innerSize: '70%',
                center: [100, 40],
                size: 100,
                showInLegend: true,
                tooltip: {
                    valueSuffix: '%'
                },
                dataLabels: {
                    enabled: false
                }
            }]
        });

    };
    return {
        init: function() {
            _kpiProgressDetail('bar-line-chart1');
            _kpiProgressDetail('bar-line-chart2');
            _kpiProgressDetail('bar-line-chart3');
            _kpiProgressDetail('bar-line-chart4');
            _kpiProgressDetail('bar-line-chart5');
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    KpiDeatil.init();
});













