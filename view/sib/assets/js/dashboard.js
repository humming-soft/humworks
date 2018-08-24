var Dashboard = function() {

    var _projectCost1 = function(element){
        Highcharts.setOptions({
            colors: ['#09f','#f50','#f05']
        });
        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo:element
            },
            credits:false,
            title: {
                text: 'Overall Cost'
            },
            xAxis: {
                categories: ['']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'RM (Million)',
                    align: 'high'
                }
            },
            tooltip: {
                formatter: function() {
                    return this.series.name+' : <b>RM '+ this.point.y +' Mil ('+((this.point.y/771)*100).toFixed(2)+'%)</b>';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'top'
                }
            },
            legend: {
                itemWidth: 80
            },
            series: [{
                name: 'Prov. Sum',
                data: [
                    { y : convertIntoMKB(154269000), myData : '' }
                ]
            },{
                name: 'Var. Orders',
                data: [
                    { y : 0, myData : '' }
                ]
            },{
                name: 'Proj. Sum',
                data: [
                    { y : convertIntoMKB(617115000), myData : '' }
                ]
            }]
        });
    };

    var _projectCost2 = function(element){
        Highcharts.setOptions({
            colors: ['#0c9','#f50','#0b42cc']
        });
        Highcharts.chart({
            chart: {
                type: 'column',
                renderTo:element
            },
            title: {
                text: 'Progress Cost'
            },
            credits:false,
            xAxis: {
                categories: ['']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'RM (Million)',
                    align: 'high'
                }
            },
            tooltip: {
                formatter: function() {
                    return this.series.name+' : <b>RM '+ this.point.y +' Mil ('+((this.point.y/771)*100).toFixed(2)+'%)</b>';
                }
            },
            plotOptions: {
                column: {
                    stacking: 'top'
                }
            },
            series: [{
                name: 'Rem. Sum',
                data: [
                    { y : convertIntoMKB(579702791), myData : '' }
                ]
            }, {
                name: 'Paid',
                data: [
                    { y : convertIntoMKB(174255645), myData : '' }
                ]
            },{
                name: 'Rete. Sum',
                data: [
                    { y : convertIntoMKB(17425564), myData : '' }
                ]
            }]
        });

    };

    var _drawScurve = function(element){

        Highcharts.chart({
            chart: {
                type: 'spline',
                renderTo:element
            },
            title: {
                text: '',
                x: -20 //center
            },
            credits:false,
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: ['W32/17','W35/17','W38/17','W41/17','W44/17','W47/17','W50/17','W01/18','W03/18','W06/18','W09/18','W12/18','W15/18','W18/18','W21/18','W24/18','W27/18', 'W30/18','W33/18','W36/18','W39/18','W42/18','W45/18','W48/18','W51/18','W02/19','W05/19','W08/19','W11/19','W14/19', 'W17/19','W20/19','W23/19','W26/19','W29/19','W32/19','W35/19','W38/19','W41/19','W44/19','W47/19','W50/19','W01/20', 'W04/20','W07/20','W10/20','W13/20','W16/20','W19/20','W22/20','W25/20','W28/20','W31/20','W34/20','W37/20','W40/20', 'W43/20','W46/20','W49/20','W52/20','W03/21','W06/21','W09/21','W12/21','W15/21','W18/21','W21/21'],
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

    };

    var _barchart1 = function(element){

        Highcharts.setOptions({
            colors: ['#09f','#0a5','#f05']
        });
        Highcharts.chart({
            chart: {
                renderTo:element,
                type: 'bar'
            },
            title: {
                text: ''
            },

            xAxis: {
                type: 'category'
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            credits: false,
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px"><b>{series.name}</b></span><br>',
                pointFormatter: function(){
                    if(this.name == "Contractual KAD") {
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/><span style="color:'+this.color+'">Date</span>: <b>31-JUL-2019</b>';
                    }else if(this.name == "Forecast Date"){
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/><span style="color:'+this.color+'">Date</span>: <b>16-AUG-2019</b>';
                    }else{
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/>';
                    }
                }
            },

            series: [{
                name: 'Section 1',
                colorByPoint: true,
                data: [ {
                    name: 'Forecast Date',
                    y: 382,
                    color: '#0a5'

                },{
                    name: 'Contractual KAD',
                    y: 365,
                    color: '#3af'

                },{
                    name: 'Variance',
                    y: 16,
                    color:'#f66'

                }]
            }]

        });

    };

    var _barchart2 = function(element) {
        Highcharts.chart({
            chart: {
                renderTo:element,
                type: 'bar'
            },
            title: {
                text: ''
            },

            xAxis: {
                type: 'category'
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            credits: false,
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px"><b>{series.name}</b></span><br>',
                pointFormatter: function(){
                    if(this.name == "Contractual KAD") {
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/><span style="color:'+this.color+'">Date</span>: <b>30-SEP-2019</b>';
                    }else if(this.name == "Forecast Date"){
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/><span style="color:'+this.color+'">Date</span>: <b>19-OCT-2019</b>';
                    }else{
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/>';
                    }
                }
            },

            series: [{
                name: 'Section 1',
                colorByPoint: true,
                data: [ {
                    name: 'Forecast Date',
                    y: 446,
                    color: '#0a5'

                },{
                    name: 'Contractual KAD',
                    y: 426,
                    color: '#3af'

                },{
                    name: 'Variance',
                    y: 19,
                    color:'#f66'

                }]
            }]
        });
    };

    var _barchart3 = function(element) {
        Highcharts.chart({

            chart: {

                type: 'bar',
                renderTo:element
            },
            title: {
                text: ''
            },

            xAxis: {
                type: 'category'
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            },
            credits: false,
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px"><b>{series.name}</b></span><br>',
                pointFormatter: function(){
                    if(this.name == "Contractual KAD") {
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/><span style="color:'+this.color+'">Date</span>: <b>30-NOV-2018</b>';
                    }else if(this.name == "Forecast Date"){
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/><span style="color:'+this.color+'">Date</span>: <b>14-DEC-2018</b>';
                    }else{
                        return '<span style="color:'+this.color+'">'+this.name+'</span>: <b>'+this.y+'</b><br/>';
                    }
                }
            },
            series: [{
                name: 'Section 1',
                colorByPoint: true,
                data: [ {
                    name: 'Forecast Date',
                    y: 147,
                    color: '#0a5'

                },{
                    name: 'Contractual KAD',
                    y: 122,
                    color: '#3af'

                },{
                    name: 'Variance',
                    y: 38,
                    color:'#f66'

                }]
            }]

        });
    };

    var _calcSPI = function(element){
        Highcharts.setOptions({
            colors: ['#f66','#ff0','#0a5']
        });
        Highcharts.chart({
            chart: {
                renderTo: element
            },
            title: {
                //text:''
                text: '<p><b>Schedule Performance Index [SPI]</b> is a ratio of the Earned Value [EV] to he Planned Value [PV].</p>',
                style: {
                    fontSize: 10
                }
            },
            credits: false,
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
            },{
                type: 'gauge',
                data: [87],
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
    };
    var _timeLocationChart = function(dataset,element){

        var chart = visavailChart();
        function draw_visavail() {
            chart.width($(element).width()-200);
            $(element).text('');
            d3.select(element)
                .datum(dataset)
                .call(chart);
        }
        draw_visavail();
        $(window).resize(function () { return draw_visavail(); });

    };
    return {
        init: function() {
            _calcSPI('proj_spi');
            _drawScurve('scurve_financial_1');
            _projectCost1('pcu1');
            _projectCost2('pcu2');
            _barchart1('barchart_1');
            _barchart2('barchart_2');
            _barchart3('barchart_3');
            var dataset = [{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP26",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-09-12", "Piling", "2017-09-30"],
                    ["2017-10-03", "Pilecaps", "2017-10-18"],
                    ["2017-10-28", "Piers", "2017-11-15"],
                    ["2017-11-18", "Pierhead", "2017-12-22"],
                    ["2017-12-22", "Bearing", "2017-12-24"]
                ]
            }, {
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-10-02", "Piling", "2017-10-16"],
                    ["2017-10-18", "Pilecaps", "2017-11-12"],
                    ["2017-11-22", "Piers", "2017-12-14"],
                    ["2017-12-15", "Pierhead", "2018-01-06"],
                    ["2018-01-07", "Bearing", "2018-01-09"],
                    ["2018-04-12", "Deck Launching", "2018-12-24"],
                    ["2019-03-18", "Parapet", "2019-03-20"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP28",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-10-18", "Piling", "2017-11-02"],
                    ["2017-11-03", "Pilecaps", "2017-12-05"],
                    ["2017-12-16", "Piers", "2018-01-04"],
                    ["2018-01-05", "Pierhead", "2018-01-31"],
                    ["2018-02-01", "Bearing", "2018-02-03"],
                    ["2018-07-24", "Deck Launching", "2018-10-28"],
                    ["2019-03-21", "Parapet", "2019-03-23"]

                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP29",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-11-06", "Piling", "2017-11-16"],
                    ["2017-11-17", "Pilecaps", "2017-12-12"],
                    ["2017-12-20", "Piers", "2018-02-11"],
                    ["2018-02-12", "Pierhead", "2018-03-08"],
                    ["2018-03-09", "Bearing", "2018-03-11"],
                    ["2019-01-24", "Deck Launching", "2019-03-12"],
                    ["2019-03-24", "Parapet", "2019-03-26"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP30",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-11-17", "Piling", "2017-11-30"],
                    ["2017-12-02", "Pilecaps", "2017-12-18"],
                    ["2017-12-28", "Piers", "2018-03-10"],
                    ["2018-03-11", "Pierhead", "2018-04-06"],
                    ["2018-04-07", "Bearing", "2018-04-09"],
                    ["2019-01-14", "Deck Launching", "2019-01-20"],
                    ["2019-01-24", "Parapet", "2019-01-26"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP31",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP32",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP33",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP34",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP35",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP36",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP37",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPPN38",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP39",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP40",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP41",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP42",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP43",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP44",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP45",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP46",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP47",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP48",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP49",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP50",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP51",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP52",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP53",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP54",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP55",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP56",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP57",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP58",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP59",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP60",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S01",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S (2/C)",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S02",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S (4/C)",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S03",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S (6/C)",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S04",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S (8/C)",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S05",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S06",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S07",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S08",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S09",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S10",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S11",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S12",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S13",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S14",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S15",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S16",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S17",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S18",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S19",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S20",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S21",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S22",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S23",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S24",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S25",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S26",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S28",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S29",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S30",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> 16S31",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            },{
                "measure_html": "<i class='fa fa-fw fa-binoculars'></i> TPP27",
                "categories": {
                    "Piling": { "color": "#0288d1" },
                    "Pilecaps": { "color": "#4caf50" },
                    "Piers": { "color": "#e35757" },
                    "Pierhead": { "color": "#ff0" },
                    "Bearing": { "color": "#569BB2" },
                    "Deck Launching": { "color": "#221D63" },
                    "Parapet": { "color": "#ff8681" }
                },
                "data": [
                    ["2017-06-30", "Piling", "2017-07-15"],
                    ["2017-09-30", "Pilecaps", "2017-10-15"],
                    ["2017-12-31", "Piers", "2018-01-15"],
                    ["2018-01-15", "Pierhead", "2018-01-22"],
                    ["2018-02-26", "Bearing", "2018-04-15"],
                    ["2018-04-23", "Deck Launching", "2018-07-15"],
                    ["2018-12-10", "Parapet", "2019-01-15"]
                ]
            }];
            _timeLocationChart(dataset,"#tl_chart");
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

document.addEventListener('DOMContentLoaded', function() {
    Dashboard.init();
});













