'use strict';

angular.module('projectsApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    let wow = null;
    let progressBar = null;
    let layout = null;
    $timeout(function () {
      wow = MyWow();
      wow.init();
      progressBar = MyProgressBar();
      progressBar.init();
      layout = MyLayout();
      layout.init();
      $('.parallax-window').parallax({imageSrc: 'assets/images/1920x1080/01.jpg'});


      ///////////////////////////////////////////////////////////////
      // Back to top

      // browser window scroll (in pixels) after which the "back to top" link is shown
      var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
      //grab the "back to top" link
        $back_to_top = $('.js-back-to-top');

      //hide or show the "back to top" link
      $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
        if( $(this).scrollTop() > offset_opacity ) {
          $back_to_top.addClass('back-to-top-fade-out');
        }
      });

      //smooth scroll to top
      $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
          }, scroll_top_duration
        );
      });

      // Back to top
      ///////////////////////////////////////////////////////////////

    }, 100);
  });
