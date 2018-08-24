$(function() {
    $('.tier-legend').hide();
    $("#chartSelector").change(function(event){
        chartChange($("input[type=radio]:checked").val());
    });
    $(".prog-filter").click(function(event){
        programmeFilterTrigger($(this).data("group"));
    });
    restart();
});