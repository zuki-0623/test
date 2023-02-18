$(".icon").click(function() {
    $(this).toggleClass('active');
      $(".menu-nav").toggleClass('show')
   });
  
   $(".menu-nav a").click(function() {
      $(".icon").removeClass('active');
      $(".menu-nav").removeClass("show");
  });

$(function () {
    $(".slider").slick({
        isfinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        arrow:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
        fade:true,
    });
});

