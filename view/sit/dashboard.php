<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <link href="assets/css/style_dashboard.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="assets/js/dashboard.js"></script>
</head>
<body>
<div class="navbar navbar-inverse">
    <?php include 'fragments/main_navbar.php' ?>
</div>
<div class="navbar navbar-default" id="navbar-second">
    <?php include 'fragments/child_navbar.php' ?>
</div>
<div class="page-container no-padding p-t-20">
    <div class="page-content">
        <div class="content-wrapper">
<!--            <div class="row">-->
                <div class="col-lg-12">
                    <div id="infographic" class="">
                        <div class="ig_plate">
                            <?php include 'fragments/gis_accessories.php' ?>
                            <img src="assets/images/base_bg.jpg">
                        </div>
                        <div class="ig_plate">
                            <img src="assets/images/lrt_3_base2.png">
                        </div>
                    </div>
                </div>
            <!--</div>-->
        </div>
    </div>
</div>
</body>
</html>
