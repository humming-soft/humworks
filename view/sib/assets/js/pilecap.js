var KpiDeatilPiling = function() {

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
               /* max:50,*/
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
                /*max:150,*/
                labels: {
                    style: {
                        color:'#005FAD',
                        fontWeight: '600'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true,
                style: {
                    fontSize: '16px'
                }
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
                data: [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                marker: {
                    enabled: false
                },
                dashStyle:'ShortDash'

            }, {
                name: 'KPI Target (Monthly)',
                type: 'column',
                color:'#0070C0',
                data: [1,2,2,3,6,9,15,19,17,15,10,7,5,3,2,2,2,2,2],

            }, {
                name: 'Actual',
                type: 'column',
                color:'#8de031',
                data: [1,1,2,4,4,8,14,22,14,15,15,2,3,2],

            },{
                name: 'Cumulative Target',
                type: 'spline',
                yAxis: 1,
                color:'#8600ad',
                data: [1,3,4,8,14,23,38,57,74,89,99,106,111,114,116,118,120,122,124,126],
                /*                marker: {
                                    enabled: false
                                }*/
            },{
                name: 'Cumulative Actual',
                type: 'spline',
                yAxis: 1,
                color:'#ffab05',
                data: [1,2,4,8,12,20,34,56,70,85,100,102,105,107]
            },{
                type: 'pie',
                name: 'Progress',
                data: [{
                    name: 'Actual',
                    y: 84.92,
                    color: '#6ce472'
                }, {
                    name: 'Remaining',
                    y: 15.08,
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
            _kpiProgressDetail('bar-line-chart2');
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    KpiDeatilPiling.init();
});













