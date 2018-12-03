var Interactive = function() {

    var buildChart = function(){
        const margin = 60;
        const width = 1000 - 2 * margin;
        const height = 600 - 2 * margin;
        const svg = d3.select('#chart');

        const chart = svg.append('g')
            .attr('transform', translate(margin, margin));
        const yScale = d3.scaleLinear()
            .range([height, 0])
            .domain([0, 100]);
        chart.append('g')
            .call(d3.axisLeft(yScale));
        const xScale = d3.scaleBand()
            .range([0, width])
            .domain(sample.map((s) => s.language))
            .padding(0.2);
        
        chart.append('g')
            .attr('transform', translate(0, height))
            .call(d3.axisBottom(xScale));        
        chart.selectAll()
            .data(goals)
            .enter()
            .append('rect')
            .attr('x', (s) => xScale(s.language))
            .attr('y', (s) => yScale(s.value))
            .attr('height', (s) => height - yScale(s.value))
            .attr('width', xScale.bandwidth())
            .attr('x', (actual, index, array) => xScale(actual.value));

        chart.append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom()
                .scale(xScale)
                .tickSize(-height, 0, 0)
                .tickFormat(''));

        chart.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft()
                .scale(yScale)
                .tickSize(-width, 0, 0)
                .tickFormat(''));

        svg.append('text')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('Love meter (%)');
        
        svg.append('text')
            .attr('x', width / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text('Most loved programming languages in 2018');     
            
        svgElement
            .on('mouseenter', function (actual, i) {
                d3.select(this).attr('opacity', 0.5)
            })
            .on('mouseleave', function (actual, i) {
                d3.select(this).attr('opacity', 1)
            });            

    };

    var buildChart2 = function(){
        return Highcharts.chart('container', {
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        
            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        
            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        
            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        
            }]
        });
    };

    var initColumn = function(chart,d,inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            },
            plotOptions: {
                series: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    stacking: undefined
                }
            },
        });
    };
    var initLine = function(chart, d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            }
        });
    };
    var initBar = function(chart, d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            },
            plotOptions: {
                series: {
                    stacking: undefined
                }
            }
        });
    };
    var initStackedBar = function(chart, d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            }
        });
    };

    var initStackedColumn = function(chart, d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            }
        });
    };

    var initRangeColumn = function(chart, d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            }
        });
    };

    var initArea = function(chart,d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            }
        });
    };

    var initPie = function(chart,d){
        chart.update({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: d
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer'
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }]
        });
    };

    var initPolar = function(chart, d, inverted){
        
        chart.update({
            chart:{
                chart : d,
                inverted: inverted,
                polar: true
            },
            plotOptions: {
                series: {
                    stacking: undefined
                }
            },
        });
    };

    var initSpline = function(chart, d, inverted){
        chart.update({
            chart:{
                type : d,
                inverted: inverted,
                polar: false
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
                }
            }
        });

    };

    return {
        init: function() {
            var chart = buildChart2();
            initColumn(chart,'column', false);
            $("#chart_change").on('change',function(){
                switch($(this).val()){
                    case 'line':
                        initLine(chart,'line', false);
                        break;
                    case 'bar':
                        initBar(chart,'bar', false);
                        break;       
                    case 'stacked_bar':
                        initStackedBar(chart,'bar', false);
                        break;       
                    case 'stacked_column':
                        initStackedColumn(chart,'column', false);
                        break;  
                    case 'range_column':
                        initStackedColumn(chart,'columnrange', true);
                        break;                                           
                    case 'column':
                        initColumn(chart,'column', false);
                        break;     
                    case 'inverted_column':
                        initColumn(chart,'column', true);
                        break;                        
                    case 'spline':
                        initSpline(chart,'spline', false);
                        break; 
                    case 'area':
                        initArea(chart,'area', false);
                        break; 
                    case 'column_polar':
                        initPolar(chart, 'column', false);
                        break;   
                    case 'pie':
                        initPie(chart, 'pie');
                        break;                                  
                    default:
                        initColumn(chart,'column', false);
                }
            });
        }
    }
}();
document.addEventListener('DOMContentLoaded', function() {
    Interactive.init();
});