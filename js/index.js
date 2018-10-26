$(function () {
    $('.navContainer .navBar a').bind('click', function (event) {
        var $anchor = $(this);


        $(".links").removeClass("active");
        $(this).addClass("active");
        var rect = $(".active")[0].getBoundingClientRect();
        $(".marker").css("left", rect.left);
        // if you want to use one of the easing effects:
        // $('html, body').stop().animate({
        //     scrollLeft: $($anchor.attr('href')).offset().left
        // }, 1500, 'easeInOutExpo');

        $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 600);
        event.preventDefault();
    });
});