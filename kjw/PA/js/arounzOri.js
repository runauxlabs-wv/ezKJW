// window.onload = () => {   // ie에서는 화살표함수 X  (=>)
window.onload = function() {

  var lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {
      location.reload();
      lastWidth = $(window).width();
      return false;
    }
  });



  var header = $('header');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      header.addClass('on');
    } else {
      header.removeClass('on');
    }
  });





  var swiper = new Swiper(".sec02", {
    pagination: {
      el: ".swiper-pagination",
    },
  });





  var iw = window.innerWidth;
  if (iw < 769) { // 모바일 사이즈부터

  // add/remove/toggleClass
  $(".Mmenubt").click(function () {
    $("nav").addClass("on");
  });
  $(".Mclosebt").click(function () {
    $("nav").removeClass("on");
  });






    // 2차 메뉴 열기
    $(".gnb > li > a ").click(function () {
      $(this).next().toggleClass("on");
      //this 다음 요소를 슬라이드토글
      $(".gnb > li > a ").not(this).next().removeClass("on");
      //this가 아니라면 다음 요소는 슬라이드업
      return false;
      //a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
    });

  };

}
