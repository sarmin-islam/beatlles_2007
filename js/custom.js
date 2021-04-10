//active class in nanber 

$(function(){
    $('.navbar .nav-item').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});



//banner particel
$('#example').polygonizr({
    
    canvasTop:"0",

});
//type banner h3
var typed = new Typed('.type', {
    strings: ["hi ! we are", "hi ! we are"],
    typeSpeed: 300,
    loop: true,
  });
  
  
//slick service
$('.service-slider').slick({
    autoplay:true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
    ]
    
});
//slick testimonial
$('.testimonial-slider').slick({
    autoplay:true,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
    ]
     
});
//wow js
new WOW().init();
//color-picker
$('.color-icon').on('click',function(){
$('.color-picker').toggleClass('colorpos');
});

$('.color-picker ul .red').on('click',function(){
    $('body').addClass('red').removeClass('yellow');
    });


    $('.color-picker ul .yellow').on('click',function(){
        $('body').addClass('yellow').removeClass('red');
        });

        $('.color-picker ul .default').on('click',function(){
            $('body').removeClass(yellow).removeClass('red');
            });


//back to top, fixed-nav

    $(function(){
        var backToTop = $('.back-to-top');
        var html_body = $('html,body');
        
        
            $(window).scroll(function () { 
                var scrolling = $(this).scrollTop();
                if(scrolling > 200){
                    backToTop.fadeIn();
                }else{
                    backToTop.fadeOut();
                }
                if(scrolling >200){
                     $('.navbar').addClass('fixed-nav');
                 }else{
                     $('.navbar').removeClass('fixed-nav');
                 }
            });
        
        
            backToTop.on('click',function(){
                html_body.animate({
                    scrollTop:0,
                },1500);
            });
        
            $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        html_body.animate({
                            scrollTop: target.offset().top - 0
                        }, 1500,);
                        return false;
                    }
                }
            });
            
        });
        
