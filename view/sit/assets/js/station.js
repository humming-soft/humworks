var StationProgress = function() {
    
    var _buildScurve = function (element) {
        Highcharts.chart({
            chart: {
                renderTo:element,
                type: 'spline'
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

    var _imageGallery = function(){

        var siteurl =  "../../assets/images/";

        images = [
            {"path":"sample-images/example-1.jpg","title":"16 Sierra Station Construction","kind":"album","id":1},
            {"path":"sample-images/example-1.jpg","title":"16 Sierra Station Construction","kind":"image","id":1},
            {"path":"sample-images/example-2.jpg","title":"16 Sierra Station Construction","kind":"image","id":1},
            {"path":"sample-images/example-3.jpg","title":"16 Sierra Station Construction","kind":"image","id":1},
            {"path":"sample-images/example-4.jpg","title":"Cyberjaya North Station Construction","kind":"album","id":2},
            {"path":"sample-images/example-4.jpg","title":"Cyberjaya North Station Construction","kind":"image","id":2},
            {"path":"sample-images/example-5.jpg","title":"Cyberjaya North Station Construction","kind":"image","id":2},
            {"path":"sample-images/example-6.jpg","title":"Cyberjaya North Station Construction","kind":"image","id":2},
            {"path":"sample-images/example-7.jpg","title":"Pier 16S23 Build Progress","kind":"album","id":3},
            {"path":"sample-images/example-7.jpg","title":"Pier 16S23 Build Progress","kind":"image","id":3},
            {"path":"sample-images/example-8.jpg","title":"Pier 16S23 Build Progress","kind":"image","id":3},
            {"path":"sample-images/example-9.jpg","title":"Pier 16S23 Build Progress","kind":"image","id":3}
        ];
        var nano_items = [];
        for(var i=0;i<images.length;i++){
            image = images[i];
            if(image.kind == 'album'){
                nano_items.push({
                    "src":  siteurl+image.path,
                    "srct":  siteurl+image.path,
                    "title":  image.title,
                    "ID":  image.id,
                    "kind":  image.kind,
                });
            }
            else if(image.kind == 'image'){
                nano_items.push({
                    "src":  siteurl+image.path,
                    "srct":  siteurl+image.path,
                    "title":  image.title,
                    "albumID":  image.id,
                });
            }
        }
        $("#nanoGallery2").nanoGallery({
            items: nano_items,
            whiteList: 'PR1MA @ Cyberjaya 2 PROGRESS - 16-May-17 to 22-May-17',
            thumbnailWidth: 'auto', thumbnailHeight: '200 XS50 SM120 LA200 XL230',
            paginationMaxLinesPerPage: 2,
            imageTransition: 'slide',
            thumbnailLabel: {display: true, align: 'center', position: 'overImageOnBottom'},
            galleryFullpageButton: false,
            theme: 'default',
            i18n: {breadcrumbHome: 'Section 1 Image Gallery'},
            dataSorting: 'standard',
            touchAutoOpenDelay: -1,
            thumbnailLazyLoad: true
        });
    };

    var _fillableGauge = function(element, size){
        var config1 = liquidFillGaugeDefaultSettings();
        config1.circleColor = "#66bb6a";
        config1.waveColor = "#6CC42E";
        config1.textColor = "#9f3";
        config1.waveAnimateTime = 2000;
        config1.waveHeight = 0.13;
        config1.waveCount = 1;
        var gauge1 = loadLiquidFillGauge(element, size, config1);
    };

    var _pieWithProgress = function(element, size,dataset) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }
        // Initialize chart only if element exsists in the DOM
        if(element) {
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
                .range(['#EF5350', '#29b6f6', '#66BB6A']);
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
                .value(function(d){ return d.count; })
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
            var arcTween = function(transition, newAngle) {
                transition.attrTween("d", function (d) {
                    var interpolate = d3.interpolate(d.endAngle, newAngle);
                    var interpolateCount = d3.interpolate(0, dataset[0].count);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        middleCount.text(d3.format(",d")(Math.floor(interpolateCount(t)))+"%");
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
                .attr('fill', function(d, i) {
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
                .delay(function(d, i) { return i; })
                .duration(600)
                .attrTween("d", function(d) {
                    var interpolate = d3.interpolate(d.startAngle, d.endAngle);
                    return function(t) {
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
                    'font-size': '21px',
                    'font-weight': 500,
                    'text-anchor': 'middle'
                })
                .text(function(d){
                    return d;
                });
            //
            // Add interactions
            //
            // Mouse
            path
                .on('mouseover', function(d, i) {
                    $(element + ' [data-slice]').css({
                        'opacity': 0.3,
                        'transition': 'all ease-in-out 0.15s'
                    });
                    $(element + ' [data-slice=' + i + ']').css({'opacity': 1});
                })
                .on('mouseout', function(d, i) {
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
                .attr('data-slice', function(d, i) {
                    return i;
                })
                .attr('style', function(d, i) {
                    return 'border-bottom: solid 2px ' + color(d.data.name);
                })
                .text(function(d, i) {
                    return d.data.name + ': ';
                });

            // Append legend text
            legend.append('span')
                .text(function(d, i) {
                    return d.data.count+"%";
                });
        }
    };

    // Segmented gauge
    var _segmentedGauge = function(element, size, min, max, sliceQty) {
        if (typeof d3 == 'undefined') {
            console.warn('Warning - d3.min.js is not loaded.');
            return;
        }
        // Initialize chart only if element exsists in the DOM
        if(element) {
            // Main variables
            var d3Container = d3.select(element),
                width = size,
                height = (size / 2) + 30,
                radius = (size / 2),
                ringInset = 15,
                ringWidth = 50,

                pointerWidth = 10,
                pointerTailLength = 5,
                pointerHeadLengthPercent = 0.75,

                minValue = min,
                maxValue = max,

                minAngle = -90,
                maxAngle = 90,

                slices = sliceQty,
                range = maxAngle - minAngle,
                pointerHeadLength = Math.round(radius * pointerHeadLengthPercent);

            // Colors
            var colors = d3.scale.ordinal()
                .range(['#EF5350','#ff0','#00aa55']);
            // Create chart
            // ------------------------------
            // Add SVG element
            var container = d3Container.append('svg');
            // Add SVG group
            var svg = container
                .attr('width', width)
                .attr('height', height);
            // Construct chart layout
            // ------------------------------
            // Donut
            var arc = d3.svg.arc()
                .innerRadius(radius - ringWidth - ringInset)
                .outerRadius(radius - ringInset)
                .startAngle(function(d, i) {
                    var ratio = d * i;
                    return deg2rad(minAngle + (ratio * range));
                })
                .endAngle(function(d, i) {
                    var ratio = d * (i + 1);
                    return deg2rad(minAngle + (ratio * range));
                });
            // Linear scale that maps domain values to a percent from 0..1
            var scale = d3.scale.linear()
                .range([0, 1])
                .domain([minValue, maxValue]);
            // Ticks
            var ticks = scale.ticks(slices);
            var tickData = d3.range(slices)
                .map(function() {
                    return 1 / slices;
                });
            // Calculate angles
            function deg2rad(deg) {
                return deg * Math.PI / 180;
            }
            // Calculate rotation angle
            function newAngle(d) {
                var ratio = scale(d);
                var newAngle = minAngle + (ratio * range);
                return newAngle;
            }
            // Append chart elements
            // ------------------------------
            //
            // Append arc
            //
            // Wrap paths in separate group
            var arcs = svg.append('g')
                .attr('transform', "translate(" + radius + "," + radius + ")")
                .style({
                    'stroke': '#fff',
                    'stroke-width': 2,
                    'shape-rendering': 'crispEdges'
                });
            // Add paths
            arcs.selectAll('path')
                .data(tickData)
                .enter()
                .append('path')
                .attr('fill', function(d, i) {
                    return colors(i);
                })
                .attr('d', arc);
            //
            // Text labels
            //
            // Wrap text in separate group
            var arcLabels = svg.append('g')
                .attr('transform', "translate(" + radius + "," + radius + ")");

            // Add text
            arcLabels.selectAll('text')
                .data(ticks)
                .enter()
                .append('text')
                .attr('transform', function(d) {
                    var ratio = scale(d);
                    var newAngle = minAngle + (ratio * range);
                    return 'rotate(' + newAngle + ') translate(0,' + (10 - radius) + ')';
                })
                .style({
                    'text-anchor': 'middle',
                    'font-size': 11,
                    'fill': '#999'
                })
                .text(function(d) { return d + "%"; });
            //
            // Pointer
            //
            // Line data
            var lineData = [
                [pointerWidth / 2, 0],
                [0, -pointerHeadLength],
                [-(pointerWidth / 2), 0],
                [0, pointerTailLength],
                [pointerWidth / 2, 0]
            ];
            // Create line
            var pointerLine = d3.svg.line()
                .interpolate('monotone');
            // Wrap all lines in separate group
            var pointerGroup = svg
                .append('g')
                .data([lineData])
                .attr('transform', "translate(" + radius + "," + radius + ")");
            // Paths
            pointer = pointerGroup
                .append('path')
                .attr('d', pointerLine)
                .attr('transform', 'rotate(' + minAngle + ')');
            pointer.transition()
                .duration(2500)
                .ease('elastic')
                .attr('transform', 'rotate(30)');
        }
    };

    return {
        init: function() {
            _buildScurve('scurve_financial_1');
            _imageGallery();
            _fillableGauge("fillgauge1",39.2);
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    StationProgress.init();
});













