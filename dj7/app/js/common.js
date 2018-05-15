$(function() {

   $('#my-menu').mmenu({
      extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
      navbar: {
         title: '<img src="../app/img/logo-1.svg">'
      },
      offCanvas: {
         position: 'right'
      }
   });


   var api = $('#my-menu').data('mmenu');

   api.bind('open', function() {

      $('.hamburger').addClass('is-active');

   });

   api.bind('close', function() {

      $('.hamburger').removeClass('is-active');

   });


   $('.owl-carousel-service h3').each(function() {

      $(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));

   });


   $('.owl-carousel').owlCarousel({

      loop: false,
      nav: true,
      smartSpeed: 700,
      navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
      responsiveClass: true,
      responsive: {
         0: {
            items: 1
         },
         800: {
            items: 2
         },
         1100: {
            items: 3
         }
      }

   });


   function carouselService() {

      $('.owl-carousel-item').each(function() {

         var hService = $(this).find('.owl-carousel-service').outerHeight();

         $(this).find('.owl-carousel-img').css('min-height', hService);

      });

   }

   carouselService();


   $('.owl-carousel-item').equalHeights();



});