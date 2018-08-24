$(document).ready(function(){

	
	// line_chart_1

	$(function () {
        Highcharts.chart('bar1_acp', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            credits:false,
            xAxis: [{
                    title: {
                        useHTML: true
                    },
                    type: "category",
                }, {
                    title: {
                        useHTML: true
                    },
                    type: "category",
                    opposite: true
                }],
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
                    "name": "Total Advanced Check Print",
                    "colorByPoint": true,
                    "data": [
                        {
                            "name": "TNB LV",
                            "y": 4,
                            "drilldown": "tnb_lv"
                        },
                        {
                            "name": "TNB 11KV",
                            "y": 1,
                            "drilldown": "tnb_11kv"
                        },
                        {
                            "name": "TELEKOM",
                            "y": 12,
                            "drilldown": "telekom"
                        },
                        {
                            "name": "TIME",
                            "y": 7,
                            "drilldown": "time"
                        },
                        {
                            "name": "SYABAS",
                            "y": 18,
                            "drilldown": "syabas"
                        },
                        {
                            "name": "GAS MALAYSIA",
                            "y": 1,
                            "drilldown": "gas_malaysia"
                        },
                        {
                            "name": "SPEEDLINK",
                            "y": 5,
                            "drilldown": "speedink"
                        },
                        {
                            "name": "MAPPING",
                            "y": 20,
                            "drilldown": "mapping"
                        },
                        {
                            "name": "PILOTING",
                            "y": 128,
                            "drilldown": "piloting"
                        },
                        {
                            "name": "SEWERAGE",
                            "y": 3,
                            "drilldown": "sewerage"
                        },
                        {
                            "name": "PYLON",
                            "y": 4,
                            "drilldown": "pylon"
                        },
                        {
                            "name": "EARTHING AND LIGHTING",
                            "y": 33,
                            "drilldown": "earthing_and_lighting"
                        },
                        {
                            "name": "STREET LIGHTING(temporary)",
                            "y": 2,
                            "drilldown": "street_lighting"
                        }
                    ]
                }
            ],
            "drilldown": {
                "categories": ['Submitted','Code 1','Code 2','Code 3','Under Review'],
                "series": [
                    {
                        "name": "TNB LV",
                        "id": "tnb_lv",
                        "data": [
                            [
                                "Submitted",
                                1
                            ],
                            [
                                "Code 1",
                                2
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "TNB 11KV",
                        "id": "tnb_11kv",
                        "data": [
                            [
                                "Submitted",
                                1
                            ],
                            [
                                "Code 1",
                                1
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "TELEKOM",
                        "id": "telekom",
                        "data": [
                            [
                                "Submitted",
                                13
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "TIME",
                        "id": "time",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "SYABAS",
                        "id": "syabas",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "GAS MALAYSIA",
                        "id": "gas_malaysia",
                        "data": [
                            [
                                "Submitted",
                                1
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                1
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "SPEEDLINK",
                        "id": "speedlink",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "MAPPING",
                        "id": "mapping",
                        "data": [
                            [
                                "Submitted",
                                15
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                15
                            ]
                        ]
                    },
                    {
                        "name": "PILOTING",
                        "id": "piloting",
                        "data": [
                            [
                                "Submitted",
                                119
                            ],
                            [
                                "Code 1",
                                102
                            ],
                            [
                                "Code 2",
                                4
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                13
                            ]
                        ]
                    },
                    {
                        "name": "SEWERAGE",
                        "id": "sewerage",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "PYLON",
                        "id": "pylon",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "EARTHING AND LIGHTING",
                        "id": "earthing_and_lighting",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "STREET LIGHTING(Temporary)",
                        "id": "street_lighting",
                        "data": [
                            [
                                "Submitted",
                                0
                            ],
                            [
                                "Code 1",
                                0
                            ],
                            [
                                "Code 2",
                                0
                            ],
                            [
                                "Code 3",
                                0
                            ],
                            [
                                "Under Review",
                                0
                            ]
                        ]
                    }
                ]
            }


        });

        Highcharts.chart('bar2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Package V209 - Machineries'
            },
            subtitle: {
                text: ''
            },
            credits:false,
            xAxis: {
                categories: ['Required','On Site','Variance']
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
    });
});

