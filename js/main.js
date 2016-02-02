$('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    fade: true,
    speed: 1000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.slider-nav.prev').click(function(){
    $('.slider').slick('slickPrev');
});

$('.slider-nav.next').click(function(){
    $('.slider').slick('slickNext');
});
