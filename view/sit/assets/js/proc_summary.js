var ProcSummary = function() {

    var _procStatus = function(element){
        Highcharts.setOptions({
            colors: ['#09f','#0a5','#FF0000']
        });
        try {
            Highcharts.chart({
                chart: {
                    renderTo:element,
                    style: {
                        fontFamily: 'inherit'
                    }
                },
                title: {
                    text: '<p style="color: #000;font-size: 330%; text-align: center; margin-bottom:0" id="piechart_packages_total">86</p><p style="color: #9EDD2E;text-align: center">Packages</p>',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: -50,
                    useHTML: true
                },
                tooltip: {
                    enabled: true,
                    pointFormat: '<b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: 20,
    /*                        style: {
                                fontWeight: 'bold',
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            },*/
                            formatter: function () {
                                return this.y;
                            }
                        },
                        showInLegend: true,
                        point: {
                            events: {
                                click: function (event) {
                                    var options = this.options;
                                    if (options.name == "Awarded"){}
                                        /*loadPage('procurement/awarded');*/
                                    else if (options.name == "Yet to be called"){}
                                       /* loadPage('procurement/yetcalled');*/
                                    else if (options.name == "Called in & In Progress"){}
                                        /*loadPage('procurement/called');*/
                                    //console.log(options);

                                },
/*                                legendItemClick: function (e) {
                                    /!* To calculate what is the total package shown in pie chart *!/
                                    var pts = e.currentTarget.series.points;
                                    var sum = ((!e.currentTarget.visible) ? e.currentTarget.y : 0);
                                    for (var i = 0; i < pts.length; i++) {
                                        if (pts[i].name == e.currentTarget.name)
                                            continue;
                                        if (pts[i].visible)
                                            sum += pts[i].y;
                                    }
                                    //$('#piechart_packages_total').text(sum);
                                }*/
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '',
                    data: [
                        ['Awarded', 80],
                        ['Yet to be called', 4],
                        ['Called in & In Progress', 2]
                    ],
                    innerSize: '90%'
                }],
                credits: {enabled: false}
            });
        }catch(e){
            console.log(e);
        }
    };
    var _procStatusAwarded = function(element){
        Highcharts.setOptions({
            colors: ['#1aadce', '#492970', '#f28f43', '#77a1e5', '#c42525']
        });
        try {
            Highcharts.chart({
                chart: {
                    type: 'column',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    renderTo: element,
                    style: {
                        fontFamily: 'inherit'
                    }
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '14px'
                        }
                    },
                    categories: [
                        'Advanced Work',
                        'Elevated Guideways', //4
                        'Depot', //3
                        'Underground Work', //2
                        'Multistorey Carparks', //7
                        'System', //6
                        'Elevated Stations', //5
                        'Civil & Structural and Other Works' //8
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: ''
                    },
                    gridLineColor: 'rgba(255,255,255,0.1)'
                },
                tooltip: {
                    headerFormat: '<div style="width:235px"><span style="font-size:16px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0;font-size:13px">{series.name}: </td>' +
                    '<td style="padding:0 0 0 20px; color:{series.color}; font-weight:normal">{point.y}</td></tr>',
                    footerFormat: '</table></div>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    },
                    series: {
                        point: {
                            events: {
                                click: function (e) {
                                    var name = e.currentTarget.series.name.toLowerCase();
                                    if (name == "awarded")
                                        loadPage('procurement/awarded');
                                    else if (name == "yet to be called")
                                        loadPage('procurement/yetcalled');
                                    else if (name == "called in & in progress")
                                        loadPage('procurement/called');
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'Total',
                    data: [22, 8, 2, 1, 7, 11, 8, 26]

                }, {
                    name: 'Awarded',
                    data: [22, 8, 2, 1, 6, 11, 8, 19]

                }, {
                    name: 'Called in & In Progress',
                    data: [0, 0, 0, 0, 0, 0, 0, 3]

                }, {
                    name: 'Yet to be called',
                    data: [0, 0, 0, 0, 1, 0, 0, 4]

                }],
                credits: {
                    enabled: false
                }
            });
        }catch(e){
            console.log(e);
        }
    }
    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {

            _procStatus('chart_wp');
            _procStatusAwarded('chart_status_awarded');
            _activePage($(".nav_proc_summary"));
            _activePage($(".nav_proc_summary").parent().parent());
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    ProcSummary.init();
});













