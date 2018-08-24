<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <link href='../../assets/js/charts/d3/visavail/css/visavail.css' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="../../assets/js/charts/d3/visavail/js/visavail.js"></script>
    <script type="text/javascript" src="assets/js/dashboard.js"></script>
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
                <span class="text-semibold"><i class="icon-display4 position-left"></i> MRT - V209 Dashboard</span>
<!--                <small class="display-block">Basic breadcrumb inside page header</small>-->
            </h5>
        </div>
        <div class="heading-elements">
            <ul class="breadcrumb">
                <li><a href="projects.php"><i class="icon-home2 position-left"></i></a></li>
                <li><a href="dashboard.php">MRT - V209</a></li>
                <li class="active">Dashboard</li>
            </ul>
        </div>
    </div>
</div>

<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-6">
                    <?php include 'portlets/portlet_package_info.php' ?>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_overall_actual.php' ?>
                        </div>
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_overall_variance.php' ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_overall_planned.php' ?>
                        </div>
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_overall_trend.php' ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_project_completion.php' ?>
                        </div>
                        <div class="col-lg-6">
                            <?php include 'portlets/portlet_overall_spi.php' ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_overall_cost_update.php' ?>
                </div>
            </div>
            <div class="row">
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
                <div class="col-lg-4">
                    <?php include 'portlets/portlet_kad.php' ?>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_project_timelocation_chart.php' ?>
                </div>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
