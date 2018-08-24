var landAcqusition = function() {

        var _overallSectors = function(element, size,data) {
            if (typeof d3 == 'undefined') {
                console.warn('Warning - d3.min.js is not loaded.');
                return;
            }
            // Initialize chart only if element exsists in the DOM
            if(element) {
                // Basic setup
                // ------------------------------
                // Add data set
                // Main variables
                var d3Container = d3.select(element),
                    distance = 2, // reserve 2px space for mouseover arc moving
                    radius = (size/2) - distance,
                    sum = d3.sum(data, function(d) { return d.value; });
                // Tooltip
                // ------------------------------
                var tip = d3.tip()
                    .attr('class', 'd3-tip')
                    .offset([-10, 0])
                    .direction('e')
                    .html(function (d) {
                        return "<ul class='list-unstyled mb-1'>" +
                            "<li>" + "<div class='font-size-base my-1'>" + d.data.icon + d.data.status + "</div>" + "</li>" +
                            "<li>" + "Total: &nbsp;" + "<span class='font-weight-semibold float-right'>" + d.value + "</span>" + "</li>" +
                            "<li>" + "Share: &nbsp;" + "<span class='font-weight-semibold float-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                            "</ul>";
                    });
                // Create chart
                // ------------------------------
                // Add svg element
                var container = d3Container.append("svg").call(tip);

                // Add SVG group
                var svg = container
                    .attr("width", size)
                    .attr("height", size)
                    .append("g")
                    .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");
                // Construct chart layout
                // ------------------------------
                // Pie
                var pie = d3.layout.pie()
                    .sort(null)
                    .startAngle(Math.PI)
                    .endAngle(3 * Math.PI)
                    .value(function (d) {
                        return d.value;
                    });
                // Arc
                var arc = d3.svg.arc()
                    .outerRadius(radius)
                    .innerRadius(radius / 1.35);
                //
                // Append chart elements
                //
                // Group chart elements
                var arcGroup = svg.selectAll(".d3-arc")
                    .data(pie(data))
                    .enter()
                    .append("g")
                    .attr("class", "d3-arc")
                    .style({
                        'stroke': '#fff',
                        'stroke-width': 2,
                        'cursor': 'pointer'
                    });
                // Append path
                var arcPath = arcGroup
                    .append("path")
                    .style("fill", function (d) {
                        return d.data.color;
                    });
                //
                // Add interactions
                //
                // Mouse
                arcPath
                    .on('mouseover', function(d, i) {

                        // Transition on mouseover
                        d3.select(this)
                            .transition()
                            .duration(500)
                            .ease('elastic')
                            .attr('transform', function (d) {
                                d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                                var x = Math.sin(d.midAngle) * distance;
                                var y = -Math.cos(d.midAngle) * distance;
                                return 'translate(' + x + ',' + y + ')';
                            });

                        $(element + ' [data-slice]').css({
                            'opacity': 0.3,
                            'transition': 'all ease-in-out 0.15s'
                        });
                        $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                    })
                    .on('mouseout', function(d, i) {

                        // Mouseout transition
                        d3.select(this)
                            .transition()
                            .duration(500)
                            .ease('bounce')
                            .attr('transform', 'translate(0,0)');

                        $(element + ' [data-slice]').css('opacity', 1);
                    });
                // Animate chart on load
                arcPath
                    .transition()
                    .delay(function(d, i) {
                        return i * 500;
                    })
                    .duration(500)
                    .attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.startAngle,d.endAngle);
                        return function(t) {
                            d.endAngle = interpolate(t);
                            return arc(d);
                        };
                    });
                //
                // Add text
                //
                // Total
                svg.append('text')
                    .attr('class', 'text-muted')
                    .attr({
                        'class': 'half-donut-total',
                        'text-anchor': 'middle',
                        'dy': -13
                    })
                    .style({
                        'font-size': '18px',
                        'fill': '#999'
                    })
                    .text('Total Land Lots');
                // Count
                svg
                    .append('text')
                    .attr('class', 'half-donut-count')
                    .attr('text-anchor', 'middle')
                    .attr('dy', 14)
                    .style({
                        'font-size': '23px',
                        'font-weight': 500
                    });
                // Animate count
                svg.select('.half-donut-count')
                    .transition()
                    .duration(1500)
                    .ease('linear')
                    .tween("text", function(d) {
                        var i = d3.interpolate(this.textContent, sum);

                        return function(t) {
                            this.textContent = d3.format(",d")(Math.round(i(t)));
                        };
                    });
                //
                // Add legend
                //
                // Append list
                var legend = d3.select(element)
                    .append('ul')
                    .attr('class', 'chart-widget-legend')
                    .selectAll('li')
                    .data(pie(data))
                    .enter()
                    .append('li')
                    .attr('data-slice', function(d, i) {
                        return i;
                    })
                    .attr('style', function(d, i) {
                        return 'border-bottom: solid 2px ' + d.data.color;
                    })
                    .text(function(d, i) {
                        return d.data.status + ': ';
                    });
                // Append text
                legend.append('span')
                    .text(function(d, i) {
                        return d.data.value;
                    });
            }
    };
    var _packageSectors = function(element){
        Highcharts.setOptions({
            colors: ['#EF5350','#66BB6A']
        });
        Highcharts.chart({
            chart:{
                renderTo: element
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['GS01','GS02','GS03','GS04','UG','GS05','GS06','GS07','GS08','GS09','GS10','DEPOT1','DEPOT2','CLQ1','CLQ2','TC1','TC2']
            },
            yAxis: {
                labels:{
                    enabled: false
                },
                title: {
                    text: '',
                    align: 'middle'
                }
            },
            rangeSelector: {
                selected: 1
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: ''
            },
            plotOptions: {
                series:{
                    dataLabels: {
                        enabled: true,
                        style:{
                            color:'#000'
                        }
                    }
                },
                column: {
                    borderColor: 'transparent'
                }
            },
            series: [{
                type: 'column',
                name: 'Government Owned Land',
                data: [3, 13, 10, 10, 3 ,3, 7, 6, 26, 3,14, 1, 2, 2, 2 ,2, 2]
            },{
                type: 'column',
                name: 'Private Owned Land',
                data: [28, 13, 8, 5, 5 ,8, 8, 71, 18, 14,17,32,27, 27, 27 ,27, 27]
            }
            ],
            credits: {
                enabled: false
            }
        });

    };
    var _processLandAcquisition = function(element){
        Highcharts.setOptions({
            colors: ['#5673f2', '#f0ad4e','#3df458']
        });
        Highcharts.chart({
            chart:{
                renderTo: element
            },
            title: {
                text: null
            },
            xAxis: {
                categories: ['GS01','GS02','GS03','GS04','UG','GS05','GS06','GS07','GS08','GS09','GS10','DEPOT1','DEPOT2','CLQ1','CLQ2','TC1','TC2']
            },
            yAxis: {
                labels:{
                    enabled: false
                },
                title: {
                    text: '',
                    align: 'middle'
                },
                min:0,
                max:100
            },
            rangeSelector: {
                selected: 1
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '%'
            },
            plotOptions: {
                series:{
                    dataLabels: {
                        enabled: true,
                        style:{
                            color:'#000'
                        },
                        formatter: function(){
                            return this.point.y+'%';
                        }
                    }
                },
                column: {
                    borderColor: 'transparent'
                }
            },
            series: [{
                type: 'column',
                name: 'Form H',
                data: [82, 87, 76, 86,99 ,93, 93, 78, 94, 75, 80,100, 100, 100, 100, 100 ,100]
            },{
                type: 'column',
                name: 'Payment',
                data: [18, 13, 24, 14, 7 ,7, 7, 7, 22, 6,25, 20, 100, 100, 100 ,94, 100]
            },{
                type: 'column',
                name: 'Form K',
                data: [28, 13, 8, 5, 5 ,8, 8, 71, 18, 14,17,32,27, 27, 27 ,27, 27]
            }
            ],
            credits: {
                enabled: false
            }
        });
    };
    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            var data = [
                {
                    "status": "Private",
                    "icon": "<i class='badge badge-mark border-success-300 mr-2'></i>",
                    "value": 362,
                    "color": "#66BB6A"
                }, {
                    "status": "Government",
                    "icon": "<i class='badge badge-mark border-danger-300 mr-2'></i>",
                    "value": 109,
                    "color": "#EF5350"
                }
            ];
            _overallSectors("#donut_basic_details", 260 , data);
            _packageSectors('package_owned');
            _processLandAcquisition('acq_progress');
            _activePage($(".nav_land_acquisition"));
            /*_activePage($(".nav_proc_called").parent().parent());*/
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    landAcqusition.init();
});













