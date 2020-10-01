$(function() {
  $('#lottie').fadeOut(0);
  $('#lottie').delay(11000).fadeIn(0);
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/image/data.json'
  });

  $('#planet').fadeOut(0);
  $('#planet').delay(21000).fadeIn(1200);
  lottie.loadAnimation({
    container: document.getElementById('planet'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './assets/image/planet.json'
  });
});

