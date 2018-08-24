$(document).ready(function(){
    $(".portlet-map .title").text("Location");
    $(".portlet-all-import-value-dist2 .title").text("Contract Value Distribution");
    $(".detail-btn").hide();
    $(".matc").text("31.12Mil");
    $(".macc").text("2.9Mil");
    $(".lc").text("829.12K");
    $(function () {
        Highcharts.setOptions({
            colors: ['#09f','#0a5','#f05']
        });
        Highcharts.chart('a_v_1', {
            chart: {
                type: 'pie'
            },
            title: {
                text: null
            },
            credits: false,
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valuePrefix: 'RM '
            },
            series: [{
                name: 'Total',
                data: [{
                    name: 'Contract Value',
                    y:  21225451510.25,
                    color: '#5c6bc0'
                }],
                size: '60%',
                innerSize: '40%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -60
                }
            }, {
                name: 'Awarded Value',
                data: [
                    {
                        name: "Local Bumi",
                        y:  9240882401.22
                    },
                    {
                        name: "Local Non-Bumi",
                        y:  10471467922.32
                    },
                    {
                        name: "Foreign",
                        y:  1513101186.71
                    }
                ],
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    distance: 10,
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? this.point.name + ':<br>RM ' +
                            (this.y).toLocaleString() + ' ('+((this.y/21225451510.25)*100).toFixed(2)+'%)' : null;
                    }
                }
            }]
        });
        Highcharts.chart('a_v_2', {
            chart: {
                type: 'pie'
            },
            title: {
                text: null
            },
            credits: false,
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valuePrefix: 'RM '
            },
            series: [{
                name: 'Total',
                data: [{
                    name: 'Contract Value',
                    y:  21225451510.25,
                    color: '#5c6bc0'
                }],
                size: '60%',
                innerSize: '40%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -60
                }
            }, {
                name: 'Awarded Value',
                data: [
                    {
                        name: "Local Bumi",
                        y:  9240882401.22
                    },
                    {
                        name: "Local Non-Bumi",
                        y:  10471467922.32
                    },
                    {
                        name: "Foreign",
                        y:  1513101186.71
                    }
                ],
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    distance: 10,
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? this.point.name + ':<br>RM ' +
                            (this.y).toLocaleString() + ' ('+((this.y/21225451510.25)*100).toFixed(2)+'%)' : null;
                    }
                }
            }]
        });
        Highcharts.chart('a_v_3', {
            chart: {
                type: 'pie'
            },
            title: {
                text: null
            },
            credits: false,
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valuePrefix: 'RM '
            },
            series: [{
                name: 'Total',
                data: [{
                    name: 'Contract Value',
                    y:  21225451510.25,
                    color: '#5c6bc0'
                }],
                size: '60%',
                innerSize: '40%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -60
                }
            }, {
                name: 'Awarded Value',
                data: [
                    {
                        name: "Local Bumi",
                        y:  9240882401.22
                    },
                    {
                        name: "Local Non-Bumi",
                        y:  10471467922.32
                    },
                    {
                        name: "Foreign",
                        y:  1513101186.71
                    }
                ],
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    distance: 10,
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? this.point.name + ':<br>RM ' +
                            (this.y).toLocaleString() + ' ('+((this.y/21225451510.25)*100).toFixed(2)+'%)' : null;
                    }
                }
            }]
        });
        var mapData = Highcharts.maps['custom/world'];

        var data =  [{
            name: 'Huls Transmission Sdn Bhd',
            z:  37888400.00,
            lat: 3.139003,
            lon: 101.68685499999992,
            address:'No. 261-1, Jalan Haruan 5/7 \n' +
            'Oakland Commercial Centre 2 \n' +
            '70300 Seremban, NEGERI SEMBILAN DARUL KHUSUS'
        }]
        Highcharts.mapChart('map-world-markers', {
            chart: {
                map: 'custom/world'
            },

            title: {
                text: null
            },
            credits:false,
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: function () {
                    return '<b>LOCATION</b><br>-----------------------------<br>' +
                        '<b>Address: </b><address>' + this.point.address +'</address>';
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },
            series : [{
                name: 'Countries',
                mapData: mapData,
                /*            borderColor: 'black',
                            borderWidth: 0.2,*/
                /*            joinBy: ['iso-a2', 'code'],*/
                /*color: '#E0E0E0',*/
                nullColor: 'rgb(78, 162, 200)',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                mapData: mapData,
                color: 'rgb(255, 0, 85)',
                name:"Awarded Contractors",
                data: data,
                joinBy: ['postal-code', 'code'],
                minSize: 4,
                maxSize: '10%'
            }]
        });

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
                    y: 980000,
                    drilldown:'local'
                }, {
                    name: 'Foreign',
                    y: 369000,
                    drilldown:'foreign'

                },{
                    name: 'Total Cost',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold'
                    }
                },
                pointPadding: 0
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
                    y: 569000
                }, {
                    name: 'Foreign',
                    y: 120000
                },{
                    name: 'Total Cost',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold'
                    }
                },
                pointPadding: 0
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
                    y: 220000
                }, {
                    name: 'Foreign',
                    y: 169000
                },{
                    name: 'Total Cost',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold'
                    }
                },
                pointPadding: 0
            }]
        });
    });
});