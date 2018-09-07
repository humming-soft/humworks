<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <script type="text/javascript" src="../../assets/js/charts/d3/d3.min.js"></script>
    <link href="../../assets/js/plugins/nano-gallery2/css/nanogallery.min.css" rel="stylesheet" type="text/css">
    <script src="../../assets/js/plugins/nano-gallery2/jquery.nanogallery.min.js"></script>
    <script type="text/javascript" src="../../assets/js/charts/d3/support/liquidFillGauge.js"></script>
    <script type="text/javascript" src="assets/js/section2.js"></script>
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
<!--                <small class="display-block">Basic breadcrumb inside page header</small>-->
            </h5>
        </div>
    </div>
</div>
<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-3">
                    <?php include 'portlets/portlet_section_info.php' ?>
                </div>
                <div class="col-lg-3">
                    <?php include 'portlets/portlet_overall_spi.php' ?>
                </div>
                <div class="col-lg-6">
                    <?php include 'portlets/portlet_gallery.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <?php include 'portlets/portlet_kad.php' ?>
                </div>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_she.php' ?>
                        </div>
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_qaqc.php' ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <?php include 'portlets/portlet_project_scurve.php' ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <?php include 'portlets/portlet_activities.php' ?>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
