<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <script src="../../assets/js/charts/d3/support/liquidFillGauge.js"></script>
    <script type="text/javascript" src="assets/js/infrastructure.js"></script>
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
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_infra_adv_works.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_infra_civil_work_gs.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_infra_civil_work_depot.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_infra_centralized_proc.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_infra_park_ride.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_infra_bus_depot.php' ?>
                </div>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
