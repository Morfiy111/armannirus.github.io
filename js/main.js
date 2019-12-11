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
$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
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

var wrapper = document.querySelector(".header-slogan");
var text = document.querySelector(".slogan-text");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
    (function(i) {
        setTimeout(function() {
            // Created textNode to append
            var texts = document.createTextNode(textCont[i])
            var span = document.createElement('span');
            span.appendChild(texts);

            span.classList.add("wave");
            wrapper.appendChild(span);

        }, 75 * i);
    }(i));
}