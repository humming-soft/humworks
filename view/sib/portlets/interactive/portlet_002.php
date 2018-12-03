<div class="panel panel-default">
    <div class="panel-heading">
        <div class="panel-logo">
            <i class="icon-info3 position-left"></i>
        </div>
        <h6 class="panel-title"> Interactive Chart-2 </h6>
        <div class="heading-elements">
            <form class="heading-form" action="#">
                <div class="form-group">
                    <select class="form-control" id="chart_change">
                        <optgroup label="Bar Chart">
                            <option value="bar">Bar</option>
                            <option value="stacked_bar">Stacked Bar</option>
                        </optgroup>
                        <optgroup label="Column Chart">
                            <option value="column" selected>Column</option>
                            <option value="inverted_column">Inverted Column</option>
                            <option value="stacked_column">Stacked Column</option>
                            <!-- <option value="range_column">Column Range</option> -->
                            <option value="column_polar">Column - Polar</option>
                        </optgroup>
                        <optgroup label="Line Chart">
                            <option value="line">Line</option>
                            <option value="spline">Spline</option>
                            <option value="area">Area</option>
                        </optgroup> 
                        <optgroup label="Pie Chart">
                            <option value="pie">Pie</option>
                        </optgroup> 
                        <optgroup label="Other">
                        </optgroup>     
                    </select>
                </div>
            </form>
        </div>
    </div>

    <div class="panel-body">
        <div id="container"></div>
    </div>
</div>