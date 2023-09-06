$(document).ready(function(){
    $('.contain-boxes').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        autoplaySpeed: 2000,
        slidesToScroll: 2,
        responsive:[
          {
            breakpoint: 820,
            settings:{
              slidesToShow:2
            }
          },
          {
            breakpoint: 640,
            settings:{
              // dots:true,
              slidesToShow:1,
              slidesToScroll:1,
              dots:true,
              
            }
          }
        ]
    });
  });


  $(document).ready(function(){
    $('.slide').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        autoplaySpeed: 2000,
        slidesToScroll: 1
    });
  });
