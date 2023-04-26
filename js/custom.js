//megadropdown show hide
var windowWidth = $(window).width();
if (windowWidth > 911) {
  $(".mega-dropdown").hover(function () {
    $(".mega-menu").addClass("show-megamenu");
  },
    function () {
      $(".mega-menu").removeClass("show-megamenu");
    });

} else if (windowWidth <= 911) {
  $('.mega-dropdown').click(function () {
    $(".mega-menu").toggleClass("show-megamenu");
  })
}

//goto top button
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.goto-top').addClass('goto-show');
  }
  if ($(window).scrollTop() < 301) {
    $('.goto-top').removeClass('goto-show');
  }
});
//animate to top 
$("#goto-top").click(function () {
  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 0);
});
// STICKY HEADER
$(window).scroll(function () {
  var sticky = $('header'),
    scroll = $(window).scrollTop();
  var windowWidth = $(window).width();
  if (scroll >= 130 && windowWidth > 769) sticky.addClass('sticky-header');
  else sticky.removeClass('sticky-header');
});

// main slider 
$('.home__slider').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
})

//portfolio slider
$('.home__portfolio-slider').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  autoplayTimeout: 3000,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    }
  }
})

//Testimonial slider
$('.home__testimonial-slider').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 1,
    }
  }
})

// responsive navigation  starts
$(document).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth <= 911) {
    $(".menu-wrap").addClass("mobileMenu");
  };
});
$(window).resize(function () {
  var windowWidth = $(window).width();
  if (windowWidth <= 911) {
    $(".menu-wrap").addClass("mobileMenu");
  } else {
    $(".menu-wrap").removeClass("mobileMenu");
  }
});
$(document).ready(function () {
  $("#navbar").on("click", function () {
    $(".mobileMenu").addClass("is-opened");
    $(".overlay").addClass("is-on");
  });
  $(".overlay").on("click", function () {
    $(this).removeClass("is-on");
    $(".mobileMenu").removeClass("is-opened");
  });
});
// responsive navigation ends
