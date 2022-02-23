// window.onload = () => {   // ie에서는 화살표함수 X  (=>)
window.onload = function() {

    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });



    var header = $('header');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            header.addClass('on');
        } else {
            header.removeClass('on');
        }
    });



    var swiper1 = new Swiper(".sec01", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
            delay: 3000, // 1000 = 1초
            disableOnInteraction: false,
        },
    });








    //index 번호로  tab 만들기
    $('.CtabButton').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.CtabBox').eq($(this).index()).addClass('on').siblings().removeClass('on');
        coffeeTabSilde();
    });

    $('.EtabButton').click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.EtabBox').eq($(this).index()).addClass('on').siblings().removeClass('on');
    });









    coffeeTabSilde();

    function coffeeTabSilde() {
        var browser = navigator.userAgent;
        if (browser.match(/Trident/)) { //ie 에서만 적용
            new Swiper(".coffeeWrap", {
                navigation: {
                    nextEl: ".aa .swiper-button-next",
                    prevEl: ".aa .swiper-button-prev",
                },
                loop: true,
                observer: true,
                observeParents: true,
                //탭안의 스와이퍼 갱신
                // touchRatio: 0,
                simulateTouch: false, // 드래깅 X
                slidesPerView: 5,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },

                },

            });
        } else {
            new Swiper(".coffeeWrap", {
                navigation: {
                    nextEl: ".aa .swiper-button-next",
                    prevEl: ".aa .swiper-button-prev",
                },
                loop: true,
                observer: true,
                observeParents: true,
                //탭안의 스와이퍼 갱신
                // touchRatio: 0,                
                slidesPerView: 5,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
            });
        }
    };
    // coffeeTabSilde({simulateTouch: false,});


    // 모바일에서만 메뉴구현
    var iw = window.innerWidth;
    if (iw < 769) {

        // add/remove/toggleClass
        $(".Mmenubt").click(function() {
            $("nav").addClass("on");
        });
        $(".Mclosebt").click(function() {
            $("nav").removeClass("on");
        });






        // 2차 메뉴 열기
        $(".gnb > li > a ").click(function() {
            $(this).next().toggleClass("on");
            //this 다음 요소를 슬라이드토글
            $(".gnb > li > a ").not(this).next().removeClass("on");
            //this가 아니라면 다음 요소는 슬라이드업
            return false;
            //a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
        });





    }


}