(function() {
    "use strict";

    $(window).load(function () {
        $(".btt i").hide();
    });
    // Window Load

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 400) {
            $(".btt i").fadeIn(500);
        } else {
            $(".btt i").fadeOut(500);
        }
        
        if (scrolling > 100) {
            $(".main-navbar").addClass("scrolled");
        } else {
            $(".main-navbar").removeClass("scrolled");
        }
    });
    // Window Scroll

    $('.testimonial-slider').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                centerMode: false,
                infinite: true,
            }
            },
        ]
    });
    // Testimonial Slider

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    // Tooltip

    $(".btt i").click(function () {
        $("html, body").animate(
            {
            scrollTop: 0,
            },
            500
        );
    });
    // BackToTop
}(jQuery));