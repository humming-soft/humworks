$(document).ready(function () {
    //S-Curve Financial
    $(function () {
        /*      Highcharts.setOptions({
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
         }); */


    });

    $(function () {


    });

});


var Section1Progress = function () {

    var _fillableGauge = function (element, size, textColor, circleColor, waveColor) {
        var config1 = liquidFillGaugeDefaultSettings();
        config1.textColor = textColor;
        config1.circleColor = circleColor;
        config1.waveColor = waveColor;
        config1.waveAnimateTime = 2000;
        config1.waveHeight = 0.13;
        config1.waveCount = 1;
        var gauge1 = loadLiquidFillGauge(element, size, config1);
    };

    var _drawScurve = function (element) {

        Highcharts.chart({
            chart: {
                type: 'spline',
                renderTo: element
            },
            title: {
                text: '',
                x: -20 //center
            },
            credits: false,
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['W36/17', 'W37/17', 'W38/17', 'W39/17', 'W40/17', 'W41/17', 'W42/17', 'W43/17', 'W44/17', 'W45/17', 'W46/17', 'W47/17', 'W48/17', 'W49/17', 'W50/17', 'W51/17', 'W52/17', 'W1/18', 'W2/18', 'W3/18', 'W4/18', 'W5/18', 'W6/18', 'W7/18', 'W8/18', 'W9/18', 'W10/18', 'W11/18', 'W12/18', 'W13/18', 'W14/18', 'W15/18', 'W16/18', 'W18/18', 'W17/18', 'W19/18', 'W20/18', 'W21/18', 'W22/18', 'W23/18', 'W24/18', 'W25/18', 'W26/18', 'W28/18', 'W27/18', 'W29/18', 'W30/18', 'W31/18', 'W32/18', 'W33/18', 'W34/18', 'W35/18', 'W36/18', 'W37/18', 'W38/18', 'W39/18', 'W40/18', 'W41/18', 'W42/18', 'W43/18', 'W44/18', 'W45/18', 'W46/18', 'W47/18', 'W48/18', 'W49/18', 'W50/18', 'W51/18', 'W52/18'],
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
                data: [0, 0.31, 0.37, 0.44, 0.68, 1.12, 1.25, 1.5, 2.06, 2.31, 3.12, 3.87, 4.56, 5.5, 6.32, 7.51, 8.88, 10.45, 12.27, 13.25, 15.5, 19.35, 23.02, 25.18, 28.09, 30.81, 32.78, 35.41, 38.61, 41.89, 44.24, 48.06, 51.19, 54.45, 56.58, 60.09, 63.09, 66.1, 69.23, 71.23, 74.49, 76.24, 78.87, 80.5, 82.75, 85.57, 87.63, 89.7, 92.14, 94.02, 94.96, 95.33, 95.89, 96.14, 96.64, 96.76, 96.89, 97.14, 97.13, 97.26, 97.51, 97.76, 97.63, 97.63, 98.13, 98.63, 99.25, 100],
                color: '#0070C0'
            }, {
                name: 'Late',
                data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3.11, 4.48, 6, 8.07, 9.15, 11.3, 13.22, 14.72, 16, 19, 21, 23, 25, 28, 29, 31, 34, 37, 39, 41, 44, 48, 49, 52, 57.61, 60.06, 63.16, 65.42, 67.92, 70.68, 73.44, 76.45, 79.58, 82.09, 85.73, 87.98, 89.11, 90.61, 91.37, 92.62, 93.24, 93.74, 94.37, 94.87, 95.37, 96.25, 96.37, 96.75, 97, 97.62, 98.37, 99, 100],
                color: '#FF0000'
            }, {
                name: 'Actual',
                data: [0, 0.31, 0.37, 0.44, 0.68, 1.12, 1.25, 1.5, 2.06, 2.31, 3.12, 3.87, 4.56, 5.5, 6.32, 7.51, 8.88, 10.45, 12.27, 13.25, 15.5, 18.51, 21.33, 23.02, 25.17, 26.96, 26.97, 26.98, 26.99, 30, 30.1, 30.2, 30.3, 30.4, 30.5],
                color: '#04B152'
            }],
        });
    };

    var _imageGallery = function () {

        var siteurl = "../../assets/images/";

        images = [
            {
                "path": "sample-images/TPp-1.jpg",
                "title": "Pier column construction at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 1
            },
            {
                "path": "sample-images/tpp-2.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 1
            },
            {
                "path": "sample-images/example-2.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 1
            },
            {
                "path": "sample-images/example-3.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 1
            },
            {
                "path": "sample-images/tpp-2.jpg",
                "title": "Aerial view of station pier columns at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 2
            },
            {
                "path": "sample-images/example-4.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 2
            },
            {
                "path": "sample-images/example-5.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 2
            },
            {
                "path": "sample-images/example-6.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 2
            },
            {
                "path": "sample-images/tpp3.jpg",
                "title": "Aerial view of  station pier columns at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 3
            },
            {"path": "sample-images/tpp3.jpg", "title": "Taman Putra Permai Build Progress", "kind": "image", "id": 3},
            {
                "path": "sample-images/example-8.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 3
            },
            {
                "path": "sample-images/example-9.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 3
            },
            {
                "path": "sample-images/16s-1.jpg",
                "title": "Aerial view of  station pier columns at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 4
            },
            {"path": "sample-images/16s-2.jpg", "title": "Taman Putra Permai Build Progress", "kind": "image", "id": 4},
            {
                "path": "sample-images/example-8.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 4
            },
            {
                "path": "sample-images/example-9.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 4
            },
            {
                "path": "sample-images/16s-2.jpg",
                "title": "Pier column construction at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 5
            },
            {
                "path": "sample-images/tpp-2.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 5
            },
            {
                "path": "sample-images/example-2.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 5
            },
            {
                "path": "sample-images/example-3.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 5
            },
            {
                "path": "sample-images/example-2.jpg",
                "title": "Aerial view of station pier columns at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 6
            },
            {
                "path": "sample-images/example-4.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 6
            },
            {
                "path": "sample-images/example-5.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 6
            },
            {
                "path": "sample-images/example-6.jpg",
                "title": "Taman Putra Permai Station Construction",
                "kind": "image",
                "id": 6
            },
            {
                "path": "sample-images/example-9.jpg",
                "title": "Aerial view of  station pier columns at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 7
            },
            {"path": "sample-images/tpp3.jpg", "title": "Taman Putra Permai Build Progress", "kind": "image", "id": 7},
            {
                "path": "sample-images/example-8.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 7
            },
            {
                "path": "sample-images/example-9.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 7
            },
            {
                "path": "sample-images/example-8.jpg",
                "title": "Aerial view of  station pier columns at the Taman Putra Permai MRT Station site.",
                "kind": "album",
                "id": 8
            },
            {"path": "sample-images/16s-2.jpg", "title": "Taman Putra Permai Build Progress", "kind": "image", "id": 8},
            {
                "path": "sample-images/example-8.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 8
            },
            {
                "path": "sample-images/example-9.jpg",
                "title": "Taman Putra Permai Build Progress",
                "kind": "image",
                "id": 8
            }
        ];
        var nano_items = [];
        for (var i = 0; i < images.length; i++) {
            image = images[i];
            if (image.kind == 'album') {
                nano_items.push({
                    "src": siteurl + image.path,
                    "srct": siteurl + image.path,
                    "title": image.title,
                    "ID": image.id,
                    "kind": image.kind,
                });
            }
            else if (image.kind == 'image') {
                nano_items.push({
                    "src": siteurl + image.path,
                    "srct": siteurl + image.path,
                    "title": image.title,
                    "albumID": image.id,
                });
            }
        }
        $("#nanoGallery3").nanoGallery({
            items: nano_items,
            whiteList: 'PR1MA @ Cyberjaya 2 PROGRESS - 16-May-17 to 22-May-17',
            thumbnailWidth: 'auto', thumbnailHeight: '200 XS50 SM120 LA200 XL230',
            paginationMaxLinesPerPage: 2,
            imageTransition: 'slide',
            thumbnailLabel: {display: true, align: 'center', position: 'overImageOnBottom'},
            galleryFullpageButton: false,
            theme: 'default',
            i18n: {breadcrumbHome: 'Image Gallery'},
            dataSorting: 'standard',
            touchAutoOpenDelay: -1,
            thumbnailLazyLoad: true
        });
    };

    var _drawSPI = function () {

        Highcharts.setOptions({
            colors: ['#f66', '#ff0', '#0a5']
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
                enabled: false,
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
                max: 100,
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
            }, {
                type: 'gauge',
                data: [78],
                dial: {
                    rearLength: 0
                },
                dataLabels: {
                    y: -150,
                    borderWidth: 0,
                    style: {
                        fontSize: '20px'
                    },
                    format: '{point.y}%'
                }
            }],
        });
    };
    var _ganttChart = function () {

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
            legend: {
                enabled: false
            },
            credits: false,
            xAxis: {
                currentDateIndicator: true,
                min: today - 50 * day,
                max: today + 35 * day,
                scrollbar: {
                    enabled: true
                }
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    point: {
                        events: {
                            click: function () {
                                /*var options = this.options;*/
                                window.location.href = "milestone.php?kc=Section 1&tid=" + this.id;
                            }
                        }
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '16px'
                }
            },
            series: [{
                name: 'Milestones',
                data: [{
                    taskName: '1: PIER - SDE34',
                    id: '1001',
                    color: '#7cb5ec',
                    start: today - 135 * day,
                    end: today + 34 * day,
                    completed: {
                        amount: 0.5
                    }

                }, {
                    taskName: 'PILING',
                    id: '1001-1',
                    parent: '1001',
                    color: '#6495ED',
                    start: today - 135 * day,
                    end: today - 47 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'PILECAPS',
                    id: '1001-2',
                    parent: '1001',
                    color: '#66bb6a',
                    dependency: '1001-1',
                    start: today - 47 * day,
                    end: today - 33 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Sheetpile & Excavation',
                    id: '1002-1',
                    parent: '1001-2',
                    color: '#6495ED',
                    start: today - 47 * day,
                    end: today - 44.5 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Lean con & pile hacking',
                    id: '1002-2',
                    parent: '1001-2',
                    color: '#6495ED',
                    dependency: '1002-1',
                    start: today - 45.5 * day,
                    end: today - 42 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Rebar',
                    id: '1002-3',
                    parent: '1001-2',
                    color: '#6495ED',
                    dependency: '1002-2',
                    start: today - 43 * day,
                    end: today - 40 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Formwork',
                    id: '1002-4',
                    parent: '1001-2',
                    dependency: '1002-3',
                    color: '#6495ED',
                    start: today - 40 * day,
                    end: today - 37 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Concrete',
                    id: '1002-5',
                    parent: '1001-2',
                    color: '#6495ED',
                    dependency: '1002-4',
                    start: today - 39 * day,
                    end: today - 35 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Backfill',
                    id: '1002-6',
                    parent: '1001-2',
                    dependency: '1002-5',
                    color: '#6495ED',
                    start: today - 37 * day,
                    end: today - 33 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'PIERS',
                    id: '1003-1',
                    parent: '1001',
                    color: '#CD5C5C',
                    dependency: '1001-2',
                    start: today - 33 * day,
                    end: today - 19 * day,
                    completed: {
                        amount: 1.00
                    }
                }, {
                    taskName: 'Scaffold',
                    id: '1003-21',
                    parent: '1003-1',
                    color: '#6495ED',
                    start: today - 33 * day,
                    end: today - 30 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: '1 Lift',
                    id: '1003-22',
                    parent: '1003-1',
                    dependency: '1003-21',
                    color: '#6495ED',
                    start: today - 30 * day,
                    end: today - 27 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: '2 Lift',
                    id: '1003-23',
                    parent: '1003-1',
                    color: '#6495ED',
                    dependency: '1003-22',
                    start: today - 27 * day,
                    end: today - 23 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: '3 Lift',
                    id: '1003-24',
                    parent: '1003-1',
                    dependency: '1003-23',
                    color: '#6495ED',
                    start: today - 23 * day,
                    end: today - 19 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'PIERHEAD',
                    id: '1001-4',
                    parent: '1001',
                    color: '#FFA500',
                    dependency: '1003-1',
                    start: today - 19 * day,
                    end: today - 8 * day,
                    completed: {
                        amount: 0.6
                    }

                }, {
                    taskName: 'Pierhead Rebar',
                    id: '1004-21',
                    parent: '1001-4',
                    color: '#6495ED',
                    start: today - 19 * day,
                    end: today - 15 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Pierhead Formwork',
                    id: '1004-22',
                    parent: '1001-4',
                    dependency: '1004-21',
                    color: '#6495ED',
                    start: today - 15 * day,
                    end: today - 12 * day,
                    completed: {
                        amount: 1.0
                    }
                }, {
                    taskName: 'Pierhead Concrete',
                    id: '1004-23',
                    parent: '1001-4',
                    color: '#6495ED',
                    dependency: '1004-22',
                    start: today - 12 * day,
                    end: today - 8 * day,
                    completed: {
                        amount: 0.3
                    }
                }, {
                    taskName: 'BEARINGS',
                    id: '1001-5',
                    parent: '1001',
                    color: '#00FFFF',
                    dependency: '1001-4',
                    start: today - 12 * day,
                    end: today - 10 * day,
                    completed: {
                        amount: 0.0
                    }
                }, {
                    taskName: 'SBG',
                    id: '1001-6',
                    parent: '1001',
                    color: '#696969',
                    dependency: '1001-5',
                    start: today + 11 * day,
                    end: today + 19 * day,
                    completed: {
                        amount: 0.0
                    }
                }, {
                    taskName: 'PARAPET',
                    id: '1001-10',
                    parent: '1001',
                    color: '#FF69B4',
                    dependency: '1001-6',
                    start: today + 20 * day,
                    end: today + 34 * day,
                    completed: {
                        amount: 0.0
                    }
                }]
            }]
        });

    };
    var _pieWithProgress = function (element, size, dataset) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }
        // Initialize chart only if element exsists in the DOM
        if (element) {
            // Demo dataset
            // Main variables
            var d3Container = d3.select(element),
                total = 100,
                width = size,
                height = size,
                progressSpacing = 6,
                progressSize = (progressSpacing + 2),
                arcSize = 20,
                outerRadius = (width / 2),
                innerRadius = (outerRadius - arcSize);
            // Colors
            var color = d3.scale.ordinal()
                .range(['#66BB6A', '#29b6f6', '#66BB6A']);
            // Create chart
            // ------------------------------
            // Add svg element
            var container = d3Container.append("svg");
            // Add SVG group
            var svg = container
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            // Construct chart layout
            // ------------------------------
            // Add dataset
            /*            dataset.forEach(function(d){
             total+= d.count;
             });*/
            // Pie layout
            var pie = d3.layout.pie()
                .value(function (d) {
                    return d.count;
                })
                .sort(null);
            // Inner arc
            var arc = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);
            // Line arc
            var arcLine = d3.svg.arc()
                .innerRadius(innerRadius)
                .outerRadius(innerRadius - progressSpacing)
                .startAngle(0);
            // Append chart elements
            // ------------------------------
            //
            // Animations
            //
            var arcTween = function (transition, newAngle) {
                transition.attrTween("d", function (d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    var interpolateCount = d3.interpolate(0, dataset[0].count);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        middleCount.text((interpolateCount(t))/*d3.format(",d")(Math.floor(interpolateCount(t)))*/ + "%");
                        return arcLine(d);
                    };
                });
            };
            //
            // Donut paths
            //
            // Donut
            var path = svg.selectAll('path')
                .data(pie(dataset))
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', function (d, i) {
                    return color(d.data.name);
                })
                .style({
                    'stroke': '#fff',
                    'stroke-width': 2,
                    'cursor': 'pointer'
                });
            // Animate donut
            path
                .transition()
                .delay(function (d, i) {
                    return i;
                })
                .duration(600)
                .attrTween("d", function (d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            //
            // Line path
            //
            // Line
            var pathLine = svg.append('path')
                .datum({endAngle: 0})
                .attr('d', arcLine)
                .style({
                    fill: '#66BB6A'
                });

            // Line animation
            pathLine.transition()
                .duration(600)
                .delay(300)
                .call(arcTween, (2 * Math.PI) * (dataset[0].count / total));
            //
            // Add count text
            //
            var middleCount = svg.append('text')
                .datum(0)
                .attr('dy', 6)
                .style({
                    'font-size': '32px',
                    'font-weight': 500,
                    'text-anchor': 'middle'
                })
                .text(function (d) {
                    return d;
                });
            //
            // Add interactions
            //
            // Mouse
            path
                .on('mouseover', function (d, i) {
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function (d, i) {
                    $(element + ' [data-slice]').css('opacity', 1);
                });
            //
            // Add legend
            //
            // Append list
            var legend = d3.select(element)
                .append('ul')
                .attr('class', 'chart-widget-legend')
                .selectAll('li')
                .data(pie(dataset))
                .enter()
                .append('li')
                .attr('data-slice', function (d, i) {
                    return i;
                })
                .attr('style', function (d, i) {
                    return 'border-bottom: solid 2px ' + color(d.data.name);
                })
                .text(function (d, i) {
                    return d.data.name + ': ';
                });

            // Append legend text
            legend.append('span')
                .text(function (d, i) {
                    return d.data.count + "%";
                });
        }
    };
    var _activePage = function (element) {
        element.addClass("active");
    };
    return {
        init: function () {
            /*            _activePage($(".nav_proc_yetcalled"));
             _activePage($(".nav_proc_yetcalled").parent().parent());*/
            _fillableGauge("fillgauge1", 10.94, "#9f3", "#178BCA", "#178BCA");
            var dataset1 = [{name: 'Actual', count: 63.40}, {name: 'Remining', count: 36.60}];
            var dataset2 = [{name: 'Actual', count: 84.92}, {name: 'Remining', count: 15.08}];
            var dataset3 = [{name: 'Actual', count: 26}, {name: 'Remining', count: 40}];
            var dataset4 = [{name: 'Actual', count: 15}, {name: 'Remining', count: 20}];
            _pieWithProgress("#kpi_piling", 250, dataset1);
            _pieWithProgress("#kpi_pilecap", 250, dataset2);
            _pieWithProgress("#kpi_pier", 250, dataset3);
            _pieWithProgress("#kpi_pierhead", 250, dataset4);
            _drawScurve('scurve_financial_1')
            _imageGallery();
            _ganttChart();
            _drawSPI();
        }
    }
}();

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

document.addEventListener('DOMContentLoaded', function () {
    Section1Progress.init();
});














