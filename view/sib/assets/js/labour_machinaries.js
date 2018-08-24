var ManMachSummary = function() {

    var _manPower = function(element){
            Highcharts.setOptions({
                colors: ['#09f','#0a5','#f05']
            });
            Highcharts.chart({
                chart: {
                    type: 'column',
                    renderTo:element
                },
                title: {
                    text: 'Package V209 - Manpower'
                },
                subtitle: {
                    text: ''
                },
                credits:false,
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total',
                        align: 'middle'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                legend:{
                    enabled: false,
                },
                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: ''
                },
                "series": [
                    {
                        "name": "Manpower",
                        "colorByPoint": true,
                        "data": [
                            {
                                "name": "Required",
                                "y": 225,
                                "drilldown": "required"
                            },
                            {
                                "name": "On Site",
                                "y": 134,
                                "drilldown": "on-site"
                            },
                            {
                                "name": "Variance",
                                "y": -91,
                                "drilldown": "varience"
                            }
                        ]
                    }
                ],
                "drilldown": {
                    "series": [
                        {
                            "name": "Required",
                            "id": "required",
                            "data": [
                                [
                                    "Section 1",
                                    113
                                ],
                                [
                                    "Section 2",
                                    25
                                ],
                                [
                                    "Section 3",
                                    87
                                ]
                            ],
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function () {
                                        location.href = 'resources_section1.php';
                                    }
                                }
                            }
                        },
                        {
                            "name": "On Site",
                            "id": "on-site",
                            "data": [
                                [
                                    "Section 1",
                                    75
                                ],
                                [
                                    "Section 2",
                                    14
                                ],
                                [
                                    "Section 3",
                                    45
                                ]
                            ],
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function () {
                                        location.href = 'resources_section1.php';
                                    }
                                }
                            }
                        },
                        {
                            "name": "Varience",
                            "id": "varience",
                            "data": [
                                [
                                    "Section 1",
                                    -38
                                ],
                                [
                                    "Section 2",
                                    -11
                                ],
                                [
                                    "Section 3",
                                    -42
                                ]
                            ],
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function () {
                                        location.href = 'resources_section1.php';
                                    }
                                }
                            }
                        }
                    ]
                }


            });
    };

    var _machinaries = function(element){

        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo:element
            },
            title: {
                text: 'Package V209 - Machineries'
            },
            subtitle: {
                text: ''
            },
            credits:false,
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total',
                    align: 'middle'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            legend:{
                enabled: false,
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
            "series": [
                {
                    "name": "Machinery",
                    "colorByPoint": true,
                    "data": [
                        {
                            "name": "Required",
                            "y": 15,
                            "drilldown": "required"
                        },
                        {
                            "name": "On Site",
                            "y": 14,
                            "drilldown": "on-site"
                        },
                        {
                            "name": "Variance",
                            "y": -1,
                            "drilldown": "varience"
                        }
                    ]
                }
            ],
            "drilldown": {
                "series": [
                    {
                        "name": "Required",
                        "id": "required",
                        "data": [
                            [
                                "Section 1",
                                8
                            ],
                            [
                                "Section 2",
                                2
                            ],
                            [
                                "Section 3",
                                5
                            ]
                        ]
                    },
                    {
                        "name": "On Site",
                        "id": "on-site",
                        "data": [
                            [
                                "Section 1",
                                7
                            ],
                            [
                                "Section 2",
                                2
                            ],
                            [
                                "Section 3",
                                5
                            ]
                        ]
                    },
                    {
                        "name": "Varience",
                        "id": "varience",
                        "data": [
                            [
                                "Section 1",
                                -1
                            ],
                            [
                                "Section 2",
                                0
                            ],
                            [
                                "Section 3",
                                0
                            ]
                        ]
                    }
                ]
            }


        });
    };

    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            /*            _activePage($(".nav_proc_yetcalled"));
                        _activePage($(".nav_proc_yetcalled").parent().parent());*/
            _manPower('r_manpower');
            _machinaries('r_machinery')
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    ManMachSummary.init();
});