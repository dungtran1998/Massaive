// header
window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        $(".img-header").css("height", "60px")
        $("header").css("background-color", "#0a0a0a");
        $("#navbarMassaive navbar-nav .nav-item").each(function (index) {
            $(elements[index]).css("line-height", "1")
            console.log(
                $(elements[index])
            )
        })
    }
    else {
        $(".img-header").css("height", "100px")
        $("header").css("background-color", "transparent");
    }
}


var element = $("#navbarMassaive .nav-item");
$("#navbarMassaive .nav-item").each(function (index) {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
        $(element[index]).css("line-height", "1px");
    } else {
        $(element[index]).css("line-height", "100px");
    }
})
console.log(element)


// Back to top
$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $(".backToTop").css("transform", "translateY(0)");
        }
        else {
            $(".backToTop").css("transform", "translateY(100px)");
        }
    })
    $(".backToTop").click(function (e) {
        e.preventDefault();
    });
});

// progress
$(document).ready(function () {
    var elements = $(".progressMassaive .progress-bar");
    elements.each(function (index) {
        var elePosDom = $(elements[index]);
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            var width = elePosDom.attr("data-width") + "%";
            var offsetTop = elePosDom.offset().top;
            if (offsetTop < scrollTop + windowHeight) {
                elePosDom.css("width", width);
            }
        });
    })
    // Lightbox gallery
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });

    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

    $('.playVimeo').magnificPopup({
        items: {
            src: '<div class="white-popup">' +
                '<iframe src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0"        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> '
                + '</div>',
            type: 'inline'
        }
    });
    $('.playVid').magnificPopup({
        type: "iframe",
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            },

            srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        }
    })

    $('.ceo-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            769: {
                items: 3
            },
            1200: {
                items: 1
            },
        }
    })
    $('.counter').countUp();

    $('.company-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 6
            },
        }
    })
});
