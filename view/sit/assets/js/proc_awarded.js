var ProcAwarded = function() {

/*    var _kpiProgressDetail = function(element){

    };*/
    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            _activePage($(".nav_proc_awarded"));
            _activePage($(".nav_proc_awarded").parent().parent());
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    ProcAwarded.init();
});













