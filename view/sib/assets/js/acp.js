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
                }
            },
            legend: {
                enabled:false
            },
            "series": [
                {
                    "name": "Advanced Check Print",
                    "colorByPoint": true,
                    "data": [
                        {
                            "name": "TOTAL",
                            "y": 216,
                            "drilldown": "TOTAL"
                        },
                        {
                            "name": "SUBMITTED",
                            "y": 150,
                            "drilldown": "SUBMITTED"
                        },
                        {
                            "name": "CODE 1",
                            "y": 104,
                            "drilldown": "CODE 1"
                        },
                        {
                            "name": "CODE 2",
                            "y": 5,
                            "drilldown": "CODE 2"
                        },
                        {
                            "name": "CODE 3",
                            "y": 0,
                            "drilldown": "CODE 3"
                        },
                        {
                            "name": "SUBMISSION UNDER REVIEW",
                            "y": 41,
                            "drilldown": "SUBMISSION UNDER REVIEW"
                        }
                    ]
                }
            ],
            "drilldown": {
                "categories": ['TNB LV','TNB 11KV','TELEKOM','TIME','SYABAS','GAS MALAYSIA', 'SPEEDLINK', 'MAPPING','PILOTING','SEWERAGE','PYLON','EARTHING AND LIGHTING','STREET LIGHTING(Temporary)'],
                "series": [
                    {
                        "name": "TOTAL",
                        "id": "TOTAL",
                        "data": [
                            [
                                "TNB LV",
                                4
                            ],
                            [
                                "TNB 11KV",
                                1
                            ],
                            [
                                "TELEKOM",
                                15
                            ],
                            [
                                "TIME",
                                7
                            ],
                            [
                                "SYABAS",
                                18
                            ],
                            [
                                "GAS MALAYSIA",
                                1
                            ],
                            [
                                "SPEEDLINK",
                                5
                            ],
                            [
                                "MAPPING",
                                20
                            ],
                            [
                                "PILOTING",
                                128
                            ],
                            [
                                "SEWERAGE",
                                3
                            ],
                            [
                                "PYLON",
                                4
                            ],
                            [
                                "EARTHING AND LIGHTING",
                                33
                            ],
                            [
                                "STREET LIGHTING(Temporary)",
                                2
                            ]
                        ]
                    },
                    {
                        "name": "SUBMITTED",
                        "id": "SUBMITTED",
                        "data": [
                            [
                                "TNB LV",
                                1
                            ],
                            [
                                "TNB 11KV",
                                1
                            ],
                            [
                                "TELEKOM",
                                13
                            ],
                            [
                                "TIME",
                                0
                            ],
                            [
                                "SYABAS",
                                0
                            ],
                            [
                                "GAS MALAYSIA",
                                1
                            ],
                            [
                                "SPEEDLINK",
                                0
                            ],
                            [
                                "MAPPING",
                                15
                            ],
                            [
                                "PILOTING",
                                119
                            ],
                            [
                                "SEWERAGE",
                                0
                            ],
                            [
                                "PYLON",
                                0
                            ],
                            [
                                "EARTHING AND LIGHTING",
                                0
                            ],
                            [
                                "STREET LIGHTING(Temporary)",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "CODE 1",
                        "id": "CODE 1",
                        "data": [
                            [
                                "TNB LV",
                                1
                            ],
                            [
                                "TNB 11KV",
                                1
                            ],
                            [
                                "TELEKOM",
                                0
                            ],
                            [
                                "TIME",
                                0
                            ],
                            [
                                "SYABAS",
                                0
                            ],
                            [
                                "GAS MALAYSIA",
                                0
                            ],
                            [
                                "SPEEDLINK",
                                0
                            ],
                            [
                                "MAPPING",
                                0
                            ],
                            [
                                "PILOTING",
                                102
                            ],
                            [
                                "SEWERAGE",
                                0
                            ],
                            [
                                "PYLON",
                                0
                            ],
                            [
                                "EARTHING AND LIGHTING",
                                0
                            ],
                            [
                                "STREET LIGHTING(Temporary)",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "CODE 2",
                        "id": "CODE 2",
                        "data": [
                            [
                                "TNB LV",
                                0
                            ],
                            [
                                "TNB 11KV",
                                0
                            ],
                            [
                                "TELEKOM",
                                0
                            ],
                            [
                                "TIME",
                                0
                            ],
                            [
                                "SYABAS",
                                0
                            ],
                            [
                                "GAS MALAYSIA",
                                1
                            ],
                            [
                                "SPEEDLINK",
                                0
                            ],
                            [
                                "MAPPING",
                                0
                            ],
                            [
                                "PILOTING",
                                4
                            ],
                            [
                                "SEWERAGE",
                                0
                            ],
                            [
                                "PYLON",
                                0
                            ],
                            [
                                "EARTHING AND LIGHTING",
                                0
                            ],
                            [
                                "STREET LIGHTING(Temporary)",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "CODE 3",
                        "id": "CODE 3",
                        "data": [
                            [
                                "TNB LV",
                                0
                            ],
                            [
                                "TNB 11KV",
                                0
                            ],
                            [
                                "TELEKOM",
                                0
                            ],
                            [
                                "TIME",
                                0
                            ],
                            [
                                "SYABAS",
                                0
                            ],
                            [
                                "GAS MALAYSIA",
                                0
                            ],
                            [
                                "SPEEDLINK",
                                0
                            ],
                            [
                                "MAPPING",
                                0
                            ],
                            [
                                "PILOTING",
                                0
                            ],
                            [
                                "SEWERAGE",
                                0
                            ],
                            [
                                "PYLON",
                                0
                            ],
                            [
                                "EARTHING AND LIGHTING",
                                0
                            ],
                            [
                                "STREET LIGHTING(Temporary)",
                                0
                            ]
                        ]
                    },
                    {
                        "name": "SUBMISSION UNDER REVIEW",
                        "id": "SUBMISSION UNDER REVIEW",
                        "data": [
                            [
                                "TNB LV",
                                0
                            ],
                            [
                                "TNB 11KV",
                                0
                            ],
                            [
                                "TELEKOM",
                                13
                            ],
                            [
                                "TIME",
                                0
                            ],
                            [
                                "SYABAS",
                                0
                            ],
                            [
                                "GAS MALAYSIA",
                                0
                            ],
                            [
                                "SPEEDLINK",
                                0
                            ],
                            [
                                "MAPPING",
                                15
                            ],
                            [
                                "PILOTING",
                                13
                            ],
                            [
                                "SEWERAGE",
                                0
                            ],
                            [
                                "PYLON",
                                0
                            ],
                            [
                                "EARTHING AND LIGHTING",
                                0
                            ],
                            [
                                "STREET LIGHTING(Temporary)",
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

