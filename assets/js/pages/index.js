$(function() {
    Highcharts.chart('fl_labour', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Local vs Foreign Labour Participation'
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
            },areaspline: {
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
                name:2011,
                y: 15402
            }, {
                name:2012,
                y: 14543
            }, {
                name:2013,
                y: 18354
            }, {
                name:2014,
                y: 16202
            }, {
                name:2015,
                y: 15657
            }, {
                name:2016,
                y: 15335
            }, {
                name:2017,
                y: 16040
            },{
                name:2018,
                y:15406
            }]
        }, {
            type: 'areaspline',
            name: 'Foreign',
            data: [{
                name:2011,
                y: 8201
            }, {
                name:2012,
                y: 7402
            }, {
                name:2013,
                y: 7301
            }, {
                name:2014,
                y: 9530
            }, {
                name:2015,
                y: 6022
            }, {
                name:2016,
                y: 10201
            }, {
                name:2017,
                y: 9106
            },{
                name:2018,
                y: 8401
            }]
        }]
    });

    Highcharts.setOptions({
        colors: ['#ff8394','#f05']
    });
    Highcharts.chart('bn_labour', {
        chart: {
          type: 'column'
        },
        title: {
            text: 'Local Bumi vs Local Non-Bumi Labour Participation'
        },
        xAxis: {
            type: "category"
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
            areaspline: {
                fillOpacity: 0.5,
                dataLabels: {
                    enabled: true
                }
            },
            column: {
                series: {
                    stacking: 'normal',
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            }
        },
        series: [{
            type: 'areaspline',
            name: 'Local Bumi',
            data: [{
                name:2011,
                y: 7630
            }, {
                name:2012,
                y: 6806
            }, {
                name:2013,
                y: 8940
            }, {
                name:2014,
                y: 8007
            }, {
                name:2015,
                y: 7850
            }, {
                name:2016,
                y: 7518
            }, {
                name:2017,
                y: 6382
            },{
                name:2018,
                y: 7440
            }]
        }, {
            type: 'areaspline',
            name: 'Local Non-Bumi',
            data: [{
                name:2011,
                y: 6820
            }, {
                name:2012,
                y: 8493
            }, {
                name:2013,
                y: 8430
            }, {
                name:2014,
                y: 8420
            }, {
                name:2015,
                y: 6950
            }, {
                name:2016,
                y: 7610
            }, {
                name:2017,
                y: 8500
            },{
                name:2018,
                y:8040
            }]
        }]
    });
    Highcharts.setOptions({
        colors: ['#17a084','#127e68']
    });
    Highcharts.chart('hc-p-status', {
        chart: {
            type: 'bar',
            backgroundColor:'rgba(255, 255, 255, 0.0)'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Programme'],
            labels: {
                style: {
                    color: "#fff"
                }
            }

        },
        credits:false,
        yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            min: 0,
            title: {
                text: null
            },
            labels: {
                style: {
                    color: "#fff"
                }
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                borderWidth: 0
            }
        },
        series: [{
            name: 'Completed',
            data: [4]
        }, {
            name: 'Progress',
            data: [2]
        }]
    });

    Highcharts.setOptions({
        colors: ['#a72734','#ab3c47','#b1555f']
    });
    Highcharts.chart('hc-c-info', {
        chart: {
            type: 'bar',
            backgroundColor:'rgba(255, 255, 255, 0.0)'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: ['Contracts Awarded'],
            labels: {
                style: {
                    color: "#fff"
                }
            }

        },
        credits:false,
        yAxis: {
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            min: 0,
            title: {
                text: null
            },
            labels: {
                style: {
                    color: "#fff"
                }
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                borderWidth: 0
            }
        },
        series: [{
            name: 'Local Bumi',
            data: [843]
        }, {
            name: 'Local Non-Bumi',
            data: [530]
        }, {
            name: 'Foreign',
            data: [178]
        }]
    });


/*    Highcharts.chart('heat_map', {
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: '#0085c1'
        },
        credits:false,
        plotOptions: {
            series: {
                events: {
                    click: function (event) {
                        if (event.point.node.childrenTotal == 0) {//since last node will have zero childrens
                            window.location.href = "contractor.php?i="+(event.point.node.name).toLowerCase().replace(/ /g,"_");
                        }
                    }
                }
            },
            treemap:{
                cursor: 'pointer'
            }
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data: [{
                name: 'Huls Transmission Sdn Bhd',
                value:  37888400.00,
                colorValue: 22
            }, {
                name: 'Keller (M) Sdn Bhd',
                value:  24016411.50,
                colorValue: 21
            }, {
                name: 'Gadang Engineering (M) Sdn Bhd',
                value: 23910226.60,
                colorValue: 20
            }, {
                name:  'Menta Construction Sdn Bhd',
                value: 12256534.91
            }, {
                name: 'Pembinaan C W Yap Sdn Bhd',
                value: 11904040.00
            }, {
                name: 'Bauer (M) Sdn Bhd',
                value: 10588000.00,
                colorValue: 17
            }, {
                name: 'Sri Communication Sdn Bhd',
                value: 10023562.97,
                colorValue: 16
            },{
                name: 'MMC Gamuda KVMRT (PDP) Sdn Bhd',
                value: 8338000.00,
                colorValue: 15
            }, {
                name: 'Ragawang Corporation Sdn Bhd',
                value: 7261371.70,
                colorValue: 14
            }, {
                name: 'Geohan Sdn Bhd',
                value: 6579624.00,
                colorValue: 13
            }, {
                name: 'Hatimuda Sdn Bhd',
                value: 5691650.00,
                colorValue: 12
            }, {
                name: 'Fastpro Sdn Bhd',
                value: 3895623.20,
                colorValue: 11
            }, {
                name: 'Pembinaan CW Yap Sdn Bhd',
                value: 2645950.00,
                colorValue: 10
            }, {
                name: 'Sri Communication Sdn Bhd',
                value: 1979949.90,
                colorValue: 9
            },{
                name: 'Worktime Engineering Sdn Bhd',
                value: 1723085.00,
                colorValue: 8
            }, {
                name: 'Tenaga Nirwana (M) Sdn Bhd',
                value: 1496568.90,
                colorValue: 7
            }, {
                name: 'Soil Instruments (M) Sdn Bhd',
                value: 1148820.00,
                colorValue: 6
            }, {
                name: 'Misi Setia Oil and Gas Sdn Bhd',
                value: 917186.00,
                colorValue: 5
            }, {
                name: 'Sri Communication Sdn Bhd',
                value: 697044.80,
                colorValue: 4
            }, {
                name: 'Puncak Niaga (M) Sdn Bhd',
                value: 493688.43,
                colorValue: 3
            }, {
                name: 'Cunningham Lindsey Adjusters (M) Sdn Bhd',
                value: 42150.00,
                colorValue: 2
            }, {
                name: 'E.S.S. Engineering Sdn Bhd',
                value: 12837.00,
                colorValue: 1
            }
            ]
        }],
        title: {
            text: null
        }
    });*/

/*
    Highcharts.setOptions({
        colors: ['#058DC7', '#50B432', '#ED561B', '#FF9655','#24CBE5', '#DDDF00', '#64E572','#FFF263', '#6AF9C4']
    });
    Highcharts.setOptions({
        colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        })
    });

    Highcharts.chart('hc-import-val', {
        chart: {
            type: 'pie'
        },
        title: {
            text: null
        },
        credits: false,
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            },
            pie: {
                innerSize: '60%'
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [
            {
                name: "Programmes",
                colorByPoint: true,
                data: [
                    {
                        name: "LRT Line 1",
                        y: 20.89,
                        drilldown: "Chrome"
                    },
                    {
                        name: "LRT Line 2",
                        y: 19.11,
                        drilldown: "Firefox"
                    },
                    {
                        name: "Monorail",
                        y: 7.00,
                        drilldown: "Internet Explorer"
                    },
                    {
                        name: "MRT SBK",
                        y: 22.77,
                        drilldown: "Safari"
                    },
                    {
                        name: "MRT SSP",
                        y: 30.23,
                        drilldown: "Edge"
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    "name": "Chrome",
                    "id": "Chrome",
                    "data": [
                        [
                            "v65.0",
                            0.1
                        ],
                        [
                            "v64.0",
                            1.3
                        ],
                        [
                            "v63.0",
                            53.02
                        ],
                        [
                            "v62.0",
                            1.4
                        ],
                        [
                            "v61.0",
                            0.88
                        ],
                        [
                            "v60.0",
                            0.56
                        ],
                        [
                            "v59.0",
                            0.45
                        ],
                        [
                            "v58.0",
                            0.49
                        ],
                        [
                            "v57.0",
                            0.32
                        ],
                        [
                            "v56.0",
                            0.29
                        ],
                        [
                            "v55.0",
                            0.79
                        ],
                        [
                            "v54.0",
                            0.18
                        ],
                        [
                            "v51.0",
                            0.13
                        ],
                        [
                            "v49.0",
                            2.16
                        ],
                        [
                            "v48.0",
                            0.13
                        ],
                        [
                            "v47.0",
                            0.11
                        ],
                        [
                            "v43.0",
                            0.17
                        ],
                        [
                            "v29.0",
                            0.26
                        ]
                    ]
                },
                {
                    "name": "Firefox",
                    "id": "Firefox",
                    "data": [
                        [
                            "v58.0",
                            1.02
                        ],
                        [
                            "v57.0",
                            7.36
                        ],
                        [
                            "v56.0",
                            0.35
                        ],
                        [
                            "v55.0",
                            0.11
                        ],
                        [
                            "v54.0",
                            0.1
                        ],
                        [
                            "v52.0",
                            0.95
                        ],
                        [
                            "v51.0",
                            0.15
                        ],
                        [
                            "v50.0",
                            0.1
                        ],
                        [
                            "v48.0",
                            0.31
                        ],
                        [
                            "v47.0",
                            0.12
                        ]
                    ]
                },
                {
                    "name": "Internet Explorer",
                    "id": "Internet Explorer",
                    "data": [
                        [
                            "v11.0",
                            6.2
                        ],
                        [
                            "v10.0",
                            0.29
                        ],
                        [
                            "v9.0",
                            0.27
                        ],
                        [
                            "v8.0",
                            0.47
                        ]
                    ]
                },
                {
                    "name": "Safari",
                    "id": "Safari",
                    "data": [
                        [
                            "v11.0",
                            3.39
                        ],
                        [
                            "v10.1",
                            0.96
                        ],
                        [
                            "v10.0",
                            0.36
                        ],
                        [
                            "v9.1",
                            0.54
                        ],
                        [
                            "v9.0",
                            0.13
                        ],
                        [
                            "v5.1",
                            0.2
                        ]
                    ]
                },
                {
                    "name": "Edge",
                    "id": "Edge",
                    "data": [
                        [
                            "v16",
                            2.6
                        ],
                        [
                            "v15",
                            0.92
                        ],
                        [
                            "v14",
                            0.4
                        ],
                        [
                            "v13",
                            0.1
                        ]
                    ]
                },
                {
                    "name": "Opera",
                    "id": "Opera",
                    "data": [
                        [
                            "v50.0",
                            0.96
                        ],
                        [
                            "v49.0",
                            0.82
                        ],
                        [
                            "v12.1",
                            0.14
                        ]
                    ]
                }
            ]
        }
    });
*/
    Highcharts.setOptions({
        colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
            '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
    });
    Highcharts.chart('hc-i-distme', {
        chart: {
            type: 'pie'
        },
        credits:false,
        title: {
            text: null
        },
        xAxis: {
            type: 'category',
            showEmpty: false
        },
        yAxis: {
            title: {
                text: 'RM'
            },
            labels: {
                formatter: function () {
                    return this.value + "B";

                }
            },
            showEmpty: false,
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        tooltip: {
            pointFormat: '<b>RM {point.y:,.2f}</b>'
        },
        plotOptions: {
            pie: {
                innerSize: '60%'
            }
        },
        series: [{
            type:'waterfall',
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[2],
            name: "Material Cost",
            data: [{
                name: 'Local',
                y: 33.17,
                drilldown:'local'
            }, {
                name: 'Import',
                y: 9.50,
                drilldown:'foreign'

            },{
                name: 'Total Cost',
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y) + 'Bil';
                },
                style: {
                    fontWeight: 'bold',
                    fontSize: '15px'
                }
            },
            pointPadding: 0,
            borderWidth: 0
        }],
        drilldown: {
            series: [{
                id:"local",
                name: "Programmes",
                colorByPoint: true,
                data: [
                    {
                        name: "LRT Line 1",
                        y: 20.89,
                        drilldown: "Chrome"
                    },
                    {
                        name: "LRT Line 2",
                        y: 19.11,
                        drilldown: "Firefox"
                    },
                    {
                        name: "Monorail",
                        y: 7.00,
                        drilldown: "Internet Explorer"
                    },
                    {
                        name: "MRT SBK",
                        y: 22.77,
                        drilldown: "Safari"
                    },
                    {
                        name: "MRT SSP",
                        y: 30.23,
                        drilldown: "Edge"
                    }
                ]
            }, {
                id: 'foreign',
                name: "Programmes",
                colorByPoint: true,
                data: [
                    {
                        name: "LRT Line 1",
                        y: 20.89,
                        drilldown: "Chrome"
                    },
                    {
                        name: "LRT Line 2",
                        y: 19.11,
                        drilldown: "Firefox"
                    },
                    {
                        name: "Monorail",
                        y: 7.00,
                        drilldown: "Internet Explorer"
                    },
                    {
                        name: "MRT SBK",
                        y: 22.77,
                        drilldown: "Safari"
                    },
                    {
                        name: "MRT SSP",
                        y: 30.23,
                        drilldown: "Edge"
                    }
                ]
            }, {
                name: "Chrome",
                id: "Chrome",
                data: [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]]
                }, {
                    name: "Firefox",
                    id: "Firefox",
                    data: [
                        [
                            "v58.0",
                            1.02
                        ],
                        [
                            "v57.0",
                            7.36
                        ],
                        [
                            "v56.0",
                            0.35
                        ],
                        [
                            "v55.0",
                            0.11
                        ],
                        [
                            "v54.0",
                            0.1
                        ],
                        [
                            "v52.0",
                            0.95
                        ],
                        [
                            "v51.0",
                            0.15
                        ],
                        [
                            "v50.0",
                            0.1
                        ],
                        [
                            "v48.0",
                            0.31
                        ],
                        [
                            "v47.0",
                            0.12
                        ]
                    ]
                }, {
                    name: "Internet Explorer",
                    id: "Internet Explorer",
                    data: [
                        [
                            "v11.0",
                            6.2
                        ],
                        [
                            "v10.0",
                            0.29
                        ],
                        [
                            "v9.0",
                            0.27
                        ],
                        [
                            "v8.0",
                            0.47
                        ]
                    ]
                }, {
                    name: "Safari",
                    id: "Safari",
                    data: [
                        [
                            "v11.0",
                            3.39
                        ],
                        [
                            "v10.1",
                            0.96
                        ],
                        [
                            "v10.0",
                            0.36
                        ],
                        [
                            "v9.1",
                            0.54
                        ],
                        [
                            "v9.0",
                            0.13
                        ],
                        [
                            "v5.1",
                            0.2
                        ]
                    ]
                }, {
                    name: "Edge",
                    id: "Edge",
                    data: [
                        [
                            "v16",
                            2.6
                        ],
                        [
                            "v15",
                            0.92
                        ],
                        [
                            "v14",
                            0.4
                        ],
                        [
                            "v13",
                            0.1
                        ]
                    ]
                }, {
                    name: "Opera",
                    id: "Opera",
                    data: [
                        [
                            "v50.0",
                            0.96
                        ],
                        [
                            "v49.0",
                            0.82
                        ],
                        [
                            "v12.1",
                            0.14
                        ]
                    ]
                }]
        }
    });
    Highcharts.chart('hc-i-distma', {
        chart: {
            type: 'pie'
        },
        credits:false,
        title: {
            text: null
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'RM'
            },
            labels: {
                formatter: function () {
                    return this.value + "B";

                }
            },
            visible:false,
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        tooltip: {
            pointFormat: '<b>RM {point.y:,.2f}</b>'
        },
        series: [{
            type:'waterfall',
            name: "Machinery Cost",
            data: [{
                name: 'Local',
                y: 10.25
            }, {
                name: 'Import',
                y: 1.35
            },{
                name: 'Total Cost',
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y) + 'Bil';
                },
                style: {
                    fontWeight: 'bold',
                    fontSize: '15px'
                }
            },
            pointPadding: 0,
            borderWidth: 0
        }]
    });

    Highcharts.chart('hc-i-distla', {
        chart: {
            type: 'waterfall'
        },
        credits:false,
        title: {
            text: null
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'RM'
            },
            labels: {
                formatter: function () {
                    return this.value + "B";

                }
            },
            visible:false,
            gridLineWidth: 0,
            minorGridLineWidth: 0
        },
        tooltip: {
            pointFormat: '<b>RM {point.y:,.2f}</b>'
        },
        series: [{
            upColor: Highcharts.getOptions().colors[5],
            color: Highcharts.getOptions().colors[5],
            name: "Labour Cost",
            data: [{
                name: 'Local',
                y: 28.89
            }, {
                name: 'Foreign',
                y: 21.99
            },{
                name: 'Total Cost',
                isIntermediateSum: true,
                color: Highcharts.getOptions().colors[1]
            }],
            dataLabels: {
                enabled: true,
                formatter: function () {
                    return Highcharts.numberFormat(this.y) + 'Bil';
                },
                style: {
                    fontWeight: 'bold',
                    fontSize: '15px'
                }
            },
            pointPadding: 0,
            borderWidth: 0
        }]
    });

/*    Highcharts.chart('hc-import-val2', {

        chart: {
            polar: true,
            type: 'line'
        },
        credits: false,
        title: {
            text:  null
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Material Cost', 'Machine Cost', 'Labour Cost', 'Green Material Cost',
                'Value Added Service Cost'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>RM {point.y}Bil</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Total Cost',
            data: [27.89, 20.78, 17.89, 18.19, 15.78],
            pointPlacement: 'on'
        }, {
            name: 'Local Spent',
            data: [17.89, 13.89, 8.89, 16.19, 8.26],
            pointPlacement: 'on'
        },{
            name: 'Foreign Spent',
            data: [10.00, 6.11, 8.00, 0, 6.10],
            pointPlacement: 'on'
        }]

    });*/

/*    var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
    var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];
    var data1 = [
        { label: "Data 1", data: d1, color: '#17a084'},
        { label: "Data 2", data: d2, color: '#127e68' }
    ];
    $.plot($("#flot-chart1"), data1, {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            points: {
                width: 0.1,
                show: false
            }
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false
        }
    });*/
});