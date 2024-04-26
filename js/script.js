$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass("fas fa-times");
        $('.navigate').toggleClass('nav-toggle');
    });
});