

var blogBlock = $('[data-blogs-slider]');

blogBlock.each(function () {
    var self = $(this),
        rows = self.data('rows');

    if (self.not('.slick-initialized')) {
        self.slick({
            slidesToShow: rows,
            slidesToScroll: 1,
            dots: true,
            speed: 4000,
            autoplaySpeed: 0,
            cssEase: "linear",
            autoplay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                }
            ]
        });
    };
});

