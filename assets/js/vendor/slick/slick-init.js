//Hero Slick Animation with Autoplay and Fade

$('.hero-container').slick({
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
});

// Slider Inspirations Slick Animation 

$('.main-slider-container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
    ]
});
                    