$(function () {
  var scrolling = false;
  $(window).scroll(function () {
    if (!scrolling) {
      var sd = $(window).scrollTop();
      if (sd > 240) {
        $("#backtotop").removeClass('pullback').addClass('pullTop');
        $("#header").removeClass('pullTop').addClass('static-top pullTop');
        $("#article").css({ 'margin-top': 220 });
      } else {
        $("#backtotop").addClass('pullback').removeClass('pullTop');
        $("#header").removeClass('static-top pullTop');
        $("#article").css({ 'margin-top': 0 });
      }
    }
  });
  setTimeout(function(){
    $(".header-bg").addClass("active");
  },1000);
  $('#backtotop').click(function () {
    scrolling = true;
    $('html, body').animate({
      scrollTop: 0
    }, 500, function () {
      scrolling = false;
      $('#backtotop').addClass('pullback').removeClass('pullTop');
      $("#header").removeClass('static-top pullTop');
      $("#article").css({ 'margin-top': 0 });
    });
  });
  var nav_toggle = true;
  $('.nav-toggle').click(function () {
    var nav = $('.static-top nav');
    if (nav_toggle) {
      nav.addClass('n-show');
    } else {
      nav.removeClass('n-show');
    }
    nav_toggle = !nav_toggle;
  });
  var items = document.querySelectorAll('section');
  show(0);
  function show(index) {
      if (index >= items.length) {
          return;
      }
      setTimeout(function() {
          items[index].classList.add('active');
          show(index + 1);
      }, 100);
  }
});