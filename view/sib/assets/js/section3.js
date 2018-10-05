$(document).ready(function(){

    //S-Curve Financial
    $(function () {
        Highcharts.setOptions({
            colors: ['#09f','#0a5']
        });
        Highcharts.chart('scurve_physical_1', {
            chart: {
                type: 'spline'
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['W36/17','W37/17','W38/17','W39/17','W40/17','W41/17','W42/17','W43/17','W44/17','W45/17','W46/17','W47/17','W48/17','W49/17','W50/17','W51/17','W52/17', 'W1/18','W2/18','W3/18','W4/18','W5/18','W6/18','W7/18','W8/18','W9/18','W10/18','W11/18','W12/18','W13/18','W14/18','W15/18','W16/18','W18/18','W17/18','W19/18','W20/18','W21/18','W22/18','W23/18','W24/18','W25/18','W26/18','W28/18','W27/18','W29/18','W30/18','W31/18','W32/18','W33/18','W34/18','W35/18','W36/18','W37/18','W38/18','W39/18','W40/18','W41/18','W42/18','W43/18','W44/18','W45/18','W46/18','W47/18','W48/18','W49/18','W50/18','W51/18','W52/18'],
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
                data: [0,0.31,0.37,0.44,0.68,1.12,1.25,1.5,2.06,2.31,3.12,3.87,4.56,5.5,6.32,7.51,8.88,10.45,12.27,13.25,15.5,19.35,23.02,25.18,28.09,30.81,32.78,35.41,38.61,41.89,44.24,48.06,51.19,54.45,56.58,60.09,63.09,66.1,69.23,71.23,74.49,76.24,78.87,80.5,82.75,85.57,87.63,89.7,92.14,94.02,94.96,95.33,95.89,96.14,96.64,96.76,96.89,97.14,97.13,97.26,97.51,97.76,97.63,97.63,98.13,98.63,99.25,100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,3.11,4.48,6,8.07,9.15,11.3,13.22,14.72,16,19,21,23,25,28,29,31,34,37,39,41,44,48,49,52,57.61,60.06,63.16,65.42,67.92,70.68,73.44,76.45,79.58,82.09,85.73,87.98,89.11,90.61,91.37,92.62,93.24,93.74,94.37,94.87,95.37,96.25,96.37,96.75,97,97.62,98.37,99,100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0,0.31,0.37,0.44,0.68,1.12,1.25,1.5,2.06,2.31,3.12,3.87,4.56,5.5,6.32,7.51,8.88,10.45,12.27,13.25,15.5,18.51,21.33,23.02,25.17,26.96,26.97,26.98,26.99,30,30.1,30.2,30.3,30.4,30.5],
                color: '#04B152'
            }],
        });

        Highcharts.chart('scurve_financial_1', {
            chart: {
                type: 'spline'
            },
            title: {
                text: '',
                x: -20 //center
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['W36/17','W37/17','W38/17','W39/17','W40/17','W41/17','W42/17','W43/17','W44/17','W45/17','W46/17','W47/17','W48/17','W49/17','W50/17','W51/17','W52/17', 'W1/18','W2/18','W3/18','W4/18','W5/18','W6/18','W7/18','W8/18','W9/18','W10/18','W11/18','W12/18','W13/18','W14/18','W15/18','W16/18','W18/18','W17/18','W19/18','W20/18','W21/18','W22/18','W23/18','W24/18','W25/18','W26/18','W28/18','W27/18','W29/18','W30/18','W31/18','W32/18','W33/18','W34/18','W35/18','W36/18','W37/18','W38/18','W39/18','W40/18','W41/18','W42/18','W43/18','W44/18','W45/18','W46/18','W47/18','W48/18','W49/18','W50/18','W51/18','W52/18'],
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
                data: [0,0.31,0.37,0.44,0.68,1.12,1.25,1.5,2.06,2.31,3.12,3.87,4.56,5.5,6.32,7.51,8.88,10.45,12.27,13.25,15.5,19.35,23.02,25.18,28.09,30.81,32.78,35.41,38.61,41.89,44.24,48.06,51.19,54.45,56.58,60.09,63.09,66.1,69.23,71.23,74.49,76.24,78.87,80.5,82.75,85.57,87.63,89.7,92.14,94.02,94.96,95.33,95.89,96.14,96.64,96.76,96.89,97.14,97.13,97.26,97.51,97.76,97.63,97.63,98.13,98.63,99.25,100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,3.11,4.48,6,8.07,9.15,11.3,13.22,14.72,16,19,21,23,25,28,29,31,34,37,39,41,44,48,49,52,57.61,60.06,63.16,65.42,67.92,70.68,73.44,76.45,79.58,82.09,85.73,87.98,89.11,90.61,91.37,92.62,93.24,93.74,94.37,94.87,95.37,96.25,96.37,96.75,97,97.62,98.37,99,100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0,0.31,0.37,0.44,0.68,1.12,1.25,1.5,2.06,2.31,3.12,3.87,4.56,5.5,6.32,7.51,8.88,10.45,12.27,13.25,15.5,18.51,21.33,23.02,25.17,26.96,26.97,26.98,26.99,30,30.1,30.2,30.3,30.4,30.5],
                color: '#04B152'
            }],
        });
    });

    $(function () {
        Highcharts.setOptions({
            colors: ['#f66','#ff0','#0a5']
        });
        $('#proj_spi').highcharts({
            chart: {
                renderTo: 'proj_spi'
            },
            title: {
                //text:''
                text: '<p><b>Schedule Performance Index [SPI]</b> is a ratio of the Earned Value [EV] to he Planned Value [PV].</p>',
                style: {
                    fontSize: 10
                }
            },
            tooltip: {
                enabled:false,
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            pane: {
                center: ['50%', '75%'],
                size: '100%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    borderWidth: 0,
                    backgroundColor: 'none',
                    innerRadius: '70%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            yAxis: [{
                lineWidth: 0,
                min: 0,
                max: 90,
                minorTickLength: 0,
                tickLength: 0,
                tickWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                pane: 0

            }],
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                },
                gauge: {
                    dataLabels: {
                        enabled: true
                    },
                    dial: {
                        radius: '100%'
                    }
                }
            },

            series: [{
                type: 'pie',
                name: '',
                innerSize: '50%',
                data: [
                    [50],
                    [25],
                    [25],
                ]
            },{
                type: 'gauge',
                data: [35],
                dial: {
                    rearLength: 0
                },
                dataLabels: {
                    y:-150,
                    borderWidth: 0,
                    style: {
                        fontSize: '20px'
                    },
                    format:'{point.y}%'
                }
            }],
        });
    });

    $(function(){

        var today = new Date(),
            day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
        today.setUTCHours(0);
        today.setUTCMinutes(0);
        today.setUTCSeconds(0);
        today.setUTCMilliseconds(0);
        today = today.getTime();

// THE CHART
        Highcharts.ganttChart('gantt_activity', {
            title: {
                text: ''
            },
            xAxis: {
                currentDateIndicator: true,
                min: today - 3 * day,
                max: today + 18 * day
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    point: {
                        events: {
                            click: function () {
                                /*var options = this.options;*/
                                window.location.href= "milestone.php?kc=Section 3&tid="+this.id;
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Offices',
                data: [{
                    taskName: 'New offices',
                    id: 'new_offices',
                    start: today - 2 * day,
                    end: today + 14 * day
                }, {
                    taskName: 'Prepare office building',
                    id: 'prepare_building',
                    parent: 'new_offices',
                    start: today - (2 * day),
                    end: today + (6 * day),
                    completed: {
                        amount: 0.2
                    }
                }, {
                    taskName: 'Inspect building',
                    id: 'inspect_building',
                    dependency: 'prepare_building',
                    parent: 'new_offices',
                    start: today + 6 * day,
                    end: today + 8 * day
                }, {
                    taskName: 'Passed inspection',
                    id: 'passed_inspection',
                    dependency: 'inspect_building',
                    parent: 'new_offices',
                    start: today + 9.5 * day,
                    milestone: true
                }, {
                    taskName: 'Relocate',
                    id: 'relocate',
                    dependency: 'passed_inspection',
                    parent: 'new_offices',
                    start: today + 10 * day,
                    end: today + 14 * day
                }, {
                    taskName: 'Relocate staff',
                    id: 'relocate_staff',
                    parent: 'relocate',
                    start: today + 10 * day,
                    end: today + 11 * day
                }, {
                    taskName: 'Relocate test facility',
                    dependency: 'relocate_staff',
                    parent: 'relocate',
                    start: today + 11 * day,
                    end: today + 13 * day
                }, {
                    taskName: 'Relocate cantina',
                    dependency: 'relocate_staff',
                    parent: 'relocate',
                    start: today + 11 * day,
                    end: today + 14 * day
                }]
            }, {
                name: 'Product',
                data: [{
                    taskName: 'New product launch',
                    id: 'new_product',
                    start: today - day,
                    end: today + 18 * day
                }, {
                    taskName: 'Development',
                    id: 'development',
                    parent: 'new_product',
                    start: today - day,
                    end: today + (11 * day),
                    completed: {
                        amount: 0.6,
                        fill: '#e80'
                    }
                }, {
                    taskName: 'Beta',
                    id: 'beta',
                    dependency: 'development',
                    parent: 'new_product',
                    start: today + 12.5 * day,
                    milestone: true
                }, {
                    taskName: 'Final development',
                    id: 'finalize',
                    dependency: 'beta',
                    parent: 'new_product',
                    start: today + 13 * day,
                    end: today + 17 * day
                }, {
                    taskName: 'Launch',
                    dependency: 'finalize',
                    parent: 'new_product',
                    start: today + 17.5 * day,
                    milestone: true
                }]
            }]
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
