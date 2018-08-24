$(document).ready(function(){
    $(function () {
/*        Highcharts.chart('chartdiv12', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            credits: false,
            subtitle: {
                text: ''
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
/!*                    dataLabels: {
                        enabled: true
                    }*!/
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
            },

            series: [
                {
                    name: "Total Contractors",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Design",
                            y: 34,
                            drilldown: "contractors"
                        },{
                            name: "Manufacture",
                            y: 50,
                            drilldown: "contractors"
                        },{
                            name: "Supply",
                            y: 30,
                            drilldown: "contractors"
                        },{
                            name: "Install/Construct",
                            y: 60,
                            drilldown: "contractors"
                        },{
                            name: "Testing $ Comm.",
                            y: 44,
                            drilldown: "contractors"
                        },{
                            name: "Maintenance",
                            y: 31,
                            drilldown: "contractors"
                        }
                    ]
                }
            ],
            drilldown: {
/!*                drillUpButton: {
                    position: {x:-10,y:-30}
                },*!/
                series: [
                    {
                        name: "Contractors",
                        id: "contractors",
                        data: [
                            [
                                "Design",
                                34
                            ],
                            [
                                "Manufacture",
                                50
                            ],
                            [
                                "Supply",
                                34
                            ],
                            [
                                "Install/Construct",
                                60
                            ],
                            [
                                "Testing $ Comm.",
                                44
                            ],
                            [
                                "Maintenance",
                                30
                            ]
                        ]
                    }
                ]
            }
        });

        Highcharts.chart('chartdiv11', {
            chart: {
                type: 'column'
            },
            title: {
                text: null
            },
            credits: false,
            subtitle: {
                text: null
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    /!*dataLabels: {
                        enabled: true
                    }*!/
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
            },

            series: [
                {
                    name: "Total Contract Value",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Design",
                            y: 23489095,
                            drilldown: "value"
                        },{
                            name: "Manufacture",
                            y: 17489095,
                            drilldown: "value"
                        },{
                            name: "Supply",
                            y: 30486795,
                            drilldown: "value"
                        },{
                            name: "Install/Construct",
                            y: 30486795,
                            drilldown: "value"
                        },{
                            name: "Testing $ Comm.",
                            y: 30486795,
                            drilldown: "value"
                        },{
                            name: "Maintenance",
                            y: 30486795,
                            drilldown: "value"
                        }
                    ]
                }
            ],
            "drilldown": {
                series: [
                    {
                        "name": "Contract Value",
                        "id": "value",
                        "data": [
                            [
                                "Design",
                                34
                            ],
                            [
                                "Manufacture",
                                50
                            ],
                            [
                                "Supply",
                                34
                            ],
                            [
                                "Install/Construct",
                                60
                            ],
                            [
                                "Testing $ Comm.",
                                44
                            ],
                            [
                                "Maintenance",
                                30
                            ]
                        ]
                    }
                ]
            }
        });*/


        Highcharts.setOptions({
            colors: ['#09f','#ed5565']
        });
        Highcharts.chart('chartdiv1', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },

            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 22,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 8,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 2,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 1,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 6,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 13,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 8,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 22,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 7,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 173510724.91,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 4742792780.44,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 582405157.21,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 8106412469.87,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 611677561.83,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 4054427214.05,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 1732303198.93,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 1118122403,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 561576601.75,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 5],
                        ['Manufacture', 3],
                        ['Supply', 5],
                        ['Construction', 22],
                        ['Test & Comm.', 22],
                        ['Maintenance', 12]

                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 5205321.76],
                        ['Manufacture', 17286869.47],
                        ['Supply', 52053217.47],
                        ['Construction', 86755362.40],
                        ['Test & Comm.', 8675536.27],
                        ['Maintenance', 3470214.5]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }

        });

        Highcharts.chart('chartdiv2', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 17489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv3', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv4', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv5', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv6', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv7', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv8', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

        Highcharts.chart('chartdiv9', {
            chart: {
                type: 'column',
                events: {
                    drilldown: function(e) {
                        this.setTitle({ text: e.point.name });
                    },
                    drillup: function(e) {
                        this.setTitle({ text: null });
                    }
                }
            },
            title: {
                text: null
            },
            credits: false,
            xAxis: [{
                type: 'category',
                crosshair: true
            }],
            yAxis: [{
                className: 'highcharts-custom-color-0',
                title: {
                    text: 'Total Contractors'
                }
            }, {
                className: 'highcharts-custom-color-1',
                opposite: true,
                title: {
                    text: 'Total Contract Value'
                }
            }],
            plotOptions: {
                column: {
                    borderRadius: 2
                }
            },
            series: [{
                name: "Contractors",
                data: [
                    {
                        name: "Advanced Works",
                        y: 34,
                        drilldown: "advanced_works_c"
                    },{
                        name: "Guideways",
                        y: 50,
                        drilldown: "guideways_c"
                    },{
                        name: "Depots",
                        y: 30,
                        drilldown: "depots_c"
                    },{
                        name: "Underground",
                        y: 60,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 44,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 31,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 31,
                        drilldown: "maintenance"
                    }
                ]
            }, {
                name: "Contract Value",
                data: [
                    {
                        name: "Advanced Works",
                        y: 23489095,
                        drilldown: "advanced_works_v"
                    },{
                        name: "Guideways",
                        y: 107489095,
                        drilldown: "guideways_v"
                    },{
                        name: "Depots",
                        y: 30486795,
                        drilldown: "depots_v"
                    },{
                        name: "Underground",
                        y: 30486795,
                        drilldown: "install"
                    },{
                        name: "MSPR",
                        y: 30486795,
                        drilldown: "testing"
                    },{
                        name: "Systems",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Stations",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Centralised Procurement",
                        y: 30486795,
                        drilldown: "maintenance"
                    },{
                        name: "Others",
                        y: 30486795,
                        drilldown: "maintenance"
                    }
                ],
                yAxis: 1
            }],
            drilldown: {
                series: [{
                    name: "Contractors",
                    id: 'advanced_works_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'guideways_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contractors",
                    id: 'depots_c',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'advanced_works_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'guideways_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }, {
                    name: "Contract Value",
                    id: 'depots_v',
                    yAxis: 1,
                    data: [
                        ['Design', 23489095],
                        ['Manufacture', 17489095],
                        ['Supply', 30486795],
                        ['Construction', 34486795],
                        ['Test & Comm.', 1486795],
                        ['Maintenance', 10486795]
                    ]
                }]
            }
        });

    });


    $(".prog-filter").click(function (){
        filterby = $(this).data("filter");
        $(".portletItem").each(function(){
            if ($(this).is('[data-filter]')) {
                if ($(this).data("filter") != filterby) {
                    $(this).hide("slow");
                } else {
                    $(this).show();
                }
            }
        })

    });

    $(".resetFilter").click(function (){
        $(".portletItem").each(function(){
            $(this).show();
        });
    });

});
