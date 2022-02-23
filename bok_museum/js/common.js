window.onload = function() {

    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });






    //모바일-------------------------------------------------------------------------
    var iw = window.innerWidth;
    if (iw < 769) { // 모바일 사이즈부터

        //모바일 메뉴 버튼
        $(".mMenuBt").click(function () {
            $("nav").addClass('on')
        });
        $(".mCloseBt").click(function () {
            $("nav").removeClass('on')
        });

        //모바일 메뉴 탭
        $(".gnb li").click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
            return false; // .gnb a태그 X
        });

        //mobile sns
        $(".mSns").on("hover click", function () {
            $(".mSns ul").toggleClass('on')
        });

    };

};