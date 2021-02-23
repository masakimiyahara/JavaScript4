/* global $*/
$(function() {
    $(".slider").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:'<button class="slider-arrow prev-arrow"></button>',
        nextArrow:'<button class="slider-arrow next-arrow"></button>'
    });
});
