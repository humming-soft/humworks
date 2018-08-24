
<ul class="nav navbar-nav no-border visible-xs-block">
    <li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i class="icon-menu7"></i></a></li>
</ul>

<div class="navbar-collapse collapse" id="navbar-second-toggle">
    <ul class="nav navbar-nav">
        <li class="active"><a href="projects.php"><i class="icon-home2 position-left"></i></a></li>
        <!--<li><a href="dashboard.php"><i class="icon-display4 position-left"></i> Dashboard</a></li>-->

        <li>
        <li><a href="programmes.php"><i class="icon-stats-bars position-left"></i> Programme</a></li>
        <li><a href="labour_machinaries.php"><i class="icon-stars position-left"></i> Resources</a></li>
<!--        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="icon-grid2 position-left"></i> Resources <span class="caret"></span>
            </a>
            <ul class="dropdown-menu width-200">
                <li class="dropdown-header">Resource Management</li>
                <li><a href="labour_machinaries.php"><i class="icon-stats-dots position-left"></i> Summary</a></li>
                <li><a href="starters/1_col.html"><i class="icon-man-woman  position-left"></i> Labour</a></li>
                <li><a href="starters/2_col.html"><i class="icon-hammer-wrench position-left"></i> Machinery</a></li>
            </ul>
        </li>-->

        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="icon-strategy position-left"></i> Advanced <span class="caret"></span>
            </a>

            <ul class="dropdown-menu width-200">
                <li class="dropdown-header">Project Management</li>
                <li><a href="adv_check_print.php"><i class="icon-paragraph-justify3"></i> Advanced Check Point (ACP)</a></li>
                <li><a href="internal_awsb_target.php"><i class="icon-align-center-horizontal"></i> Internal Target</a></li>
                <li><a href="starters/layout_boxed.html"><i class="icon-align-center-horizontal"></i> Document Control</a></li>
                <li><a href="starters/layout_sidebar_sticky.html"><i class="icon-flip-vertical3"></i> Forecasting</a></li>
            </ul>
        </li>
        <li><a href="procurement.php"><i class="icon-graph position-left"></i> Report</a></li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
        <li>
            <a href="#">
                <i class="fa fa-calendar-o" aria-hidden="true"></i> Today: <span id="current_date" class="text-danger"><b>12 JUL 2018</b></span>
            </a>
        </li>
        <li>
            <a href="javascript:;" class="datepicker">
                <i class="fa fa-calendar" aria-hidden="true"></i> Data Date :
                <input readonly="true" id="data_date" type="text" value="" placeholder="Data date" name="data-date"/>
                <input type="hidden" id="data_date_selected" value=""/>
                <div style="display: none;" class="input-group-btn">
                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">Date <span class="caret"></span></button>
                    <ul id="date_list" class="dropdown-menu">
                    </ul>
                </div>
                <span id="date_selector" class="hd_label hd_button">Change</span>
           </a>
        </li>
    </ul>
</div>