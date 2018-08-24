$(document).ready(function(){


    // line_chart_1

    $(function () {
        Highcharts.setOptions({
            colors: ['#09f','#0a5','#f05']
        });
        Highcharts.chart('bar1', {
            chart: {
                type: 'column'
            },
            title: {
                text: '12C 700m/858m'
            },
            credits:false,
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Senior Engineer','Asst.Engineer ','General Labourers']
            },
            yAxis: {
                title: {
                    text: 'Work (Hours)',
                    align: 'middle'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: ''
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Planned Work',
                data: [32,64,64]

            }, {
                name: 'Actual Work',
                data: [60,16,16]
            },{
                name: 'Variance',
                data: [-28,48,48]
            }]
        });

        Highcharts.chart('bar2', {
            chart: {
                type: 'column'
            },
            title: {
                text: '48C 0m/965m'
            },
            subtitle: {
                text: ''
            },
            credits:false,
            xAxis: {
                categories: ['Senior Engineer','Asst.Engineer','General Labourers','Crane Operatives']
            },
            yAxis: {
                title: {
                    text: 'Work (Hours)',
                    align: 'middle'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: ''
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Planned Work',
                data: [8,32,32,16]

            }, {
                name: 'Actual Work',
                data: [16,40,40,64]
            },{
                name: 'Variance',
                data: [-8,-8,-8,-48]
            }]
        });

        Highcharts.chart('bar3', {
            chart: {
                type: 'column'
            },
            title: {
                text: '48C 0m/965m'
            },
            credits:false,
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Senior Engineer','Asst.Engineer','General Labourers','Ground workers']
            },
            yAxis: {
                title: {
                    text: 'Work (Hours)',
                    align: 'middle'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: ''
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Planned Work',
                data: [8,40,40,32]

            }, {
                name: 'Actual Work',
                data: [8,16,16,64]
            },{
                name: 'Variance',
                data: [0,24,24,-32]
            }]
        });

        Highcharts.chart('bar4', {
            chart: {
                type: 'column'
            },
            title: {
                text: '12C 0m/50m *including duction to pit'
            },
            credits:false,
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Senior Engineer','Asst.Engineer','General Labourers','Crane Operatives']
            },
            yAxis: {
                title: {
                    text: 'Work (Hours)',
                    align: 'middle'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: ''
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Planned Work',
                data: [8,32,32,8]

            }, {
                name: 'Actual Work',
                data: [6,60,60,32]
            },{
                name: 'Variance',
                data: [2,-28,-28,-24]
            }]
        });

        Highcharts.chart('bar5', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Copper 0m/50m *including duction to pit'
            },
            credits:false,
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['Senior Engineer','Asst.Engineer','General Labourers','Crane Operatives']
            },
            yAxis: {
                title: {
                    text: 'Work (Hours)',
                    align: 'middle'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: ''
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Planned Work',
                data: [8,8,32,64]

            }, {
                name: 'Actual Work',
                data: [8,16,16,8]
            },{
                name: 'Variance',
                data: [0,-8,16,56]
            }]
        });
    });
});
