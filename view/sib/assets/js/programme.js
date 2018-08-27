$(document).ready(function(){

    //S-Curve Financial
    $(function () {
        Highcharts.setOptions({
            colors: ['#09f','#0a5']
        });
        Highcharts.chart('scurve_overall_1', {
            chart: {
                type: 'spline'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['May/17','Jun/17','Jul/17','Aug/17','Sep/17','Oct/17','Nov/17','Dec/17','Jan/18','Feb/18','Mar/18','Apr/18','May/18','Jun/18','Jul/18','Aug/18','Sep/18', 'Oct/18','Nov/18','Dec/18','Jan/19','Feb/19','Mar/19','Apr/19'],
                labels: {
                    rotation: 270
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                title: {
                    text: 'Percentages',
                    align: 'middle'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Planned',
                data: [0,0.23,0.75,1.60,3.1,5.46,8.9,13.67,22.51,30.56,38.63,47.83,57.04,66.14,73.98,80.70,87.63,93.70,95.78,96.76,97.17,97.63,98.13,100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0.66,1,1,2.03,6.18,11.22,16.57,23,29.33,36.66,44.33,52.87,62.88,70.68,79.37,87.60,91.53,93.78,95.49,96.71,98.33,100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0.15,0.23,0.75,1.60,3.1,5.46,8.95,13.67,20.95,26.36,27.99,30.2,32.45,35.50],
                color: '#04B152'
            }],
        });

        Highcharts.chart('scurve_section_1', {
            chart: {
                type: 'spline'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['May/17','Jun/17','Jul/17','Aug/17','Sep/17','Oct/17','Nov/17','Dec/17','Jan/18','Feb/18','Mar/18','Apr/18','May/18','Jun/18','Jul/18','Aug/18','Sep/18', 'Oct/18','Nov/18','Dec/18','Jan/19','Feb/19','Mar/19','Apr/19'],
                labels: {
                    rotation: 270
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                title: {
                    text: 'Percentages',
                    align: 'middle'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Planned',
                data: [0,0.23,0.75,1.60,3.1,5.46,8.9,13.67,22.51,30.56,38.63,47.83,57.04,66.14,73.98,80.70,87.63,93.70,95.78,96.76,97.17,97.63,98.13,100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0.66,1,1,2.03,6.18,11.22,16.57,23,29.33,36.66,44.33,52.87,62.88,70.68,79.37,87.60,91.53,93.78,95.49,96.71,98.33,100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0.15,0.23,0.75,1.60,3.1,2.46,4.95,6.67,9.40,11.58,13.90,17.72,24.80,33.3],
                color: '#04B152'
            }],
        });

        Highcharts.chart('scurve_section_2', {
            chart: {
                type: 'spline'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['May/17','Jun/17','Jul/17','Aug/17','Sep/17','Oct/17','Nov/17','Dec/17','Jan/18','Feb/18','Mar/18','Apr/18','May/18','Jun/18','Jul/18','Aug/18','Sep/18', 'Oct/18','Nov/18','Dec/18','Jan/19','Feb/19','Mar/19','Apr/19'],
                labels: {
                    rotation: 270
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                title: {
                    text: 'Percentages',
                    align: 'middle'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Planned',
                data: [0,0.23,0.75,1.60,3.1,5.46,8.9,13.67,22.51,30.56,38.63,47.83,57.04,66.14,73.98,80.70,87.63,93.70,95.78,96.76,97.17,97.63,98.13,100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0.66,1,1,2.03,6.18,11.22,16.57,23,29.33,36.66,44.33,52.87,62.88,70.68,79.37,87.60,91.53,93.78,95.49,96.71,98.33,100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0.15,0.23,0.75,1.60,1.70,1.80,2.35,3.67,4.95,5.36,8.99,16.2,28.10,36.56],
                color: '#04B152'
            }],
        });

        Highcharts.chart('scurve_section_3', {
            chart: {
                type: 'spline'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['May/17','Jun/17','Jul/17','Aug/17','Sep/17','Oct/17','Nov/17','Dec/17','Jan/18','Feb/18','Mar/18','Apr/18','May/18','Jun/18','Jul/18','Aug/18','Sep/18', 'Oct/18','Nov/18','Dec/18','Jan/19','Feb/19','Mar/19','Apr/19'],
                labels: {
                    rotation: 270
                }
            },
            yAxis: {
                min: 0,
                max: 100,
                tickInterval: 10,
                title: {
                    text: 'Percentages',
                    align: 'middle'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#333'
                }],
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Planned',
                data: [0,0.23,0.75,1.60,3.1,5.46,8.9,13.67,22.51,30.56,38.63,47.83,57.04,66.14,73.98,80.70,87.63,93.70,95.78,96.76,97.17,97.63,98.13,100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0.66,1,1,2.03,6.18,11.22,16.57,23,29.33,36.66,44.33,52.87,62.88,70.68,79.37,87.60,91.53,93.78,95.49,96.71,98.33,100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0,0,0.66,1,1,2.63,6.17,11.01,12.36,9.86,7.24,6,5.90,5.90],
                color: '#04B152'
            }],
        });
    });


    function convertIntoMKB(labelValue) {

        // Nine Zeroes for Billions
        r = Math.abs(Number(labelValue)) >= 1.0e+9

            ? Math.abs(Number(labelValue)) / 1.0e+9
            // Six Zeroes for Millions
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? Math.abs(Number(labelValue)) / 1.0e+6
                // Three Zeroes for Thousands
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? Math.abs(Number(labelValue)) / 1.0e+3

                    : Math.abs(Number(labelValue));

        return parseInt(r);

    }

});
