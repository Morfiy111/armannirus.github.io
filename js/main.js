$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up, .footer-logo img').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})

$(document).ready(function() {
    $('.main-search-icon').bind('click', function () {
        $('.search-line-input, .close-header-icon, .main-search-icon').toggleClass('show');
    });
});

var itemsCount=4;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount=3;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount=2;
}
if (window.matchMedia("(max-width: 500px)").matches) {
    itemsCount=1;
}
var owl = $('.owl-carousel-2');
owl.owlCarousel({
    items:itemsCount,
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.border-bottom-block').addClass("sticky");
    }
    else{
        $('.border-bottom-block').removeClass("sticky");
    }
});