var owl = $('.testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    adaptiveHeight: true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

owl.on('resized.owl.carousel', function(event) {
    $.fn.matchHeight._update();
})

$(function() {
    $('.testimonials .owl-item').matchHeight({ });
});

$(function() {
    $('.testimonials .owl-item').matchHeight({ });
});