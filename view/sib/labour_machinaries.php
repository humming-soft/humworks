<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <script type="text/javascript" src="assets/js/labour_machinaries.js"></script>
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
                <span class="text-semibold"><i class="icon-stats-bars3 position-left"></i> Manpower & Machinery </span>
<!--                <small class="display-block">Basic breadcrumb inside page header</small>-->
            </h5>
        </div>
        <div class="heading-elements">
            <ul class="breadcrumb">
                <li><a href="projects.php"><i class="icon-home2 position-left"></i></a></li>
                <li><a href="dashboard.php">MRT - V209</a></li>
                <li class="active">Manpower & Machinery</li>
            </ul>
        </div>
    </div>
</div>
<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <?php include 'portlets/portlet_resources_summary.php' ?>
                </div>
            </div>

            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
