var ProcCalled = function() {

/*    var _kpiProgressDetail = function(element){

    };*/
    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            _activePage($(".nav_proc_called"));
            _activePage($(".nav_proc_called").parent().parent());
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    ProcCalled.init();
});













