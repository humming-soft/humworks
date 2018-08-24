<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <script type="text/javascript" src="../../assets/js/charts/d3/d3_tooltip.js"></script>
    <script type="text/javascript" src="assets/js/land_acquisition.js"></script>
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
                <span class="text-semibold"><i class="icon-earth position-left"></i> Land Acquisition</span>
            </h5>
        </div>
    </div>
</div>
<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-sm-12 col-lg-4 col-xl-4">
                    <?php include 'portlets/portlet_land_sectors.php' ?>
                </div>
                <div class="col-sm-12 col-lg-8 col-xl-8">
                    <?php include 'portlets/portlet_land_packages_sector_owned.php' ?>
                </div>
<!--                <div class="col-sm-12 col-lg-8 col-xl-8">
                    <?php /*include 'portlets/portlet_land_acqusition_status.php' */?>
                </div>-->
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <?php include 'portlets/portlet_land_packages_acquisition_progress.php' ?>
                </div>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
