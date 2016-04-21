$(document).ready(function(){

$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});


 
$('.owl-carousel').owlCarousel({
	autoplay:true,
    items:1,
    margin: 30,
    loop:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }

})

owl = $('.owl-carousel').owlCarousel();
$(".prev").click(function () {
    owl.trigger('prev.owl.carousel');
});

$(".next").click(function () {
    owl.trigger('next.owl.carousel');
});



});