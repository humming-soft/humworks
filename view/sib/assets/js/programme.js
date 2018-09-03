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
                data: [ 0,
                    0.35,
                    2.83,
                    4.94,
                    8.14,
                    12.48,
                    17.19,
                    22.02,
                    28.41,
                    35.7,
                    43.79,
                    52.03,
                    60.53,
                    68,
                    75.2,
                    81.12,
                    85.76,
                    88.71,
                    91.65,
                    94.61,
                    96.8,
                    98.27,
                    99.27,
                    100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [ 0,
                    0.15,
                    0.51,
                    0.93,
                    1.76,
                    3.27,
                    5.32,
                    7.99,
                    11.32,
                    15.72,
                    21.19,
                    28.08,
                    34.69,
                    40.81,
                    47.09,
                    54.97,
                    62.83,
                    70.23,
                    76.19,
                    81.03,
                    85.29,
                    89.97,
                    94.43,
                    100
                    ],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [  0,
                    0.14,
                    1.04,
                    2.25,
                    3.82,
                    6.09,
                    9.85,
                    13.28,
                    16.52,
                    17.65,
                    19.05,
                    23.52,
                    28.67,
                    35.5],
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
                data: [ 0, 0.09,
                    0.52,
                    1.91,
                    2.83,
                    5.07,
                    8.83,
                    13.8,
                    19.61,
                    25.44,
                    32.39,
                    40.18,
                    48.97,
                    57.49,
                    66.29,
                    73.97,
                    81.27,
                    86.9,
                    90.73,
                    92.83,
                    95.32,
                    97.92,
                    99.94,
                    100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0.66,1,1,2.03,6.18,11.22,16.57,23,29.33,36.66,44.33,52.87,62.88,70.68,79.37,86.9,
                    90.73,
                    92.83,
                    95.32,
                    97.92,
                    99.94,
                    100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0,
                    0.39,
                    0.77,
                    1.14,
                    2.05,
                    2.79,
                    4.92,
                    8.25,
                    10.92,
                    15.32,
                    19.95,
                    24.86,
                    30.72,
                36.75],
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
                data: [0.2,
                    1.01,
                    3.72,
                    4.56,
                    7.4,
                    11.59,
                    16.74,
                    22.24,
                    27.79,
                    33.73,
                    41.56,
                    50.33,
                    58.93,
                    65.51,
                    71.21,
                    76.98,
                    83.33,
                    87.98,
                    91.21,
                    94.47,
                    97.03,
                    99.1,
                    100,
                    100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,
                    0.14,
                    0.41,
                    1.09,
                    2.04,
                    3.42,
                    5.52,
                    8.07,
                    11.15,
                    15.12,
                    19.79,
                    25.26,
                    30.41,
                    36.45,
                    42.59,
                    50.43,
                    58.66,
                    65.95,
                    71.75,
                    80.35,
                    85.91,
                    91.86,
                    96.27,
                    100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [ 0,
                    0.49,

                    2.08,

                    3.41,

                    4.45,

                    7.78,

                    12.16,

                    16.74,

                    20.38,

                    24.35,

                    28.88,

                    32.5,
                37.8,43.54],
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
                data: [0,0,0.66,1,1,2.63,6.17,7.01,8.36,8.45,7.24,6,5.90,5.90],
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
