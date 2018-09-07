<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <link href="assets/css/style_dashboard.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="../../assets/js/charts/d3/d3.v4.js"></script>
    <script type="text/javascript" src="../../assets/js/charts/d3/tubemap/popper.min.js"></script>
    <script type="text/javascript" src="../../assets/js/charts/d3/tubemap/d3-tube-map.js"></script>
    <script type="text/javascript" src="assets/js/project-dashboard.js"></script>
</head>
<body>
<div class="navbar navbar-inverse">
    <?php include 'fragments/main_navbar.php' ?>
</div>
<div class="navbar navbar-default" id="navbar-second">
    <?php include 'fragments/child_navbar.php' ?>
</div>
<div class="page-container no-padding">
    <div class="page-content">
        <div class="content-wrapper">
<!--            <div class="row">-->
                <div class="col-lg-12 p-l-0">
                    <div id="infographic" class="">
                        <div class="ig_plate">
                            <div id="float_plate" class="row">
                                <div id="plate_vector_map" class="plate_vector_map p-t-20">
                                    <!--missing plate_vector_map.svg-->
                                </div>
                                <div id="plate_overall_progress">
                                    <div id="pop_label">
                                        <span class="set1">OVERALL PROGRESS</span>
                                        <!--<span class="set6">Systems Actual Progress</span>-->
                                        <span class="set2">Actual</span>
                                        <span class="set3">Planned</span>
                                        <span class="set4">Variance</span>
                                        <span class="set5">Trend</span>
                                        <span class="set7">Days Delay</span>
                                    </div>
                                    <div id="pop_value">
                                        <span class="set1">30.50%</span>
                                        <span class="set2">41%</span>
                                        <span class="set3">10.50%</span>
                                        <span class="set5">158</span>
                                        <span class="set4"><i class="fa fa-arrow-down" aria-hidden="true"></i> DOWN</span>
                                    </div>
                                </div>
                                <div id="plate_commercial">
                                    <div id="pcom_label">
                                        <span class="set1">PROJECT COST UPDATE</span>
                                        <span class="set2">Contract Value</span>
                                        <span class="set3">Project Spend To-Date</span>
                                        <span class="set4">Retention Sum</span>
                                        <span class="set5">Project Sum</span>
                                        <span class="set6">Provisional Sum</span>
                                        <span class="set7">Variation Orders</span>
                                        <span class="set8">Remaining Sum</span>

                                    </div>

                                    <div id="pcom_value">
                                        <span class="set1">RM 771,384,000</span>
                                        <span class="set2">RM 174,255,645</span>
                                        <span class="set3">RM 17,425,654</span>
                                        <span class="set4">RM 617,115,000</span>
                                        <span class="set5">RM 154,269,000</span>
                                        <span class="set6">RM 0</span>
                                        <span class="set7">RM 579,702,791</span>
                                    </div>
                                </div>
                                <div id="plate_legend">
                                    <div id="pl_label_header">
                                        <span class="set1">Legends</span>
                                    </div>
                                    <div id="pl_label_content">
                                        <!--<span class="set1">Not Started</span>
                                        <span class="set2">In Progress</span>
                                        <span class="set3">Completed</span>
                                        <span class="set4">Delayed</span>-->
                                    </div>
                                </div>
                                <div id="plate_system">
                                    <div id="donut_plate">

                                        <div id="dp_db_donut_1" class="dp_top" style="    cursor: pointer; z-index: 3002;"></div>
                                        <div id="dp_db_donut_2" class="dp_bottom"></div>

                                    </div>
                                </div>

                                <div id="plate_physical">
                                    <div id="pp_station">
                                        <span class="set1"></span>
                                    </div>
                                    <div id="pp_depot">
                                        <span class="set1"></span>
                                    </div>
                                </div>
                                <div id="plate_label">
                                    <div id="pl_station">
                                        <!--            <span class="set1"><a href="station.php"><i class="fa fa-train"></i> Johan Setia</a></span>
                                                    <span class="set2"><a href="station.php"><i class="fa fa-train"></i> Bandar Botanik</a></span>
                                                    <span class="set3"><a href="station.php"><i class="fa fa-train"></i> Aeon Bukit Tinggi</a></span>
                                                    <span class="set4"><a href="station.php"><i class="fa fa-train"></i> Tesco Bukit Tinggi</a></span>
                                                    <span class="set5"><a href="station.php"><i class="fa fa-train"></i> Sri Andalas</a></span>
                                                    <span class="set6"><a href="station.php"><i class="fa fa-train"></i> Taman Selatan</a></span>
                                                    <span class="set7"><a href="station.php"><i class="fa fa-train"></i> Klang Town</a></span>
                                                    <span class="set8"><a href="station.php"><i class="fa fa-train"></i> Jalan Meru</a></span>
                                                    <span class="set9"><a href="station.php"><i class="fa fa-train"></i> Pasar Besar Klang</a></span>
                                                    <span class="set10"><a href="station.php"><i class="fa fa-train"></i> Kawasan 17</a></span>
                                                    <span class="set11"><a href="station.php"><i class="fa fa-train"></i> Bukit Raja</a></span>
                                                    <span class="set12"><a href="station.php"><i class="fa fa-train"></i> I-City</a></span>
                                                    <span class="set13"><a href="station.php"><i class="fa fa-train"></i> UITM</a></span>
                                                    <span class="set14"><a href="station.php"><i class="fa fa-train"></i> Sirim</a></span>
                                                    <span class="set15"><a href="station.php"><i class="fa fa-train"></i> Section 14</a></span>
                                                    <span class="set16"><a href="station.php"><i class="fa fa-train"></i> Persiaran Hishamuddin</a></span>
                                                    <span class="set17"><a href="station.php"><i class="fa fa-train"></i> Stadium</a></span>
                                                    <span class="set18"><a href="station.php"><i class="fa fa-train"></i> Glenmarie</a></span>
                                                    <span class="set19"><a href="station.php"><i class="fa fa-train"></i> Temasya</a></span>
                                                    <span class="set20"><a href="station.php"><i class="fa fa-train"></i> Persada Plus</a></span>
                                                    <span class="set21"><a href="station.php"><i class="fa fa-train"></i> Dataran Prima</a></span>
                                                    <span class="set22"><a href="station.php"><i class="fa fa-train"></i> Lien Hoe</a></span>
                                                    <span class="set23"><a href="station.php"><i class="fa fa-train"></i> Tropicana</a></span>
                                                    <span class="set24"><a href="station.php"><i class="fa fa-train"></i> Damansara Utama</a></span>
                                                    <span class="set25"><a href="station.php"><i class="fa fa-train"></i> One Utama</a></span>
                                                    <span class="set26"><a href="station.php"><i class="fa fa-train"></i> Station 3</a></span>-->
                                    </div>
                                    <div id="pl_mspr">
                                        <!--			<span class="set1"><a href="mspr.php">P</a></span>
                                                    <span class="set2"><a href="mspr.php">P</a></span>
                                                    <span class="set3"><a href="mspr.php">P</a></span>
                                                    <span class="set4"><a href="mspr.php">P</a></span>
                                                    <span class="set5"><a href="mspr.php">P</a></span>
                                                    <span class="set6"><a href="mspr.php">P</a></span>
                                                    <span class="set7"><a href="mspr.php">P</a></span>
                                                    <span class="set8"><a href="mspr.php">P</a></span>
                                                    <span class="set9"><a href="mspr.php">P</a></span>
                                                    <span class="set10"><a href="mspr.php">P</a></span>
                                                    <span class="set11"><a href="depot.php">DEPOT</a></span>
                                                    <span class="set13"><a href="mspr.php">P</a></span>-->
                                    </div>
                                    <div id="pl_package">
                                        <a id="pl_package_V201" href="#" class="set1">16 Sierra</a>
                                        <a id="pl_package_V202" href="#" class="set2">Cyberjaya North</a>
                                    </div>
                                    <div id="pl_phase">
                                                  <span class="set1"><a href="section1.php">Section 1</a></span>
                                                    <span class="set2"><a href="#">Section 2</a></span>
                                                    <span class="set9"><a href="#">Section 3</a></span>
                                             <!--         <span class="set3"><a href="#">LRV</a></span>
                                                    <span class="set6"><a href="#">COM</a></span>
                                                    <span class="set4"><a href="#">DEMV</a></span>
                                                    <span class="set5"><a href="#">AFC</a></span>
                                                    <span class="set7"><a href="#">EAC</a></span>
                                                    <span class="set8"><a href="#">CITP</a></span>-->
                                    </div>
                                    <div class="barchart_group barchart_group_1">
                                        <div class="barchart_lr barchart_left">
                                            <!-- <div class="title2">Month to Date</div> -->
                                            <div class="barchart">
                                                <div id="barchart_1_left">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="barchart_lrC barchart_right">
                                            <!-- <div class="title2">Year to Date</div> -->
                                            <div class="barchart">
                                                <div id="barchart_1_center">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="barchart_lrR barchart_right">
                                            <!-- <div class="title2">Year to Date</div> -->
                                            <div class="barchart">
                                                <div id="barchart_1_right">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--<div class="img-holder">-->
                                <img src="assets/images/img_overlay2.jpg">
                           <!-- </div>-->
                        </div>
                        <div class="ig_plate">
                            <img src="assets/images/acreworks_base_13.png">
                        </div>
                    </div>
                </div>
            <!--</div>-->
        </div>
    </div>
</div>
<script>

</script>
</body>
</html>
