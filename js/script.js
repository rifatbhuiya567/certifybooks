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
        
        if (scrolling > 140) {
            $(".main-navbar").addClass("scrolled");
        } else {
            $(".main-navbar").removeClass("scrolled");
        }
    });
    // Window Scroll

    var serviceMenuContent = $('.service-menu-content');
    serviceMenuContent.hide();
    $('.service-menu').click(function() {
        $('.service-menu .service').toggleClass('active');
        serviceMenuContent.toggle(500);
    });
    // Responsive Menu

    function bannerSlider() {
        var myBannerSlider = $('.banner-slide');
        myBannerSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
    
        myBannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
    
        myBannerSlider.slick({
            autoplay: true,
            autoplaySpeed: 7000,
            speed: 1000,
            dots: true,
            fade: true,
            arrows: false,
        });
    
        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                  });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    bannerSlider();
    // Banner Slide

    var testimonialSlider = $('.testimonial-slider');
    testimonialSlider.slick({
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