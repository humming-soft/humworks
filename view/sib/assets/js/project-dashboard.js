var Dashboard = function() {
       var _lineLoader = function(element,width,height,dataPath){
           var container = d3.select(element);
           var map = d3.tubeMap()
               .width(width)
               .height(height)
               .margin({
                   top: 8,
                   right: 10,
                   bottom: 30,
                   left: 100
               });

           d3.json(dataPath, function (error, data) {
               container
                   .datum(data).call(map);

               container.selectAll('.label')
                   .attr('title', function (d) { return d.label; })
                   .attr('data-content', function (d) { return d.address; })
                   .attr('data-trigger', 'focus')
                   .attr('tabindex', 0);

              /* $('svg .label').popover({ container: 'body' });*/
               $('svg .label').on("click",function(){
                   window.location.href = "pier_info.php";
               });

/*               var svg = container.select('svg');

                      zoom = d3
                           .zoom()
                           .scaleExtent([.01, 8])
                           .on('zoom', zoomed);

                       var zoomContainer = svg.call(zoom);
                       var initialScale = 1;
                       var initialTranslate = [100, 200];

                       zoom.scaleTo(zoomContainer, initialScale);
                       zoom.translateTo(zoomContainer, initialTranslate[0], initialTranslate[1]);

                       function zoomed() {
                           svg.select('g').attr('transform', d3.event.transform.toString());
                           $('.popover').popover('update')
                       }*/
           });
        };

    var _drawBar = function(type,element,title,planned,actual,variance){

        Highcharts.chart({
            chart: {
                type: type,
                renderTo:element,
                backgroundColor:'rgba(255, 255, 255, 0.0)'
            },
            title: {
                text: '',
            },
            subtitle:{
                text: '',
            },
            credits: false,
            xAxis: {
                labels: {
                    style: {
                        color: '#000000'
                    }
                },
                type: 'category'
            },
            yAxis: {
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                labels: {
                    enabled: false,
                    style: {
                        color: '#000000'
                    }
                },
                title: {
                    enabled: false,
                    style: {
                        color: '#000000'
                    }
                }

            },

            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        color : '#000000'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Planned',
                    y: planned,
                    color: '#0070C0'

                }, {
                    name: 'Actual',
                    y: actual,
                    color: '#04B152'

                }, {
                    name: 'Variance',
                    y: variance,
                    color:'#FF0000'

                }]
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 200
                    },
                    chartOptions: {
                        subtitle: {
                            style: {
                                fontSize: '10px'
                            }
                        },
                        xAxis: {
                            labels: {
                                style: {
                                    fontSize: '10px'
                                }
                            }
                        }
                    }
                },{
                        condition: {
                            maxWidth: 100
                        },
                        chartOptions: {
                            subtitle: {
                                style: {
                                    fontSize: '10px'
                                }
                            },
                            xAxis: {
                                labels: {
                                    style: {
                                        fontSize: '10px'
                                    }
                                }
                            }
                        }
                    }]
            }
        });
    };

    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            _lineLoader('#plate_vector_map',1500,675,"assets/data/dashdata_final.json");
            _drawBar('bar','barchart_1_left','SECTION 1 (/days)',45,24,21);
            _drawBar('bar','barchart_1_center','SECTION 2 (/days)',31,19,12);
            _drawBar('bar','barchart_1_right','SECTION 3 (/days)',53,10,43);
            _activePage($(".nav .dashboard"));
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    Dashboard.init();
});
