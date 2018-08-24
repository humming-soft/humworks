<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <link href="assets/css/dashboard.css" rel="stylesheet" type="text/css">
    <script src="../../assets/js/charts/d3/support/liquidFillGauge.js"></script>
    <script type="text/javascript" src="assets/js/projects.js"></script>
</head>
<body>
<div class="navbar navbar-inverse">
    <?php include 'fragments/main_navbar.php' ?>
</div>
<div class="page-header">
    <div class="page-header-content">
        <div class="page-title">
            <h5>
                <span class="text-semibold"><i class="icon-display4 position-left"></i> All Projects</span>
<!--                <small class="display-block">Basic breadcrumb inside page header</small>-->
            </h5>
        </div>
        <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
            <li class="active"><a class="border-bottom-w2" href="#justified-right-icon-tab1" data-toggle="tab" aria-expanded="true"><i class=" icon-stats-growth position-left"></i> In Progress <span class="label label-primary label-inline position-right">3</span></a></li>
            <li class=""><a class="border-bottom-w2" href="#justified-right-icon-tab2" data-toggle="tab" aria-expanded="false"><i class="icon-equalizer position-left"></i> Not Started <span class="label label-default label-inline position-right">0</span></a></li>
            <li class=""><a class="border-bottom-w2" href="#justified-right-icon-tab3" data-toggle="tab" aria-expanded="false"><i class="icon-portfolio position-left"></i> Completed <span class="label label-success label-inline position-right">2</span></a></li>
        </ul>
    </div>
</div>
<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="tab-content">
                    <div class="tab-pane active" id="justified-right-icon-tab1">
                        <div class="col-lg-12 col-xl-12">
                            <?php include 'portlets/portlet_project_list_progress.php' ?>
                        </div>
                    </div>

                    <div class="tab-pane" id="justified-right-icon-tab2">
                        <div class="col-lg-12 col-xl-12">
                            <h6 class="text-center"><i class="icon-stack-empty position-left"></i> No Projects Found <br><hr></h6>
                        </div>
                    </div>

                    <div class="tab-pane" id="justified-right-icon-tab3">
                        <div class="col-lg-12 col-xl-12">
                            <?php include 'portlets/portlet_project_list_completed.php' ?>
                        </div>
                    </div>
                </div>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
