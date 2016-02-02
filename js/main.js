$('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    fade: true,
    speed: 800,
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

$('.review').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});


$('.btn-b04').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500);
    return false;
});

// ----- Маска ----------
jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});


$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});


/* Поле отправки файла */

function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }
    var filename = str.slice(i);
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

