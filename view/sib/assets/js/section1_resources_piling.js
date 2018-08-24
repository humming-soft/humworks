var Section1ResourcesPiling = function() {

    var _resourcePiling = function(element){
        Highcharts.chart({
            chart: {
                zoomType: 'xy',
                renderTo: element
            },
            title: {
                text: 'Resource Histogram and S-curve'
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
                shared: true,
                style: {
                    fontSize: '16px'
                }
            },
            legend: {
                enabled:true,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 40,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Avarage Target',
                type: 'spline',
                color:'#FF0000',
                data: [29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29],
                marker: {
                    enabled: false
                },
                dashStyle:'ShortDash'

            }, {
                name: 'Monthly Resource Levelling (Nos)',
                type: 'column',
                color:'#0070C0',
                data: [10,15,20,30,30,35,35,40,40,40,40,40,35,35,30,30,30,25,15,7],

            }, {
                name: 'Monthly Target (Nos)',
                type: 'column',
                color:'#8de031',
                data: [7,15,17,20,17,34,57,65,65,58,43,34,29,36,28,24,16,10,5,2],

            },{
                name: 'Cumulative Target (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#8600ad',
                data: [7,22,39,59,76,110,167,232,297,355,398,432,461,497,525,549,565,575,580,582],
                /*                marker: {
                                    enabled: false
                                }*/
            },{
                name: 'Cumulative Resource Levelling (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#ffab05',
                data: [10,25,45,75,105,140,175,215,255,295,335,375,410,445,475,505,535,560,575,582]
            }]
        });

    };
    var _resourcePilecap = function(element){
        Highcharts.chart({
            chart: {
                zoomType: 'xy',
                renderTo: element
            },
            title: {
                text: 'Resource Histogram and S-curve'
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
                enabled:true,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 40,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Avarage Target',
                type: 'spline',
                color:'#FF0000',
                data: [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
                marker: {
                    enabled: false
                },
                dashStyle:'ShortDash'

            }, {
                name: 'Monthly Resource Levelling (Nos)',
                type: 'column',
                color:'#0070C0',
                data: [3,5,5,7,9,10,13,12,12,15,8,4,6,3,3,3,3,2,5,3],

            }, {
                name: 'Monthly Target (Nos)',
                type: 'column',
                color:'#8de031',
                data: [1,2,2,3,6,9,15,19,17,15,10,7,5,3,2,2,2,2,2,2],

            },{
                name: 'Cumulative Target (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#8600ad',
                data: [1,2,5,8,14,23,38,57,74,89,99,106,111,114,116,118,120,122,124,126],
                /*                marker: {
                                    enabled: false
                                }*/
            },{
                name: 'Cumulative Resource Levelling (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#ffab05',
                data: [3,8,13,21,29,39,52,64,76,91,99,103,107,110,113,116,119,122,124,126]
            }]
        });

    };
    var _resourcePierColumn = function(element){
        Highcharts.chart({
            chart: {
                zoomType: 'xy',
                renderTo: element
            },
            title: {
                text: 'Resource Histogram and S-curve'
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
                enabled:true,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 40,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Avarage Target',
                type: 'spline',
                color:'#FF0000',
                data: [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
                marker: {
                    enabled: false
                },
                dashStyle:'ShortDash'

            }, {
                name: 'Monthly Resource Levelling (Nos)',
                type: 'column',
                color:'#0070C0',
                data: [2,4,4,4,8,8,12,13,15,10,12,8,5,3,2,2,3,2,2,2],

            }, {
                name: 'Monthly Target (Nos)',
                type: 'column',
                color:'#8de031',
                data: [1,2,3,3,6,8,15,16,17,12,14,11,7,4,2,2,2,2,2,1],

            },{
                name: 'Cumulative Target (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#8600ad',
                data: [1,3,6,9,15,23,38,54,71,83,97,108,115,119,121,123,125,126,128,129],
                /*                marker: {
                                    enabled: false
                                }*/
            },{
                name: 'Cumulative Resource Levelling (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#ffab05',
                data: [2,6,10,14,22,30,42,55,70,80,92,100,105,110,114,118,121,124,126,129]
            }]
        });

    };
    var _resourcePierHead = function(element){
        Highcharts.chart({
            chart: {
                zoomType: 'xy',
                renderTo: element
            },
            title: {
                text: 'Resource Histogram and S-curve'
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
                enabled:true,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 40,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Avarage Target',
                type: 'spline',
                color:'#FF0000',
                data: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
                marker: {
                    enabled: false
                },
                dashStyle:'ShortDash'

            }, {
                name: 'Monthly Resource Levelling (Nos)',
                type: 'column',
                color:'#0070C0',
                data: [2,3,4,4,6,8,8,9,12,6,5,5,5,5,5,3,3,2,2,2],

            }, {
                name: 'Monthly Target (Nos)',
                type: 'column',
                color:'#8de031',
                data: [1,2,4,8,12,14,10,11,8,7,4,4,3,4,4,4,4,3,1,1],

            },{
                name: 'Cumulative Target (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#8600ad',
                data: [1,3,7,15,27,41,51,62,70,77,81,85,88,92,96,100,104,107,108,109],
                /*                marker: {
                                    enabled: false
                                }*/
            },{
                name: 'Cumulative Resource Levelling (Nos)',
                type: 'spline',
                yAxis: 1,
                color:'#ffab05',
                data: [2,5,9,13,19,27,35,44,56,62,67,82,87,92,97,100,103,105,106,109]
            }]
        });

    };
    return {
        init: function() {
            _resourcePiling('bar-line-chart1');
            _resourcePilecap('bar-line-chart2');
            _resourcePierColumn('bar-line-chart3');
            _resourcePierHead('bar-line-chart4');
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    Section1ResourcesPiling.init();
});













