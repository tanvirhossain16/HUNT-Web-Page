$(function(){
    // Counter_up

    // "use strict"
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });


    // Banner_slider

    // "use strict"
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
      });

    // Venobox
     
    // "use strict"
    new VenoBox({
        spinner: "grid",
        navSpeed: 100,
    });


        
    // service section 
    // "use stict"
    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        vertical: true,
        prevArrow: false,
        nextArrow: false,
    });


    // Testimonial Slider
    $('.person_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        vertical: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-up"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-down"></i></button>',
        asNavFor: ".person_info_slider"
    }); 
    
    

    $('.person_info_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        vertical: true,
        arrows: false,
        asNavFor: ".person_slider"
    }); 


    $('.data_counter').counterUp({
        delay: 10,
        time: 9000,
    });


})



