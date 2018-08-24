$(document).ready(function(){
    $(".detail-btn").hide();
    $(".matc").text("9.12Bil");
    $(".macc").text("1.9Bil");
    $(".lc").text("829.12Mil");
    $(function () {

/*            Highcharts.chart('package_dist', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: null
                },
                subtitle: {
                    text: ''
                },
                credits:false,
                xAxis: {
                    type: 'category'
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
                legend: {
                    enabled: false
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
                series: [
                    {
                        name: "Package Distribution",
                        colorByPoint: true,
                        data: [
                            {
                                name: "Local Bumi",
                                y: 42.5
                            },
                            {
                                name: "Local Non-Bumi",
                                y: 38.5
                            },
                            {
                                name: "Foreign",
                                y: 4
                            }
                        ],
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return this.y > 1 ? this.y + ' ('+((this.y/84)*100).toFixed(2)+'%)' : null;
                            }
                        }
                    }
                ]

            });*/

        Highcharts.chart('fl_labour', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Local vs Foreign Labour Participation'
            },
            xAxis: {
                type: 'category',
                labels:{
                    rotation:0,
                    staggerLines:1
                }
            },
            yAxis: {
                title: {
                    text: 'No. of Labours'
                }
            },
            tooltip: {
                shared: true,
                style:{
                    fontSize: '15px'
                }
                /*valueSuffix: ' '*/
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {
                    series: {
                        stacking: 'normal',
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true
                        }
                    }
                },areaspline: {
                    fillOpacity: 0.5,
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                type: 'areaspline',
                name: 'Local',
                data: [{
                    name:'Advanced Works',
                    y: 4990,
                    drilldown:'localadv'
                },{
                    name:'Elevated Guideways',
                    y: 8360,
                    drilldown:'localeg'
                }, {
                    name:'Depots',
                    y: 1157,
                    drilldown:'localdepot'
                }, {
                    name:'Underground',
                    y: 5000,
                    drilldown:'localug'
                }, {
                    name:'MSPR',
                    y: 580,
                    drilldown:'localmspr'
                }, {
                    name:'Systems',
                    y: 4637,
                    drilldown:'localsys'
                }, {
                    name:'Stations',
                    y: 3219,
                    drilldown:'localsta'
                }, {
                    name:'Centralised Procurement',
                    y: 8120,
                    drilldown:'localcp'
                }, {
                    name:'Others',
                    y: 2319,
                    drilldown:'localoth'
                }]
            }, {
                type: 'areaspline',
                name: 'Foreign',
                data: [{
                    name:'Advanced Works',
                    y: 1650,
                    drilldown:'foreignadv'
                },{
                    name:'Elevated Guideways',
                    y: 0,
                    drilldown:'foreigneg'
                }, {
                    name:'Depots',
                    y: 0,
                    drilldown:'foreigndepot'
                }, {
                    name:'Underground',
                    y: 0,
                    drilldown:'foreignug'
                }, {
                    name:'MSPR',
                    y: 0,
                    drilldown:'foreignmspr'
                }, {
                    name:'Systems',
                    y: 7116,
                    drilldown:'foreignsys'
                }, {
                    name:'Stations',
                    y: 0,
                    drilldown:'foreignsta'
                }, {
                    name:'Centralised Procurement',
                    y: 1719,
                    drilldown:'foreigncp'
                }, {
                    name:'Others',
                    y: 2841,
                    drilldown:'foreignoth'
                }]
            }],
            drilldown: {
                series: [{
                    name: "Local",
                    id: 'localadv',
                    data: [
                        ['Design', 149],
                        ['Manufacture', 499],
                        ['Supply', 1497],
                        ['Construction', 2495],
                        ['Test & Comm.', 249],
                        ['Maintenance',101]
                    ]
                }, {
                    name: "Local",
                    id: 'localeg',
                    data: [
                        ['Design', 251],
                        ['Manufacture', 836],
                        ['Supply', 2508],
                        ['Construction', 4180],
                        ['Test & Comm.', 418],
                        ['Maintenance', 167]
                    ]
                }, {
                    name: "Local",
                    id: 'localdepot',
                    data: [
                        ['Design', 35],
                        ['Manufacture', 115],
                        ['Supply', 347],
                        ['Construction', 578],
                        ['Test & Comm.', 57],
                        ['Maintenance', 23]
                    ]
                },{
                    name: "Local",
                    id: 'localug',
                    data: [
                        ['Design', 350],
                        ['Manufacture', 640],
                        ['Supply', 1294],
                        ['Construction', 1900],
                        ['Test & Comm.', 530],
                        ['Maintenance', 100]
                    ]
                },{
                    name: "Local",
                    id: 'localmspr',
                    data: [
                        ['Design', 17],
                        ['Supply', 174],
                        ['Construction', 290],
                        ['Test & Comm.', 29],
                        ['Maintenance', 12]
                    ]
                }, {
                    name: "Local",
                    id: 'localsys',
                    data: [
                        ['Design', 927],
                        ['Manufacture', 2319],
                        ['Supply', 1391],
                        ['Installation', 280],
                        ['Test & Comm.', 1230],
                        ['Maintenance', 430]
                    ]
                },  {
                    name: "Local",
                    id: 'localsta',
                    data: [
                        ['Design', 17],
                        ['Manufacture', 58],
                        ['Supply', 174],
                        ['Construction', 290],
                        ['Test & Comm.', 29],
                        ['Maintenance', 12]
                    ]
                }, {
                    name: "Local",
                    id: 'localcp',
                    data: [
                        ['Design', 243],
                        ['Manufacture', 812],
                        ['Supply', 2436],
                        ['Construction', 4060],
                        ['Test & Comm.', 406],
                        ['Maintenance', 162]
                    ]
                },{
                    name: "Local",
                    id: 'localoth',
                    data: [
                        ['Design', 17],
                        ['Manufacture', 58],
                        ['Supply', 174],
                        ['Construction', 290],
                        ['Test & Comm.', 29],
                        ['Maintenance', 12]
                    ]
                },{
                    name: "Foreign",
                    id: 'foreignadv',
                    data: [
                        ['Design', 49],
                        ['Manufacture', 165],
                        ['Supply', 495],
                        ['Construction', 825],
                        ['Test & Comm.', 83],
                        ['Maintenance', 33]
                    ]
                }, {
                    name: "Foreign",
                    id: 'foreigneg',
                    data: [
                        ['Design', 0],
                        ['Manufacture', 0],
                        ['Supply', 0],
                        ['Construction', 0],
                        ['Test & Comm.', 0],
                        ['Maintenance', 0]
                    ]
                }, {
                    name: "Foreign",
                    id: 'foreigndepot',
                    data: [
                        ['Design', 0],
                        ['Manufacture', 0],
                        ['Supply', 0],
                        ['Construction', 0],
                        ['Test & Comm.', 0],
                        ['Maintenance', 0]
                    ]
                },{
                    name: "Foreign",
                    id: 'foreignug',
                    data: [
                        ['Design', 0],
                        ['Manufacture', 0],
                        ['Supply', 0],
                        ['Construction', 0],
                        ['Test & Comm.', 0],
                        ['Maintenance', 0]
                    ]
                },{
                    name: "Foreign",
                    id: 'foreignmspr',
                    data: [
                        ['Design', 0],
                        ['Supply', 0],
                        ['Construction', 0],
                        ['Test & Comm.', 0],
                        ['Maintenance', 0]
                    ]
                }, {
                    name: "Foreign",
                    id: 'foreignsys',
                    data: [
                        ['Design', 2134],
                        ['Manufacture', 3558],
                        ['Supply', 1630],
                        ['Installation', 490],
                        ['Test & Comm.', 350],
                        ['Maintenance', 632]
                    ]
                },  {
                    name: "Foreign",
                    id: 'foreignsta',
                    data: [
                        ['Design', 17],
                        ['Manufacture', 58],
                        ['Supply', 174],
                        ['Construction', 290],
                        ['Test & Comm.', 29],
                        ['Maintenance', 12]
                    ]
                }, {
                    name: "Foreign",
                    id: 'foreigncp',
                    data: [
                        ['Design', 51],
                        ['Manufacture', 343],
                        ['Supply', 516],
                        ['Construction', 853],
                        ['Test & Comm.', 29],
                        ['Maintenance', 0]
                    ]
                },{
                    name: "Foreign",
                    id: 'foreignoth',
                    data: [
                        ['Design', 17],
                        ['Manufacture', 58],
                        ['Supply', 174],
                        ['Construction', 290],
                        ['Test & Comm.', 29],
                        ['Maintenance', 12]
                    ]
                }]
            }
        });

        Highcharts.setOptions({
            colors: ['#ff8394','#4caf50']
        });
        Highcharts.chart('bn_labour', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Local Bumi vs Local Non-Bumi Labour Participation'
            },
            xAxis: {
                type: "category",
                labels:{
                    rotation:0,
                    staggerLines:1
                }
            },
            yAxis: {
                title: {
                    text: 'No. of Labours'
                }
            },
            tooltip: {
                shared: true,
                style:{
                    fontSize: '15px'
                }
                /*valueSuffix: ' '*/
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5,
                    dataLabels: {
                        enabled: true
                    }
                },
                column: {
                    series: {
                        stacking: 'normal',
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true
                        }
                    }
                }
            },
            series: [{
                type: 'areaspline',
                name: 'Local Bumi',
                data: [{
                    name:'Advanced Works',
                    y: 2013,
                    drilldown:'localbadv'
                },{
                    name:'Elevated Guideways',
                    y: 3970,
                    drilldown:'localbeg'
                }, {
                    name:'Depots',
                    y: 1157,
                    drilldown:'localbdepot'
                }, {
                    name:'Underground',
                    y: 2500,
                    drilldown:''
                }, {
                    name:'MSPR',
                    y: 580,
                    drilldown:''
                }, {
                    name:'Systems',
                    y: 1594,
                    drilldown:''
                }, {
                    name:'Stations',
                    y: 3219,
                    drilldown:''
                }, {
                    name:'Centralised Procurement',
                    y: 3921,
                    drilldown:''
                }, {
                    name:'Others',
                    y: 1130,
                    drilldown:''
                }]
            }, {
                type: 'areaspline',
                name: 'Local Non-Bumi',
                data: [{
                    name:'Advanced Works',
                    y: 2987,
                    drilldown:'localnbadv'
                },{
                    name:'Elevated Guideways',
                    y: 4390,
                    drilldown:'localnbeg'
                }, {
                    name:'Depots',
                    y: 0,
                    drilldown:'localnbdepot'
                }, {
                    name:'Underground',
                    y: 2500,
                    drilldown:''
                }, {
                    name:'MSPR',
                    y: 0,
                    drilldown:''
                }, {
                    name:'Systems',
                    y: 3151,
                    drilldown:''
                }, {
                    name:'Stations',
                    y: 0,
                    drilldown:''
                }, {
                    name:'Centralised Procurement',
                    y: 4211,
                    drilldown:''
                }, {
                    name:'Others',
                    y: 1289,
                    drilldown:''
                }]
            }],
            drilldown: {
                series: [{
                    name: "Local",
                    id: 'localbadv',
                    data: [
                        ['Design', 149],
                        ['Manufacture', 499],
                        ['Supply', 1497],
                        ['Construction', 2495],
                        ['Test & Comm.', 249],
                        ['Maintenance',101]
                    ]
                }, {
                    name: "Local",
                    id: 'localbeg',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Local",
                    id: 'localbdepot',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Foreign",
                    id: 'localnbadv',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Foreign",
                    id: 'localnbeg',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }, {
                    name: "Foreign",
                    id: 'localnbdepot',
                    data: [
                        ['Design', 4],
                        ['Manufacture', 2],
                        ['Supply', 1],
                        ['Construction', 4],
                        ['Test & Comm.', 4],
                        ['Maintenance', 4]
                    ]
                }]
            }
        });

        Highcharts.setOptions({
            colors: ['#09f','#0a5','#f05']
        });
        Highcharts.chart('container', {
            chart: {
                type: 'pie'
            },
            title: {
                text: null
            },
            credits: false,
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valuePrefix: 'RM ',
                style:{
                    fontSize: '15px'
                },
                formatter: function () {
                    return this.y > 1 ? '<b>'+this.point.name + ':</b><br>RM ' +
                        (this.y).toLocaleString() + ' <b>('+((this.y/21225451510.25)*100).toFixed(2)+'%)</b>' : null;
                }
            },
            series: [{
                name: 'Total',
                data: [{
                    name: 'Contract Value',
                    y:  21225451510.25,
                    color: '#5c6bc0'
                }],
                size: '60%',
                innerSize: '40%',
                dataLabels: {
                    formatter: function () {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: '#ffffff',
                    distance: -60
                }
            }, {
                name: 'Awarded Value',
                data: [
                    {
                        name: "Local Bumi",
                        y:  9240882401.22
                    },
                    {
                        name: "Local Non-Bumi",
                        y:  10471467922.32
                    },
                    {
                        name: "Foreign",
                        y:  1513101186.71
                    }
                ],
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    distance: 10,
                    formatter: function () {
                        // display only if larger than 1
                        return this.y > 1 ? this.point.name + ':<br>RM ' +
                            (this.y).toLocaleString() + ' ('+((this.y/21225451510.25)*100).toFixed(2)+'%)' : null;
                    }
                }
            }]
        });


        Highcharts.chart('heat_map', {
            chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy'
            },
            credits:false,
            title: {
                text: null
            },
            xAxis: {
                gridLineWidth: 1,
                categories: ['Local Bumi', 'Local Non-Bumi', 'Foreign']
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Contract Value'
                },
                labels:{
                    formatter:function(){
                        return (Math.abs(this.value) / 1.0e+9)+"B";
                    }
                },
                maxPadding: 0.2
            },
            legend: {
                enabled: false
            },
            tooltip: {
                useHTML: true,
                headerFormat: '<table>',
                pointFormat: '<tr><th class="highcharts-bubble" colspan="2"><h5>{series.name}</h5></th></tr>' +
                '<tr><th>Contractor Name: </th><td><strong>{point.name}</strong></td></tr>' +
                '<tr><th>Contract Value(RM): </th><td><strong>{point.z}</strong></td></tr>',
                footerFormat: '</table>',
                followPointer: true
            },

            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        color: '#000'
                    }
                },
                bubble: {
                    events: {
                        click: function (event) {
                            if (event.point.isNull == false) {//since last node will have zero childrens
                                window.location.href = "contractor.php?i="+(event.point.name).toLowerCase().replace(/ /g,"_");
                            }
                        }
                    },
                    cursor: 'pointer'
                }
            },
            series: [{
                name: "Local Bumi",
                pointPlacement: -0.25,
                data: [{
                    name: 'Ahmad Zaki Sdn Bhd',
                    x: 0,
                    y: 655800111,
                    z: 655800111
                }, {
                    name: 'Apex Communication Sdn Bhd',
                    x: 0,
                    y: 356493027.7,
                    z: 356493027.7
                }, {
                    name: '"Apex Communication Sdn Bhd - LG CNS Consortium' +
                    '(Apex Communication Sdn Bhd - LG CNS Co Ltd)',
                    x: 0,
                    y: 319941634,
                    z: 319941634
                }, {
                    name: 'FastColl Corporation Sdn Bhd',
                    x: 0,
                    y: 21973970,
                    z: 21973970
                }, {
                    name: 'Fastpro Sdn Bhd',
                    x: 0,
                    y: 3895623.2,
                    z: 3895623.2
                }, {
                    name: 'Hatimuda Sdn Bhd',
                    x: 0,
                    y: 5691650,
                    z: 5691650
                }, {
                    name: 'Huls Transmission Sdn Bhd',
                    x: 0,
                    y: 37888400,
                    z: 37888400
                }, {
                    name: 'IJM Construction Sdn Bhd',
                    x: 0,
                    y: 836832127.65,
                    z: 836832127.65
                }, {
                    name: 'Info-Matic Power Sdn Bhd',
                    x: 0,
                    y: 295149846,
                    z: 295149846
                }, {
                    name: 'Innoseven Sdn Bhd ',
                    x: 0,
                    y: 114338623.4,
                    z: 114338623.4
                }, {
                    name: 'Kejuruteraan Astra Sdn Bhd',
                    x: 0,
                    y: 44180000,
                    z: 44180000
                }, {
                    name: 'KI Engineering Sdn Bhd',
                    x: 0,
                    y: 12875897,
                    z: 12875897
                }, {
                    name: 'Menta Construction Sdn Bhd',
                    x: 0,
                    y: 12256534.91,
                    z: 12256534.91
                }, {
                    name: 'MMC Gamuda KVMRT (T) Sdn Bhd',
                    x: 0,
                    y:  8106412469.87,
                    z:  8106412469.87
                }, {
                    name: 'MTD Construction Sdn Bhd',
                    x: 0,
                    y: 325920628,
                    z: 325920628
                }, {
                    name: 'Naim Engineering Sdn Bhd',
                    x: 0,
                    y: 688587998.4,
                    z: 688587998.4
                }, {
                    name: 'Norangkasa Enterprise Sdn Bhd',
                    x: 0,
                    y: 39900812,
                    z: 39900812
                }, {
                    name: 'PASDEC Bina Sdn Bhd',
                    x: 0,
                    y: 55800585.4,
                    z: 55800585.4
                }, {
                    name: 'Perkasa Jauhari Sdn Bhd',
                    x: 0,
                    y: 64913513.35,
                    z:64913513.35
                }, {
                    name: 'Perkasa Sutera Sdn Bhd',
                    x: 0,
                    y: 127195364.9,
                    z:127195364.9
                }, {
                    name: 'Potensi Cekal Sdn Bhd',
                    x: 0,
                    y: 62500000,
                    z:62500000
                }, {
                    name: 'PTIS Engineering Sdn Bhd',
                    x: 0,
                    y: 299492931,
                    z:299492931
                }, {
                    name: 'Puncak Bumi Utama Sdn Bhd',
                    x: 0,
                    y: 7858451,
                    z:7858451
                }, {
                    name: 'Puncak Niaga (M) Sdn Bhd',
                    x: 0,
                    y: 493688.43,
                    z:493688.43
                }, {
                    name: 'RD Resources Sdn Bhd',
                    x: 0,
                    y: 121412431.5,
                    z:121412431.5
                }, {
                    name: 'S&I Urban Designers Sdn. Bhd.',
                    x: 0,
                    y: 7305100.4,
                    z: 7305100.4
                }, {
                    name: 'Sapura Research Sdn Bhd',
                    x: 0,
                    y: 4405479.55,
                    z: 4405479.55
                }, {
                    name: '"SMPP-IBWANI Joint Venture' +
                    '(Syarikat Muhibah Perniagaan & Pembinaan Sdn Bhd - Ibwani Resources Sdn Bhd)',
                    x: 0,
                    y: 49451098.46,
                    z: 49451098.46
                }, {
                    name: 'Sri Communication Sdn Bhd',
                    x: 0,
                    y: 24258211.57,
                    z: 24258211.57
                }, {
                    name: 'Syarikat Muhibah & Perniagaan & Pembinaan Sdn Bhd',
                    x: 0,
                    y: 743570538.4,
                    z: 743570538.4
                }, {
                    name: 'Tenaga Nirwana (M) Sdn Bhd',
                    x: 0,
                    y: 1496568.9,
                    z: 1496568.9
                }, {
                    name: 'TSR Bina Sdn Bhd',
                    x: 0,
                    y: 310493901.03,
                    z: 310493901.03
                }, {
                    name: 'UEM Construction Sdn Bhd',
                    x: 0,
                    y: 910949104.68,
                    z: 910949104.68
                }, {
                    name: 'Worktime Engineering Sdn Bhd',
                    x: 0,
                    y: 1723085,
                    z: 1723085
                }, {
                    name: 'Zulfan (M) Sdn Bhd',
                    x: 0,
                    y: 18822000,
                    z:18822000
                }
                ]},{
                name: "Local Non-Bumi",
                pointPlacement: -0.25,
                data: [{
                    name:  'Bauer (M) Sdn Bhd',
                    x: 1,
                    y: 10588000,
                    z: 10588000
                }, {
                    name:  '"Consortium of Siemens Malaysia Sdn Bhd, Siemens AG, Hisniaga Sdn Bhd' +
                    '(Hisniaga Sdn Bhd - Siemens Aktiengesellschaft - Siemens Malaysia Sdn Bhd)',
                    x: 1,
                    y: 418813910,
                    z: 418813910
                }, {
                    name:  'E.S.S. Engineering Sdn Bhd',
                    x: 1,
                    y: 12837,
                    z: 12837
                }, {
                    name:  'Eastern Pretech (M) Sdn Bhd',
                    x: 1,
                    y: 185912543.6,
                    z: 185912543.6
                }, {
                    name:  'EITA Elevator (M) Sdn Bhd ',
                    x: 1,
                    y: 94300000,
                    z: 94300000
                }, {
                    name:  'EV-Dynamic Sdn Bhd',
                    x: 1,
                    y: 44467821,
                    z: 44467821
                }, {
                    name:  'FITTERS-MPS SDN BHD',
                    x: 1,
                    y: 14775000,
                    z: 14775000
                }, {
                    name:  'Gadang Engineering (M) Sdn Bhd',
                    x: 1,
                    y: 1475652095,
                    z: 1475652095
                }, {
                    name:  'Geohan Sdn Bhd',
                    x: 1,
                    y: 6579624,
                    z: 6579624
                }, {
                    name:  'Keller (M) Sdn Bhd',
                    x: 1,
                    y: 24016411.5,
                    z: 24016411.5
                }, {
                    name:  'Kemakmuran 2000 Sdn Bhd',
                    x: 1,
                    y: 12486080,
                    z: 12486080
                }, {
                    name:  'Mecomb Malaysia Sdn Bhd',
                    x: 1,
                    y: 22283800,
                    z: 22283800
                }, {
                    name:  'Metronic Engineering Sdn Bhd',
                    x: 1,
                    y: 43042826,
                    z: 43042826
                }, {
                    name:  'Misi Setia Oil and Gas Sdn Bhd',
                    x: 1,
                    y: 917186,
                    z: 917186
                }, {
                    name:  'MMC Gamuda KVMRT (PDP) Sdn Bhd',
                    x: 1,
                    y: 8338000,
                    z: 8338000
                }, {
                    name:  'MS Elevators Engineering Sdn Bhd',
                    x: 1,
                    y: 102670000,
                    z: 102670000
                }, {
                    name:  'Mudajaya Corporation',
                    x: 1,
                    y: 547512797.7,
                    z: 547512797.7
                }, {
                    name:  'P. J. Indah Sdn Bhd',
                    x: 1,
                    y: 31966800,
                    z: 31966800
                }, {
                    name:  'Pembinaan CW Yap Sdn Bhd',
                    x: 1,
                    y: 14549990,
                    z: 14549990
                }, {
                    name:  'Ragawang Corporation Sdn Bhd',
                    x: 1,
                    y: 7261371.7,
                    z: 7261371.7
                }, {
                    name:  '"Sena-Letrik - LED Vision JV' +
                    '(Sena Letrik (M) Sdn Bhd - LED Vision Sdn Bhd)',
                    x: 1,
                    y: 7297680,
                    z: 7297680
                }, {
                    name:  '"Siemens SMH Rail Consortium' +
                    '(SMH Rail Sdn Bhd - Siemens Aktiengesellschaft - Siemens Malaysia Sdn Bhd)',
                    x: 1,
                    y: 1365083284,
                    z: 1365083284
                }, {
                    name:  'Soil Instruments (M) Sdn Bhd',
                    x: 1,
                    y: 1148820,
                    z: 1148820
                },{
                    name:  'SPC Industries Sdn Bhd',
                    x: 1,
                    y: 223180030,
                    z: 223180030
                },{
                    name:  'Sunway Construction Sdn Bhd',
                    x: 1,
                    y: 804581195,
                    z: 804581195
                },{
                    name:  'Trans Resources Corporation Sdn Bhd',
                    x: 1,
                    y: 521488273,
                    z: 521488273
                }
                ]},{
                name: "Foreign",
                pointPlacement: -0.25,
                data: [{
                    name: '"A.F.S. Engineering (M) Sdn Bhd - ST Electronics Ltd' +
                    '(A.F.S. Engineering (M) Sdn Bhd - Singapore Technologies Electronics Limited)',
                    x: 2,
                    y: 23241459,
                    z: 23241459
                },{
                    name: 'Affiliated Computer Services Solutions France SAS',
                    x: 2,
                    y: 120763079,
                    z: 120763079
                },{
                    name: '"Apex Communications Sdn Bhd - Johnson Controls (M) Sdn Bhd Consortium' +
                    '(Apex Communications Sdn Bhd - Johnson Controls (M) Sdn Bhd)',
                    x: 2,
                    y: 41014958.79,
                    z: 41014958.79
                },{
                    name: 'Bombardier (Malaysia) Sdn Bhd',
                    x: 2,
                    y: 281314655,
                    z: 281314655
                },{
                    name: 'Cunningham Lindsey Adjusters (M) Sdn Bhd',
                    x: 2,
                    y: 42150,
                    z: 42150
                },{
                    name: 'LG CNS Malaysia Sdn Bhd',
                    x: 2,
                    y: 42200000,
                    z: 42200000
                },{
                    name: 'Meidensha Corporation',
                    x: 2,
                    y: 459248224.7,
                    z: 459248224.7
                },{
                    name: 'Mitsubishi Heavy Industries, Ltd',
                    x: 2,
                    y: 855000000,
                    z: 855000000
                },{
                    name: '"MUHIBBAH - SV - SAMJUNG JV' +
                    '(Muhibbah Engineering (M) Bhd - S & V Teknik Sdn Bhd - Samjung Steel Co. Ltd.)',
                    x: 2,
                    y: 201989570,
                    z: 201989570
                },{
                    name: 'Otis Elevator Company (M) Sdn Bhd',
                    x: 2,
                    y: 38450000,
                    z: 38450000
                },{
                    name: 'Scania (Malaysia) Sdn Bhd',
                    x: 2,
                    y: 118435123,
                    z: 118435123
                },{
                    name: 'Singapore Technologies Electronics Limited',
                    x: 2,
                    y: 78089883,
                    z: 78089883
                },{
                    name: 'Volvo Malaysia Sdn Bhd',
                    x: 2,
                    y: 113927380,
                    z: 113927380
                }
                ]}
            ]
        });


        var mapData = Highcharts.maps['custom/world'];

        var data =  [{
            name: 'A.F.S. Engineering (M) Sdn Bhd - ST Electronics Ltd' +
            '(A.F.S. Engineering (M) Sdn Bhd - Singapore Technologies Electronics Limited)',
            z:  23241459,
            lat: 3.047968,
            lon: 101.622638,
            address:'A.F.S. ENGINEERING (MALAYSIA) SDN BHD No.8 Jalan Kenari 10, Bandar Puchong Jaya, 47100 Puchong, Selangor, Malaysia'
        },{
            name: 'Affiliated Computer Services Solutions France SAS',
            z:  120763079,
            lat: 45.501674,
            lon: -73.564602,
            address:'Rue Claude Chappe' +
            'Guilherand Granges, 07500' +
            'France'
        },{
            name: 'Ahmad Zaki Sdn Bhd',
            z:  655800111,
            lat: 3.168137,
            lon: 101.721973,
            address:'MENARA AZRB' +
            'NO.71, PERSIARAN GURNEY' +
            '54000 KUALA LUMPUR' +
            'MALAYSIA'
        },{
            name: 'Apex Communication Sdn Bhd',
            z:  356493027.7,
            lat: 3.152655,
            lon: 101.707431,
            address:'Apex Communications Sdn Bhd 12th Floor, Menara Hap Seng 50250 Jalan P. Ramlee, Kuala Lumpur Malaysia'
        },{
            name: 'Apex Communication Sdn Bhd - LG CNS Consortium' +
            '(Apex Communication Sdn Bhd - LG CNS Co Ltd)',
            z:  319941634,
            lat: 3.152655,
            lon: 101.707431,
            address:'Apex Communications Sdn Bhd 12th Floor, Menara Hap Seng 50250 Jalan P. Ramlee, Kuala Lumpur Malaysia'
        },{
            name: 'Apex Communications Sdn Bhd - Johnson Controls (M) Sdn Bhd Consortium' +
            '(Apex Communications Sdn Bhd - Johnson Controls (M) Sdn Bhd)',
            z:  41014958.79,
            lat: 43.123943,
            lon: -87.936988,
            address:'Johnson Controls' +
            '5757 N. Green Bay Ave.' +
            'P.O. Box 591' +
            'Milwaukee, WI 53201'
        },{
            name: 'Bauer (M) Sdn Bhd',
            z:  10588000,
            lat: 3.127642,
            lon: 101.643601,
            address:'BAUER (MALAYSIA) SDN. BHD.' +
            'Head Office Kuala Lumpur' +
            'Unit 506, Block G, Phileo Damansara 1' +
            'No.9, Jalan 16/11, Off Jalan Damansara' +
            '46350 Petaling Jaya' +
            'Selangor Darul Ehsan'
        },{
            name: 'Bombardier (Malaysia) Sdn Bhd',
            z:  281314655,
            lat: 3.133771,
            lon: 101.684628,
            address:'Level 25, Axiata Tower' +
            'No.9, Jalan Stesen Sentral 5' +
            'Kuala Lumpur Sentral' +
            '50470 Kuala Lumpur' +
            'Malaysia'
        },{
            name: 'Budaya Restu Sdn Bhd',
            z:  82171026.25,
            lat: 3.089926,
            lon: 101.544903,
            address:'No. 60A, Jalan Renang 13/26, Seksyen 13' +
            '40100 Shah Alam, Selangor Darul Ehsan'
        },{
            name: 'Consortium of Siemens Malaysia Sdn Bhd, Siemens AG, Hisniaga Sdn Bhd' +
            '(Hisniaga Sdn Bhd - Siemens Aktiengesellschaft - Siemens Malaysia Sdn Bhd)',
            z:  418813910,
            lat: 3.242611,
            lon: 101.66104,
            address:'Block 2, Suite 19-2,' +
            'Menara VSQ @ PJ City Centre,' +
            'Jalan Utara,' +
            '46200 Petaling Jaya,' +
            'Selangor'
        },{
            name: 'Cunningham Lindsey Adjusters (M) Sdn Bhd',
            z:  42150,
            lat: 3.149553,
            lon: 101.705273,
            address:'Kuala Lumpur' +
            'Unit 7.01, Level 7, Bangunan KWSP' +
            'No. 3, Changkat Raja Chulan' +
            'Kuala Lumpur' +
            '50200 Malaysia'
        },{
            name: 'E.S.S. Engineering Sdn Bhd',
            z:  12837,
            lat: 4.615972,
            lon: 101.122209,
            address:'No. 28A, Jalan Medan Ipoh 9,' +
            'Bandar Baru Medan Ipoh,' +
            '31400 Ipoh,' +
            'Perak, Malaysia.'
        },{
            name: 'Eastern Pretech (M) Sdn Bhd',
            z:  185912543.6,
            lat: 3.027227,
            lon: 101.716614,
            address:'10th Floor, Pusat Perdagangan Mines,' +
            'Jalan Mines 2, The Mines Resort City,' +
            '43300 Seri Kembangan, Selangor, Malaysia.'
        },{
            name: 'EITA Elevator (M) Sdn Bhd',
            z:  94300000,
            lat: 3.065747,
            lon: 101.595337,
            address:'Lot 4, Block A, ' +
            'Jalan SS 13/7, Subang Jaya Industrial Estate, ' +
            '47500 Subang Jaya, Selangor, ' +
            'Malaysia. '
        },{
            name: 'EV-Dynamic Sdn Bhd',
            z:  44467821,
            lat: 2.994478,
            lon: 101.574772,
            address:'39, Jalan Putra Mahkota 7/7B,' +
            'Putra Point Business Centre,' +
            'Putra Heights,' +
            '47650 Subang Jaya, Selangor.'
        },{
            name: 'FastColl Corporation Sdn Bhd',
            z:  21973970,
            lat: 3.094029,
            lon: 101.724108,
            address:'4, Jalan Jaya 5, ' +
            'Bandar Tun Razak, ' +
            '56000 Kuala Lumpur, ' +
            'Wilayah Persekutuan Kuala Lumpur '
        },{
            name: 'Fastpro Sdn Bhd',
            z:  3895623.2,
            lat: 3.04974,
            lon: 101.762,
            address:'Headquarters' +
            '40-1 (Tkt.1),jalan Manis 1,Taman Segar,Cheras,kuala Lumpur ' +
            'Kuala Lumpur; Federal Territories; Map ' +
            'Postal Code: 56100'
        },{
            name: 'FITTERS-MPS SDN BHD',
            z:  14775000,
            lat: 3.20023,
            lon: 101.619722,
            address:'No. 1, Jalan Tembaga SD 5/2, Bandar Sri Damansara 52200 Kuala Lumpur, Malaysia'
        },{
            name: 'Gadang Engineering (M) Sdn Bhd',
            z:  1475652095,
            lat: 3.201565,
            lon: 101.610082,
            address:'GADANG HOLDINGS BERHAD' +
            'Wisma Gadang' +
            'No. 52, Jalan Tago 2,' +
            'Off Jalan Persiaran Utama, Sri Damansara' +
            '52200 Kuala Lumpur,' +
            'Malaysia.'
        },{
            name: 'Geohan Sdn Bhd',
            z:  6579624,
            lat: 3.14194,
            lon: 101.629512,
            address:'Headquarters' +
            'Taman Tun Dr Ismail, Federal Territory/Kuala Lumpur'
        },{
            name: 'Hatimuda Sdn Bhd',
            z:  5691650,
            lat: 3.147519,
            lon: 101.438283,
            address:'HATIMUDA SDN BHD (315436 - K)' +
            'Lot 20-5, 403, Block 1' +
            'No. 7, Persiaran Sukan' +
            'Laman Seri Business Park' +
            'Seksyen 13, 40100 Shah Alam' +
            'Selangor Darul Ehsan'
        },{
            name: 'Huls Transmission Sdn Bhd',
            z:  37888400,
            lat: 3.04405,
            lon: 101.69676,
            address:'Lot 54, Jalan PBS 14/3, Taman' +
            'Perindustrian, Bukit Serdang' +
            'Seri Kembangan, 43300' +
            'Malaysia.'
        },{
            name: 'IJM Construction Sdn Bhd',
            z:  836832127.7,
            lat: 3.098229,
            lon: 101.643417,
            address:'Wisma IJM, Jalan Yong Shook Lin, ' +
            '46050 Petaling Jaya, Selangor Darul Ehsan, Malaysia'
        },{
            name: 'Info-Matic Power Sdn Bhd',
            z:  295149846,
            lat: 3.189612,
            lon: 101.735852,
            address:'No. 5 & 5-1, Jalan 3/27B' +
            'Seksyen 10, Wangsa Maju, Setapak' +
            'Kuala Lumpur' +
            'Malaysia' +
            '53300'
        },{
            name: 'Innoseven Sdn Bhd',
            z:  114338623.4,
            lat: 2.285054,
            lon: 102.55571,
            address:'SUITE 3.1 & 3.2 TINGKAT 3 , ' +
            'LOT 1331 JALAN PAYAMAS ,' +
            ' 84900 TANGKAK .'
        },{
            name: 'Kejuruteraan Astra Sdn Bhd',
            z:  44180000,
            lat: 3.081214,
            lon: 101.561911,
            address:'35, ' +
            'Jalan Juruanalisis U1/35,' +
            ' Hicom-glenmarie Industrial Park, ' +
            '40150 Shah Alam, Selangor '
        },{
            name: 'Keller (M) Sdn Bhd',
            z:  24016411.5,
            lat: 3.10287,
            lon: 101.713956,
            address:'B-5-10 Plaza Dwitasik' +
            'Bandar Sri Permaisuri' +
            '56000 Kuala Lumpur, Malaysia'
        },{
            name: 'Kemakmuran 2000 Sdn Bhd',
            z:  12486080,
            lat: 3.034596,
            lon: 101.665415,
            address:'45, Jalan Du 2/1, Taman Damai Utama, 47180 Puchong, Selangor'
        },{
            name: 'KI Engineering Sdn Bhd',
            z:  12875897,
            lat: 3.079016,
            lon: 101.625579,
            address:'KI ENGINEERING SDN BHD' +
            'NO. 38-3A (FOURTH FLOOR), JALAN PJS 5/30' +
            'PUSAT DAGANGAN PETALING JAYA SELATAN (PJCC)' +
            '46150 PETALING JAYA, SELANGOR'
        },{
            name: 'LG CNS Malaysia Sdn Bhd',
            z:  42200000,
            lat: 3.155534,
            lon: 101.609715,
            address:'L2 Tower, No. 1, 2, Persiaran Surian, Levenue 2, 47800 Petaling Jaya, Selangor'
        },{
            name: 'Mecomb Malaysia Sdn Bhd',
            z:  22283800,
            lat: 3.089891,
            lon: 101.625359,
            address:'Mecomb Malaysia Sdn Bhd' +
            'Lot 20, Jalan 225,' +
            'Petaling Jaya,' +
            '46100 Selangor,' +
            'Malaysia.'
        },{
            name: 'Meidensha Corporation',
            z:  459248224.7,
            lat: 35.61839,
            lon: 139.727602,
            address:'ThinkPark Tower, 2-1-1 Osaki,' +
            'Shinagawa-ku, Tokyo, 141-6029 Japan'
        },{
            name: 'Menta Construction Sdn Bhd',
            z:  12256534.91,
            lat: 3.083899,
            lon: 101.681974,
            address:'MENTA CONSTRUCTION SDN BHD' +
            '2, Jalan 1/128,' +
            'Taman Gembira,' +
            '58200KL'
        },{
            name: 'Metronic Engineering Sdn Bhd',
            z:  43042826,
            lat: 3.106275,
            lon: 101.545331,
            address:'No.37, 2nd Floor, Persiaran Bayan Indah,' +
            'Bayan Bay, 11900 Bayan Lepas,' +
            'Pulau Pinang.'
        },{
            name: 'Misi Setia Oil and Gas Sdn Bhd',
            z:  917186,
            lat: 2.962255,
            lon: 101.813039,
            address:'No. 35, Jalan P4/6' +
            'Seksyen 4' +
            'Bandar Teknologi Kajang' +
            'Semenyih,  43500' +
            'Malaysia'
        },{
            name: 'Mitsubishi Heavy Industries, Ltd',
            z:  855000000,
            lat: 35.658068,
            lon: 139.751599,
            address:'6th Floor, Beijing Changfugong No. 6008 Office Building No. 26 Jian Guo Men Wai Avenue, Beijing, China 100022'
        },{
            name: 'MMC Gamuda KVMRT (PDP) Sdn Bhd',
            z:  8338000,
            lat: 3.12672,
            lon: 101.61572,
            address:'MMC GAMUDA KVMRT (T) SDN BHD' +
            'Level 3A-3, Corporate Building (Block E)' +
            'Pusat Komersial Southgate' +
            'No.2, Jalan Dua, Off Jalan Chan Sow Lin' +
            '55200 Kuala Lumpur' +
            'Malaysia'
        },{
            name: 'MMC Gamuda KVMRT (T) Sdn Bhd',
            z:  8106412470,
            lat: 3.12672,
            lon: 101.61572,
            address:'MMC GAMUDA KVMRT (T) SDN BHD' +
            'Level 3A-3, Corporate Building (Block E)' +
            'Pusat Komersial Southgate' +
            'No.2, Jalan Dua, Off Jalan Chan Sow Lin' +
            '55200 Kuala Lumpur' +
            'Malaysia'
        },{
            name: 'MS Elevators Engineering Sdn Bhd',
            z:  102670000,
            lat: 3.091443,
            lon: 101.686557,
            address:'M S Elevators Sdn. Bhd.' +
            '2530 Lorong Perusahaan 10,' +
            'Prai Industrial Estate,' +
            '13600 Prai, Penang, MALAYSIA'
        },{
            name: 'MTD Construction Sdn Bhd',
            z:  325920628,
            lat: 3.236958,
            lon: 101.694125,
            address:'MTD Group' +
            '1, Jalan Batu Caves' +
            '68100 Batu Caves' +
            'Selangor Darul Ehsan' +
            'MALAYSIA'
        },{
            name: 'Mudajaya Corporation',
            z:  547512797.7,
            lat: 3.16214,
            lon: 101.612848,
            address:'Mudajaya Group Berhad (Company No.: 605539-H)' +
            'Level 11, Menara Mudajaya,' +
            'No. 12A, Jalan PJU 7/3' +
            'Mutiara Damansara,' +
            '47810 Petaling Jaya' +
            'Selangor Darul Ehsan' +
            'Malaysia'
        },{
            name: 'MUHIBBAH - SV - SAMJUNG JV' +
            '(Muhibbah Engineering (M) Bhd - S & V Teknik Sdn Bhd - Samjung Steel Co. Ltd.)',
            z:  201989570,
            lat: 3.056539,
            lon: 101.476918,
            address:'MUHIBBAH ENGINEERING (M) BHD(12737-K)' +
            'Lot 586 & 579, 2nd Mile, Jalan Batu Tiga Lama,' +
            '41300 Klang, Selangor Darul Ehsan, MALAYSIA.'
        },{
            name: 'Naim Engineering Sdn Bhd',
            z:  688587998.4,
            lat: 1.524288,
            lon: 110.341507,
            address:'NAIM HOLDINGS BERHAD' +
            '9th Floor, Wisma Naim,' +
            '2 1/2 Mile Rock Road,' +
            '93200 Kuching, Sarawak.'
        },{
            name: 'Norangkasa Enterprise Sdn Bhd',
            z:  39900812,
            lat: 3.068506,
            lon: 101.690859,
            address:'NORANGKASA ENTERPRISE SDN BHD' +
            '78-3, Jalan Radin Tengah' +
            'Bandar Baru Sri Petaling, Sungai Besi,' +
            '57000 Kuala Lumpur'
        },{
            name: 'Otis Elevator Company (M) Sdn Bhd',
            z:  38450000,
            lat: 3.012904,
            lon: 101.615505,
            address:'Otis Elevator Company (M) Sdn Bhd - HQ' +
            '1st Floor, No. 1, Jalan Industri PBP 3,' +
            'Taman Industri Pusat Bandar Puchong,' +
            '47100 Puchong, Selangor.'
        },{
            name: 'P. J. Indah Sdn Bhd',
            z:  31966800,
            lat: 3.107775,
            lon: 101.542803,
            address:'E-3-6, Block E, Pacific Place Commercial Centre' +
            'Jalan PJU 1A/4, Ara Damansara' +
            '47301 Petaling Jaya' +
            'Selangor Darul Ehsan, Malaysia.'
        },{
            name: 'PASDEC Bina Sdn Bhd',
            z:  55800585.4,
            lat: 3.744494,
            lon: 103.185791,
            address:'Lot 106, Tingkat 1, Block B' +
            'Medan Warisan' +
            'Lorong Sri Teruntum 1' +
            'Tanah Putih' +
            'Kuantan,  25100' +
            'Malaysia'
        },{
            name: 'Pembinaan CW Yap Sdn Bhd',
            z:  14549990,
            lat: 3.208912,
            lon: 101.751407,
            address:'16, Jalan Bandar 2,' +
            'Taman Melawati,' +
            ' 53100 Kuala Lumpur,' +
            ' Wilayah Persekutuan Kuala Lumpur'
        },{
            name: 'Perkasa Jauhari Sdn Bhd',
            z:  64913513.35,
            lat: 2.987298,
            lon: 101.549004,
            address:'Headquarters' +
            'No.28b, Jalan Tapah,,Off Jalan Goh Hock Huat,' +
            'Port Klang; Selangor; Map' +
            'Postal Code: 41400'
        },{
            name: 'Perkasa Sutera Sdn Bhd',
            z:  127195364.9,
            lat: 3.155719,
            lon: 101.752059,
            address:'Wisma Perkasa Sutera' +
            'No. A14, Level 3, 4 & 5' +
            'One Ampang Business Avenue' +
            'Jalan Ampang Utama 2/2' +
            '68000 Ampang' +
            'Selangor Darul Ehsan'
        },{
            name: 'Potensi Cekal Sdn Bhd ',
            z:  62500000,
            lat: 3.048916,
            lon: 101.444213,
            address:'No. 5C' +
            'Lorong Gudang Nanas 2,' +
            ' Jalan Pasar, 41400,' +
            'Klang, Selangor,' +
            ' 41400'
        },{
            name: 'PTIS Engineering Sdn Bhd',
            z:  299492931,
            lat: 3.016288,
            lon: 101.568377,
            address:'No. 3A, Jalan Kelumpang Satu 27/41A' +
            'Taman Bunga Negara, Seksyen 27' +
            '40400 Shah Alam' +
            'Selangor Darul Ehsan'
        },{
            name: 'Puncak Bumi Utama Sdn Bhd',
            z:  7858451,
            lat: 5.264486,
            lon: 100.472139,
            address:'Kawasan Industri MARA, Fasa 2,' +
            'Lot 1530/14, Jalan Besar,' +
            '14100 Simpang Ampat,' +
            'Seberang Perai Selatan, ' +
            'Pulau Pinang, Malaysia.'
        },{
            name: 'Puncak Niaga (M) Sdn Bhd',
            z:  493688.43,
            lat: 3.08634,
            lon: 101.5501,
            address:'Wisma Rozali , No.4 Persiaran Sukan, Seksyen 13,' +
            '40100 Shah Alam, Selangor, Malaysia.'
        },{
            name: 'Ragawang Corporation Sdn Bhd',
            z:  7261371.7,
            lat: 3.0243,
            lon: 101.716,
            address:'13-2, Jalan Dagang SB 4/3, Taman Sungai Besi Indah, Seksyen 4, Seri Kembangan, 43300, Seri Kembangan, Selangor, 43300'
        },{
            name: 'RD Resources Sdn Bhd',
            z:  121412431.5,
            lat: 3.141071,
            lon: 101.530099,
            address:'RD Resources Sdn Bhd (599434-M)' +
            'No. 30-3, Block 3C,' +
            'Jalan Wangsa Delima 11, Wangsa Link,' +
            '53300 Kuala Lumpur'
        },{
            name: 'S&I Urban Designers Sdn. Bhd.',
            z:  7305100.4,
            lat: 3.231888,
            lon: 101.685373,
            address:'54 Jalan SBC 8 Kompleks Kilang SME Bank Batu Caves Taman Sri Batu Caves 68100 Batu Caves Selangor Malaysia'
        },{
            name: 'Sapura Research Sdn Bhd',
            z:  4405479.55,
            lat: 3.190214,
            lon: 101.733459,
            address:'SAPURA@Mines' +
            'No 7 Jalan Tasik' +
            'The Mines Resort City' +
            '43300 Seri Kembangan' +
            'Selangor Darul Ehsan' +
            'Malaysia'
        },{
            name: 'Scania (Malaysia) Sdn Bhd',
            z:  118435123,
            lat: 3.109091,
            lon: 101.550897,
            address:'No.1 Jalan Tiang U8/93 Bukit Jelutong Industrial Park 40150 Shah Alam, Selangor Darul Ehsan Malaysia'
        },{
            name: 'Sena-Letrik - LED Vision JV' +
            '(Sena Letrik (M) Sdn Bhd - LED Vision Sdn Bhd)',
            z:  7297680,
            lat: 3.067362,
            lon: 101.690129,
            address:'Sena Letrik (M) Sdn. Bhd.' +
            'GST No. 001173626880' +
            'No. 32A-2, Jalan Radin Bagus 3, Seri Petaling, 57000 Kuala Lumpur, Malaysia.'
        },{
            name: 'Siemens SMH Rail Consortium' +
            '(SMH Rail Sdn Bhd - Siemens Aktiengesellschaft - Siemens Malaysia Sdn Bhd)',
            z:  1365083284,
            lat: 3.127018,
            lon: 101.644314,
            address:'Siemens Malaysia Sdn. Bhd.' +
            'Level 1 Reception, CP Tower,' +
            'No. 11, Jalan16/11, Pusat Dagang Seksyen 16,' +
            '46350 Petaling Jaya, Selangor Darul Ehsan, Malaysia'
        },{
            name: 'Singapore Technologies Electronics Limited',
            z:  78089883,
            lat: 1.389846,
            lon: 103.847698,
            address:'ST Engineering Hub' +
            '1 Ang Mo Kio Electronics Park Road' +
            '#07-01 Singapore 567710'
        },{
            name: 'SMPP-IBWANI Joint Venture' +
            '(Syarikat Muhibah Perniagaan & Pembinaan Sdn Bhd - Ibwani Resources Sdn Bhd)',
            z:  49451098.46,
            lat: 3.046361,
            lon: 101.588492,
            address:'24, Jalan USJ 9/5t, Subang Business Centre, 47610 Subang Jaya, Selangor'
        },{
            name: 'Soil Instruments (M) Sdn Bhd',
            z:  1148820,
            lat: 3.18086,
            lon: 101.532384,
            address:'Soil Instruments (M) Sdn Bhd' +
            'No. 12, Jalan Utarid U5/14, Seksyen U5,' +
            '40150 Shah Alam, Selangor Darul Ehsan, Malaysia.'
        },{
            name: 'SPC Industries Sdn Bhd',
            z:  223180030,
            lat: 1.536856,
            lon: 103.550528,
            address:'21M/S, ' +
            'JALAN PONTIAN, ' +
            '81150 ULU CHOH,' +
            ' JOHOR, ' +
            'MALAYSIA.'
        },{
            name: 'Sri Communication Sdn Bhd',
            z:  24258211.57,
            lat: 3.135142,
            lon: 101.691441,
            address:'Sri Communication Sdn Bhd' +
            'No 44, Jalan Tun Sambanthan 3,' +
            'Brickfields, 50470 Kuala Lumpur' +
            'Malaysia'
        },{
            name: 'Sunway Construction Sdn Bhd',
            z:  804581195,
            lat: 3.089667,
            lon: 101.743378,
            address:'Level 8, Menara Sunway,' +
            'Jalan Lagoon Timur, Bandar Sunway,' +
            '46150 Petaling Jaya, Selangor Darul Ehsan'
        },{
            name: 'Syarikat Muhibah & Perniagaan & Pembinaan Sdn Bhd',
            z:  743570538.4,
            lat: 3.046367,
            lon: 101.588497,
            address:'1st Floor' +
            'No. 25-2 Jalan Usj 9/5q' +
            'Subang Jaya, 47620' +
            'Malaysia'
        },{
            name: 'Tenaga Nirwana (M) Sdn Bhd',
            z:  1496568.9,
            lat: 3.039015,
            lon: 101.769213,
            address:'Headquarters' +
            '(No.40-1,1st.floor),Jalan Manis 1,Taman Segar,cheras,kuala Lumpur ' +
            'Kuala Lumpur; Federal Territories; Map ' +
            'Postal Code: 56100'
        },{
            name: 'Trans Resources Corporation Sdn Bhd',
            z:  52148873,
            lat: 3.194785,
            lon: 101.767146,
            address:'TRC Business Centre,' +
            'Jalan Andaman Utama,' +
            '68000 Ampang,' +
            'Selangor Darul Ehsan,' +
            'Malaysia'
        },{
            name: 'TSR Bina Sdn Bhd',
            z:  8416906371,
            lat: 3.161768,
            lon: 101.61264,
            address:'Head Office & Klang Valley Sales Office' +
            'Level 16, Menara TSR, Mutiara Damansara,' +
            'No. 12 Jalan PJU 7/3, Petaling Jaya,' +
            '47810 Selangor Darul Ehsan.' +
            'Malaysia.'
        },{
            name: 'UEM Construction Sdn Bhd',
            z:  910949104.7,
            lat: 3.09458,
            lon: 101.635979,
            address:'UEM Builders Berhad (29354-H)' +
            ' No. 5A, Jalan 51/217' +
            ' Off Jalan Templer' +
            ' 46050 Petaling Jaya' +
            ' Selangor, Malaysia'
        },{
            name: 'Volvo Malaysia Sdn Bhd',
            z:  113927380,
            lat: 3.063706,
            lon: 101.518391,
            address:'olvo Malaysia Sdn Bhd' +
            'No 6, Jalan Bicu 15/6' +
            'Seksyen 15' +
            '40200 Shah Alam' +
            'Selangor Darul Ehsan' +
            'Malaysia'
        },{
            name: 'Zulfan (M) Sdn Bhd',
            z:  18822000,
            lat: 3.049088,
            lon: 101.534758,
            address:'34A, Jalan Kota Raja E27/E, Hicom Town Centre, Seksyen 27, 40400, Shah Alam, Selangor, Malaysia' +
            'Shah Alam, Selangor 40400' +
            'Malaysia'
        }]
        Highcharts.mapChart('map-world-markers', {
            chart: {
                map: 'custom/world'
            },

            title: {
                text: null
            },
            credits:false,
            legend: {
                enabled: false
            },
            tooltip: {
                style:{
                    fontSize: '15px'
                },
                formatter: function () {
                    return '<b>'+this.series.name+'</b><br>-----------------------------<br>' +
                        '<b>Contractor Name: </b>' + this.point.name + '<br>' +
                        '<b>Contract Value (RM): </b>' + this.point.z + '<br>' +
                        '<b>Address: </b><address>' + this.point.address +'</address>';
                }
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'top'
                }
            },
            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },
            series : [{
                name: 'Countries',
                mapData: mapData,
                /*            borderColor: 'black',
                            borderWidth: 0.2,*/
                /*            joinBy: ['iso-a2', 'code'],*/
                /*color: '#E0E0E0',*/
                nullColor: 'rgb(78, 162, 200)',
                enableMouseTracking: false
            }, {
                type: 'mapbubble',
                mapData: mapData,
                color: 'rgb(255, 0, 85)',
                name:"Awarded Contractors",
                data: data,
                joinBy: ['postal-code', 'code'],
                minSize: 4,
                maxSize: '10%'
            }]
        });

        Highcharts.setOptions({
            colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
                '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1']
        });
        Highcharts.chart('hc-i-distme', {
            chart: {
                type: 'pie'
            },
            credits:false,
            title: {
                text: null
            },
            xAxis: {
                type: 'category',
                showEmpty: false
            },
            yAxis: {
                title: {
                    text: 'RM'
                },
                labels: {
                    formatter: function () {
                        return this.value + " B";
                        return this.value + " B";
                        return this.value + " B";

                    }
                },
                showEmpty: false,
                gridLineWidth: 0,
                minorGridLineWidth: 0
            },
            tooltip: {
                pointFormat: '<b>RM {point.y:,.2f}</b>'
            },
            plotOptions: {
                pie: {
                    innerSize: '60%'
                }
            },
            series: [{
                type:'waterfall',
                upColor: Highcharts.getOptions().colors[2],
                color: Highcharts.getOptions().colors[2],
                name: "Material Cost",
                data: [{
                    name: 'Local',
                    y: 5.03,
                    drilldown:'Chrome'
                }, {
                    name: 'Import',
                    y: 4.09,
                    drilldown:'Firefox'

                },{
                    name: 'Total Cost',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y) + 'B';
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }
                },
                pointPadding: 0
            }],
            drilldown: {
                series: [{
                    name: "Chrome",
                    id: "Chrome",
                    data: [
                        [
                            "v65.0",
                            0.1
                        ],
                        [
                            "v64.0",
                            1.3
                        ],
                        [
                            "v63.0",
                            53.02
                        ],
                        [
                            "v62.0",
                            1.4
                        ],
                        [
                            "v61.0",
                            0.88
                        ],
                        [
                            "v60.0",
                            0.56
                        ],
                        [
                            "v59.0",
                            0.45
                        ],
                        [
                            "v58.0",
                            0.49
                        ],
                        [
                            "v57.0",
                            0.32
                        ],
                        [
                            "v56.0",
                            0.29
                        ],
                        [
                            "v55.0",
                            0.79
                        ],
                        [
                            "v54.0",
                            0.18
                        ],
                        [
                            "v51.0",
                            0.13
                        ],
                        [
                            "v49.0",
                            2.16
                        ],
                        [
                            "v48.0",
                            0.13
                        ],
                        [
                            "v47.0",
                            0.11
                        ],
                        [
                            "v43.0",
                            0.17
                        ],
                        [
                            "v29.0",
                            0.26
                        ]]
                }, {
                    name: "Firefox",
                    id: "Firefox",
                    data: [
                        [
                            "v58.0",
                            1.02
                        ],
                        [
                            "v57.0",
                            7.36
                        ],
                        [
                            "v56.0",
                            0.35
                        ],
                        [
                            "v55.0",
                            0.11
                        ],
                        [
                            "v54.0",
                            0.1
                        ],
                        [
                            "v52.0",
                            0.95
                        ],
                        [
                            "v51.0",
                            0.15
                        ],
                        [
                            "v50.0",
                            0.1
                        ],
                        [
                            "v48.0",
                            0.31
                        ],
                        [
                            "v47.0",
                            0.12
                        ]
                    ]
                }, {
                    name: "Internet Explorer",
                    id: "Internet Explorer",
                    data: [
                        [
                            "v11.0",
                            6.2
                        ],
                        [
                            "v10.0",
                            0.29
                        ],
                        [
                            "v9.0",
                            0.27
                        ],
                        [
                            "v8.0",
                            0.47
                        ]
                    ]
                }, {
                    name: "Safari",
                    id: "Safari",
                    data: [
                        [
                            "v11.0",
                            3.39
                        ],
                        [
                            "v10.1",
                            0.96
                        ],
                        [
                            "v10.0",
                            0.36
                        ],
                        [
                            "v9.1",
                            0.54
                        ],
                        [
                            "v9.0",
                            0.13
                        ],
                        [
                            "v5.1",
                            0.2
                        ]
                    ]
                }, {
                    name: "Edge",
                    id: "Edge",
                    data: [
                        [
                            "v16",
                            2.6
                        ],
                        [
                            "v15",
                            0.92
                        ],
                        [
                            "v14",
                            0.4
                        ],
                        [
                            "v13",
                            0.1
                        ]
                    ]
                }, {
                    name: "Opera",
                    id: "Opera",
                    data: [
                        [
                            "v50.0",
                            0.96
                        ],
                        [
                            "v49.0",
                            0.82
                        ],
                        [
                            "v12.1",
                            0.14
                        ]
                    ]
                }]
            }
        });
        Highcharts.chart('hc-i-distma', {
            chart: {
                type: 'pie'
            },
            credits:false,
            title: {
                text: null
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'RM'
                },
                labels: {
                    formatter: function () {
                        return this.value + " B";

                    }
                },
                visible:false,
                gridLineWidth: 0,
                minorGridLineWidth: 0
            },
            tooltip: {
                pointFormat: '<b>RM {point.y:,.2f}</b>'
            },
            series: [{
                type:'waterfall',
                name: "Machinery Cost",
                data: [{
                    name: 'Local',
                    y: 569000
                }, {
                    name: 'Import',
                    y: 120000
                },{
                    name: 'Total Cost',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }
                },
                pointPadding: 0
            }]
        });

        Highcharts.chart('hc-i-distla', {
            chart: {
                type: 'waterfall'
            },
            credits:false,
            title: {
                text: null
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'RM'
                },
                labels: {
                    formatter: function () {
                        return this.value + " B";

                    }
                },
                visible:false,
                gridLineWidth: 0,
                minorGridLineWidth: 0
            },
            tooltip: {
                pointFormat: '<b>RM {point.y:,.2f}</b>'
            },
            series: [{
                upColor: Highcharts.getOptions().colors[5],
                color: Highcharts.getOptions().colors[5],
                name: "Labour Cost",
                data: [{
                    name: 'Local',
                    y: 220000
                }, {
                    name: 'Foreign',
                    y: 169000
                },{
                    name: 'Total Cost',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }
                },
                pointPadding: 0
            }]
        });
    });
});