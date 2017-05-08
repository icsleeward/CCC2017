$(document).ready(function(){
    $("#hack").click(function(){
        $("#hack-ans").toggle();
    });
    $("#import").click(function(){
        $("#import-ans").toggle();
    });
    $("#challenge").click(function(){
        $("#challenge-ans").toggle();
    });
    $("#accomplish").click(function(){
        $("#accomplish-ans").toggle();
    });
    $("#different").click(function(){
        $("#different-ans").toggle();
    });
    $("#participate").click(function(){
        $("#participate-ans").toggle();
        $("#participate-ans-2").toggle();
        $("#participate-ans-3").toggle();
    });
    $('#gmap-holder').find('iframe').css('pointer-events', 'none');
});

$(function() {
    $('#gmap-holder').click(function(e) {
        $(this).find('iframe').css('pointer-events', 'all');
    }).mouseleave(function(e) {
        $(this).find('iframe').css('pointer-events', 'none');
    });
})
