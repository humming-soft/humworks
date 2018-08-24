var ProcYetCalled = function() {

/*    var _kpiProgressDetail = function(element){

    };*/
    var _activePage = function(element){
        element.addClass("active");
    };
    return {
        init: function() {
            _activePage($(".nav_proc_yetcalled"));
            _activePage($(".nav_proc_yetcalled").parent().parent());
        }
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    ProcYetCalled.init();
});













