// Owl-Carousel 

$(document).ready(function(){
    $(".banner-area").owlCarousel({
    loop: true,
    nav: false,
    margin:20,
    autoplay:false,
    dot:true,
    smartSpeed:600,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            700:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

//Magnific Popup

$('.image-link').magnificPopup({
    type:'image',
    gallery:{
        enabled:true
    }
});

$('.popup-video').magnificPopup({
    type:'iframe'  
});

// Sticky Header

$(window).on('scroll', function(){
    if ($(this).scrollTop() > 20){
        $('.header-area').addClass("sticky");
    } else{
        $('.header-area').removeClass("sticky");
    }
});

//Mobile Manu

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


