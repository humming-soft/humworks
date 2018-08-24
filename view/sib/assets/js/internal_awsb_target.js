var AwsbTargets = function() {

    var _formatDate = function(date){
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    var _pileCapProgress = function(element){

        Highcharts.setOptions({
            colors: ['#0a5','#09f','#f05']
        });
        var options = {
            chart: {
                renderTo: element,
                type: 'xrange'
            },
            title: {
                text: 'Internal AWSB Target'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                },
                categories: ['Sheetpile & Excavation', 'Lean Con & Pile Hacking', 'Rebar', 'Formwork','Concrete','Backfill'],
                reversed: true
            },
            legend:{
                enabled:false
            },
            credits:false,
            series: [{
                name: 'Pilecap',
                borderColor: 'gray',
                pointWidth: 20,
                data: [{
                    x: Date.UTC(2018, 4, 15),
                    x2: Date.UTC(2018, 4, 19),
                    y: 0,
                    partialFill: 1,
                    color:'#0a5'
                }, {
                    x: Date.UTC(2018, 4, 19),
                    x2: Date.UTC(2018, 4, 22),
                    y: 1,
                    color:'#ff0'
                }, {
                    x: Date.UTC(2018, 4, 22),
                    x2: Date.UTC(2018, 4, 27),
                    y: 2,
                    color:'gray'
                }, {
                    x: Date.UTC(2018, 4, 27),
                    x2: Date.UTC(2018, 4, 29),
                    y: 3,
                    color:'gray'
                }, {
                    x: Date.UTC(2018, 4, 29),
                    x2: Date.UTC(2018, 4, 30),
                    y: 4,
                    color:'gray'
                }, {
                    x: Date.UTC(2018, 4, 30),
                    x2: Date.UTC(2018, 5, 02),
                    y: 5,
                    color:'gray'
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        if(this.point.partialFill == 1) {
                            return 'Completed';
                        }else{
                            var xd = new Date(this.point.x2);
                            return _formatDate(xd);
                        }
                    }
                }
            }]

        };
        var pilecap_chart = new Highcharts.Chart(options);

        $("#pier_ref").on('change', function(){
            var selVal = $("#pier_ref").val();
            if(selVal == "TPP28")
            {
                options.series = [{
                    name: 'Pilecap',
                    borderColor: 'gray',
                    pointWidth: 20,
                    data: [{
                        x: Date.UTC(2018, 5, 15),
                        x2: Date.UTC(2018, 5, 19),
                        y: 0,
                        partialFill: 1,
                        color:'#0a5'
                    }, {
                        x: Date.UTC(2018, 5, 19),
                        x2: Date.UTC(2018, 5, 22),
                        y: 1,
                        partialFill: 0.25,
                        color:'#ff0'
                    }, {
                        x: Date.UTC(2018, 5, 22),
                        x2: Date.UTC(2018, 5, 27),
                        y: 2,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 27),
                        x2: Date.UTC(2018, 5, 29),
                        y: 3,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 29),
                        x2: Date.UTC(2018, 5, 30),
                        y: 4,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 30),
                        x2: Date.UTC(2018, 6, 02),
                        y: 5,
                        color:'gray'
                    }],
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if(this.point.partialFill == 1) {
                                return 'Completed';
                            }else{
                                var xd = new Date(this.point.x2);
                                return _formatDate(xd);
                            }
                        }
                    }
                }];
            }else if(selVal == "TPP33"){
                options.series = [{
                    name: 'Pilecap',
                    borderColor: 'gray',
                    pointWidth: 20,
                    data: [{
                        x: Date.UTC(2018, 5, 07),
                        x2: Date.UTC(2018, 5, 09),
                        y: 0,
                        partialFill: 0.10,
                        color:'#ff0'
                    }, {
                        x: Date.UTC(2018, 5, 09),
                        x2: Date.UTC(2018, 5, 11),
                        y: 1,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 11),
                        x2: Date.UTC(2018, 5, 16),
                        y: 2,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 16),
                        x2: Date.UTC(2018, 5, 18),
                        y: 3,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 18),
                        x2: Date.UTC(2018, 5, 19),
                        y: 4,
                        color:'gray'
                    }, {
                        x: Date.UTC(2018, 5, 19),
                        x2: Date.UTC(2018, 5, 22),
                        y: 5,
                        color:'gray'
                    }],
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if(this.point.partialFill == 1) {
                                return 'Completed';
                            }else{
                                var xd = new Date(this.point.x2);
                                return _formatDate(xd);
                            }
                        }
                    }
                }];
            }
            var chart = new Highcharts.Chart(options);
        });

    };

    var _pierColumnProgress = function(element){

        var opt_pier_column = {
            chart: {
                renderTo: element,
                type: 'xrange'
            },
            title: {
                text: 'Internal AWSB Target'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                },
                categories: ['Scaffold', '1 Lift', '2 Lift', '3 Lift','4 Lift','5 Lift'],
                reversed: true
            },
            legend:{
                enabled:false
            },
            credits:false,
            series: [{
                name: 'Pilecap',
                borderColor: 'gray',
                pointWidth: 20,
                data: [{
                    x: Date.UTC(2018, 4, 15),
                    x2: Date.UTC(2018, 4, 19),
                    y: 0,
                    partialFill: 1,
                    color:'#0a5'
                }, {
                    x: Date.UTC(2018, 4, 19),
                    x2: Date.UTC(2018, 4, 22),
                    y: 1,
                    partialFill: 1,
                    color:'#0a5'
                }, {
                    x: Date.UTC(2018, 4, 22),
                    x2: Date.UTC(2018, 4, 27),
                    y: 2,
                    partialFill: 1,
                    color:'#0a5'
                }, {
                    x: Date.UTC(2018, 4, 27),
                    x2: Date.UTC(2018, 4, 29),
                    y: 3,
                    partialFill: 0.99,
                    color:'#0a5'
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        if(this.point.partialFill == 1) {
                            return 'Completed';
                        }else{
                            var xd = new Date(this.point.x2);
                            return _formatDate(xd);
                        }
                    }
                }
            }]

        };
        var pilecap_chart = new Highcharts.Chart(opt_pier_column);

    };

    var _pierHeadProgress = function(element){

        var opt_pier_head = {
            chart: {
                renderTo: element,
                type: 'xrange'
            },
            title: {
                text: 'Internal AWSB Target'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                },
                categories: ['Rebar','Formwork','Concrete'],
                reversed: true
            },
            legend:{
                enabled:false
            },
            credits:false,
            series: [{
                name: 'Pilecap',
                borderColor: 'gray',
                pointWidth: 20,
                data: [{
                    x: Date.UTC(2018, 4, 05),
                    x2: Date.UTC(2018, 4, 07),
                    y: 0,
                    color:'#ff0'
                }, {
                    x: Date.UTC(2018, 4, 07),
                    x2: Date.UTC(2018, 4, 10),
                    y: 1,
                    color:'gray'
                }, {
                    x: Date.UTC(2018, 4, 10),
                    x2: Date.UTC(2018, 4, 11),
                    y: 2,
                    color:'gray'
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        if(this.point.partialFill == 1) {
                            return 'Completed';
                        }else{
                            var xd = new Date(this.point.x2);
                            return _formatDate(xd);
                        }
                    }
                }
            }]

        };
        var pilecap_chart = new Highcharts.Chart(opt_pier_head);
    };


    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            /*            _activePage($(".nav_proc_yetcalled"));
                        _activePage($(".nav_proc_yetcalled").parent().parent());*/
            _pileCapProgress('pilecap');
            _pierColumnProgress('piercolumn');
            _pierHeadProgress('pierhead');
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    AwsbTargets.init();
});













