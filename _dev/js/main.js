import 'core-js/stable';
import 'regenerator-runtime/runtime';

$(function() {
  new Vivus('vivus-welcome', {
    type: 'oneByOne',
    duration: 400,
    forceRender: false ,
    animTimingFunction: Vivus.EASE,
    file: './assets/image/welcome-to-training.svg'
  });

  new Vivus('vivus-rocket', {
    delay: 600,
    type: 'oneByOne',
    duration: 800,
    forceRender: false ,
    animTimingFunction: Vivus.EASE_OUT,
    file: './assets/image/rocket_animated.svg'
  });

  $('[data-js=main]').fadeOut(0);
  $('[data-js=main]').delay(28000).fadeIn(1000);

  // loading();
  // const loading = function() {
  //   const $isLoading = $('[data-js=is-loading]');
  //   const $loading = $('[data-js=loading]');
  //   const toggleClass = 'hide';
  //   const $window = $(window);

  //   $isLoading.removeClass(toggleClass);
  //   $loading.removeClass(toggleClass);

  //   $window.on('load', stopload);

  //   setTimeout(stopload, 300);

  //   function stopload() {
  //     $isLoading.delay(21000).fadeOut(800);
  //     $loading.delay(21000).fadeOut(300);
  //   }
  // };
});