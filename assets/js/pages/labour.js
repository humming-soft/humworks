$(document).ready(function(){
    $(function () {
            var options = {
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'No. of Labours'
                    }
                },
                tooltip: {
                    shared: true
                    /*valueSuffix: ' '*/
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        series: {
                            stacking: 'normal',
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true
                            }
                        }
                    }, areaspline: {
                        fillOpacity: 0.5,
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                series: [{
                    type: 'areaspline',
                    name: 'Local',
                    data: [{
                        name: 2011,
                        y: 500,
                        drilldown: 'local2011'
                    }, {
                        name: 2012,
                        y: 400,
                        drilldown: 'local2012'
                    }, {
                        name: 2013,
                        y: 800,
                        drilldown: 'local2013'
                    }, {
                        name: 2014,
                        y: 600,
                        drilldown: 'local2014'
                    }, {
                        name: 2015,
                        y: 500,
                        drilldown: 'local2015'
                    }, {
                        name: 2016,
                        y: 400,
                        drilldown: 'local2016'
                    }, {
                        name: 2017,
                        y: 1000,
                        drilldown: 'local2017'
                    }, {
                        name: 2018,
                        y: 1540,
                        drilldown: 'local2018'
                    }]
                }, {
                    type: 'areaspline',
                    name: 'Foreign',
                    data: [{
                        name: 2011,
                        y: 300,
                        drilldown: 'foreign2011'
                    }, {
                        name: 2012,
                        y: 300,
                        drilldown: 'foreign2012'
                    }, {
                        name: 2013,
                        y: 500,
                        drilldown: 'foreign2013'
                    }, {
                        name: 2014,
                        y: 400,
                        drilldown: 'foreign2014'
                    }, {
                        name: 2015,
                        y: 300,
                        drilldown: 'foreign2015'
                    }, {
                        name: 2016,
                        y: 500,
                        drilldown: 'foreign2016'
                    }, {
                        name: 2017,
                        y: 400,
                        drilldown: 'foreign2017'
                    }, {
                        name: 2018,
                        y: 800,
                        drilldown: 'foreign2018'
                    }]
                }],
                drilldown: {
                    series: [{
                        name: "Local",
                        id: 'local2011',
                        data: [
                            ['Design', 4],
                            ['Manufacture', 2],
                            ['Supply', 1],
                            ['Construction', 4],
                            ['Test & Comm.', 4],
                            ['Maintenance', 4]
                        ]
                    }, {
                        name: "Local",
                        id: 'local2012',
                        data: [
                            ['Design', 4],
                            ['Manufacture', 2],
                            ['Supply', 1],
                            ['Construction', 4],
                            ['Test & Comm.', 4],
                            ['Maintenance', 4]
                        ]
                    }, {
                        name: "Local",
                        id: 'local2013',
                        data: [
                            ['Design', 4],
                            ['Manufacture', 2],
                            ['Supply', 1],
                            ['Construction', 4],
                            ['Test & Comm.', 4],
                            ['Maintenance', 4]
                        ]
                    }, {
                        name: "Foreign",
                        id: 'foreign2011',
                        data: [
                            ['Design', 4],
                            ['Manufacture', 2],
                            ['Supply', 1],
                            ['Construction', 4],
                            ['Test & Comm.', 4],
                            ['Maintenance', 4]
                        ]
                    }, {
                        name: "Foreign",
                        id: 'foreign2012',
                        data: [
                            ['Design', 4],
                            ['Manufacture', 2],
                            ['Supply', 1],
                            ['Construction', 4],
                            ['Test & Comm.', 4],
                            ['Maintenance', 4]
                        ]
                    }, {
                        name: "Foreign",
                        id: 'foreign2013',
                        data: [
                            ['Design', 4],
                            ['Manufacture', 2],
                            ['Supply', 1],
                            ['Construction', 4],
                            ['Test & Comm.', 4],
                            ['Maintenance', 4]
                        ]
                    }]
                }
            };
        var stormIds = ['hc_adv_works','hc_elev_guide','hc_depots','hc_ugw','hc_mspr','hc_systems','hc_es','hc_cp','hc_others'];
        $color1 = $('#c1').val();
        $color2 = $('#c2').val();
        $i1 = $('#i1').val();
        $j2 = $('#j2').val();
        for (var i = 0; i < stormIds.length; i++) {
            options.series[0].color = $color1;
            options.series[0].name = $i1;
            options.series[1].color = $color2;
            options.series[1].name = $j2;
            options.series[0].type = 'column';
            options.series[1].type = 'column';
            options.chart.renderTo = stormIds[i];
            chart = new Highcharts.Chart(options);
        }

    });
});
