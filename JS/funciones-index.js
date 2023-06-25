$(document).ready(function() {
    $(function() {
        $(".multiple-items").slick({
            Infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1800,
            dots: false,
            centerMode: false,
            centerpadding: "50px",
            esponsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        })
    });
});