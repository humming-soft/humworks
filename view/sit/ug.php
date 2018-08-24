<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <link href="../../assets/js/plugins/nano-gallery2/css/nanogallery.min.css" rel="stylesheet" type="text/css">
    <script src="../../assets/js/plugins/nano-gallery2/jquery.nanogallery.min.js"></script>
    <script src="../../assets/js/charts/d3/support/liquidFillGauge.js"></script>
    <script type="text/javascript" src="assets/js/ug.js"></script>
</head>
<body>
<div class="navbar navbar-inverse">
    <?php include 'fragments/main_navbar.php' ?>
</div>
<div class="navbar navbar-default" id="navbar-second">
    <?php include 'fragments/child_navbar.php' ?>
</div>
<div class="page-header">
    <div class="page-header-content">
        <div class="page-title">
            <h5>
                <span class="text-semibold"><i class="icon-display4 position-left"></i> Dashboard</span>
            </h5>
        </div>
    </div>
</div>
<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-7">
                    <div class="row">
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_ug_info.php' ?>
                        </div>
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_package_progress.php' ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <?php include 'portlets/portlet_gallery.php' ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-12 col-xl-12">
                            <?php include 'portlets/portlet_ug_tunnel_progress.php' ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row">
                        <div class="col-lg-12">
                            <?php include 'portlets/portlet_ug_station_progress.php' ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <?php include 'portlets/portlet_she.php' ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <?php include 'portlets/portlet_scurve.php' ?>
                </div>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
