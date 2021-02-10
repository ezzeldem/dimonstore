$(document).ready(function () {

  // web lang
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  // opne menu
  $('.nav-section .menu-icon i').click(function () {
    $('.nav-section .nav-ul').slideToggle();
  });

  // scroleBotton
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
      $(".scrol-box").css({ "opacity": 1, "visibility": "visible", "bottom": '40px' });


      if ($(window).width() >= 772) {
        $(".nav-section").addClass('fixed-box');
      }
    }
    else {
      $(".scrol-box").css({ "opacity": 0, "visibility": "hidden", "bottom": '0px' });
      $(".nav-section").removeClass('fixed-box');
    }
  });
  $(".scrol-box").click(function () {
    $("html, body").animate(
      {
        scrollTop: $('.intro-section').offset().top,
      },
      900
    );
  });

  // opne-searchBar
  $(".nav-section .nav-box2 .nav-side-box#search-icon").click(function () {
    $(".search-box").addClass("open-search");
  });
  $(".nav-section .search-box .search-form form .closeSearch").click(function () {
    $(".search-box").removeClass("open-search");
  });

  // opne sub-menu
  $('.nav-section .nav-box2 .nav-side-box').click(function () {
    $(this).children('.sub-box').slideToggle().parent().siblings().children('.sub-box').slideUp();
  });


  // intro-slider
  $('.intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: false,
    dots: false,
    arrows: false,
    rtl: dir_lang,
  });

// featured-slider
$('.featured-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  outhight: true,
  autoplaySpeed: 2000,
  autoplay: false,
  dots: false,
  prevArrow: "<div class='circle-arrow devo-left'><i class='fa fa-chevron-left'></i></div>",
  nextArrow: "<div class='circle-arrow devo-right'><i class='fa fa-chevron-right'></i></div>",
  arrows: true,
  responsive: [

    {
      breakpoint: 997,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 772,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
// accessories-slider
$('.accessories-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  outhight: true,
  autoplaySpeed: 2000,
  autoplay: false,
  dots: false,
  prevArrow: "<div class='circle-arrow devo-left'><i class='fa fa-chevron-left'></i></div>",
  nextArrow: "<div class='circle-arrow devo-right'><i class='fa fa-chevron-right'></i></div>",
  arrows: true,
  responsive: [

    {
      breakpoint: 997,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 772,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});


});