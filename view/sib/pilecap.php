<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'fragments/default_header.php' ?>
    <script type="text/javascript" src="assets/js/pilecap.js"></script>
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
                <span class="text-semibold"><i class="icon-align-bottom position-left"></i> Section 1 - Pilecap Progress</span>
                <!--                <small class="display-block">Basic breadcrumb inside page header</small>-->
            </h5>
        </div>
        <div class="heading-elements">
            <ul class="breadcrumb">
                <li><a href="dashboard.php"><i class="icon-home2 position-left"></i></a></li>
                <li><a href="section1.php">Section 1</a></li>
                <li class="active">Pilecap</li>
            </ul>
        </div>
    </div>
</div>
<div class="page-container">
    <div class="page-content">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-lg-12">
                            <?php include 'portlets/portlet_section_kpi_detail_pilecap.php' ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <?php include 'portlets/portlet_issue_mitigation.php' ?>
                </div>
            </div>
            <?php include 'fragments/default_footer.php' ?>
        </div>
    </div>
</div>
</body>
</html>
