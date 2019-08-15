$(document).ready(function() {
    var header = $('#header'),
        bannerHeight = $('#banner').innerHeight(),
        scrollOffset = 0;
    // Fixed header
    checkScroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    })


    function checkScroll(scrollOffset) {
        if (scrollOffset >= bannerHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');

        }
    }

    //bar's transform to x
    $('#nav-toggle__item').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('activeNav');
    })

    //smooth scroll from nav to section
    $('[data-scroll]').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            elemId = $this.data('scroll'),
            elemOffset = $(elemId).offset().top - 100;
        $('.nav__link').removeClass('active');
        $this.addClass('active');

        $('#nav').removeClass('active');

        $('html, body').animate({
            scrollTop: elemOffset
        }, 500);
    })

    //to open nav from bar
    $('.nav-toggle').on('click', function(e) {
        e.preventDefault();

        $('#nav').toggleClass('active');
    })
})