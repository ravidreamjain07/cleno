$(document).ready(function() {
/*------------------------------------------*/
/*     STICKY HEADER JS
/*------------------------------------------*/

$(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( "#header" ).addClass("schrink");
    } else {
        $( "#header" ).removeClass("schrink");
    }
});

/*------------------------------------------*/
/*     NAVIGATION JS
/*------------------------------------------*/

var menu = $('.menu-wrapper');
$('.menu-bar').click(function(event) {
    $(this).toggleClass('change');
    $('.menu').fadeToggle('400');
  $('body, html').toggleClass('no-scroll');
});
$(window).resize(function(e) {
    var width = $(window).width();
    if(width >= 991 && menu.is(':hidden')){
        menu.removeAttr('style');
        
    }
});



/*------------------------------------------*/
/*     OWL SLIDER
/*------------------------------------------*/

$('.owl-carousel#home-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    dots: true,
    autoplay: true,
    items:1,
    //animateOut: 'fadeOut',
    rewind: true,
})
$('.owl-carousel.collection-slider').owlCarousel({

    margin:10,
    nav:false,
    dots: false,
    autoplay: true,
    mouseDrag:true,
    touchDrag:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,

        },
        600:{
           items:3, 
        },
        992:{
            items:4,
        },
        1024:{
            items:5,
            autoplay: false,
            mouseDrag:false,
            touchDrag:false,
            loop:false,
            
        }
    }
    
})
$('.owl-carousel.product-slider').owlCarousel({
    
    margin:20,
    nav:false,
    dots: false,
    autoplay: true,
    mouseDrag:true,
    touchDrag:true,
    responsiveClass:true,

    responsive:{
        0:{
            items:2,
        },
        600:{
            items:2,
        },
        992:{
            items:3,
        },
        1024:{
            items:4,
            loop:false,
            autoplay: false,
            mouseDrag:false,
            touchDrag:false,
        }
    }
    
})
$('.owl-carousel.testimonial-slider').owlCarousel({
    items:3,
    center: true,
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    autoplay: true,


    responsive:{
        0:{
           items:1
        },
        768:{
          items:3,  
        }
    }
    
})
$('.owl-carousel.instafeed-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: false,
    autoplay: true,
    
    responsiveClass:true,

    responsive:{
        0:{
            items:2,
        },
        768:{
            items:4,
        },
    }
    
})

$('.owl-carousel#producSlider').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 0,
    dots: false,
    callbacks: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});


});


