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





    // let CtabButtons = document.querySelectorAll('.CtabButton'); // 탭버튼 선언
    // // 해당 클래스명을 가지고 있는 모든 dom을 유사배열로 가져온다. 진짜 배열이 아니어서 .forEach()같은 함수를 쓸 수 없다.
    // // for문은 사용가능하나(인터넷에 돌아다니는 탭 자료들은 for문으로 제작됨)
    // // .call()을 이용하여 .forEach()를 사용할 수 있다. Array.prototype.forEach.call()로 사용한다.

    // Array.prototype.forEach.call(CtabButtons, (CeachButton) => { // 탭버튼에게 각각 적용한다
    //     CeachButton.addEventListener('click', function() { //각 버튼을 클릭하면

    //         let CtabBoxs = document.querySelectorAll('.CtabBox'); // 탭박스 선언
    //         let CtabNum = this.getAttribute('data-num'); // 내가 누른 탭버튼에서 data-num 값 추출

    //         for (var i = 0; i < CtabBoxs.length; i++) {
    //             CtabBoxs[i].classList.remove("on");
    //             CtabButtons[i].classList.remove("on");
    //         }
    //         CtabBoxs[CtabNum].classList.add("on"); // 내가 누른 탭버튼에서 data-num 값을 인덱스 번호/아이템 번호로 갖는 탭박스에 class on추가
    //         // tabBoxs.item(tabNum).classList.add("on"); 
    //         this.classList.add("on");
    //         // if (!eachButton.classList.contains('on')) {
    //         //     // .classList.contains 지정한 클래스가 있는지 확인한다.
    //         //     // 내가 누른 탭버튼에서 class on이 없으면 추가해라
    //         //     eachButton.classList.add("on");
    //         // }
    //     })
    // })






    // let EtabButtons = document.querySelectorAll('.EtabButton'); // 탭버튼 선언
    // // 해당 클래스명을 가지고 있는 모든 dom을 유사배열로 가져온다. 진짜 배열이 아니어서 .forEach()같은 함수를 쓸 수 없다.
    // // for문은 사용가능하나(인터넷에 돌아다니는 탭 자료들은 for문으로 제작됨)
    // // .call()을 이용하여 .forEach()를 사용할 수 있다. Array.prototype.forEach.call()로 사용한다.

    // Array.prototype.forEach.call(EtabButtons, (EeachButton) => { // 탭버튼에게 각각 적용한다
    //     EeachButton.addEventListener('click', function() { //각 버튼을 클릭하면

    //         let EtabBoxs = document.querySelectorAll('.EtabBox'); // 탭박스 선언
    //         let EtabNum = this.getAttribute('data-num'); // 내가 누른 탭버튼에서 data-num 값 추출

    //         for (var i = 0; i < EtabBoxs.length; i++) {
    //             EtabBoxs[i].classList.remove("on");
    //             EtabButtons[i].classList.remove("on");
    //         }
    //         EtabBoxs[EtabNum].classList.add("on"); // 내가 누른 탭버튼에서 data-num 값을 인덱스 번호/아이템 번호로 갖는 탭박스에 class on추가
    //         // tabBoxs.item(tabNum).classList.add("on");
    //         this.classList.add("on");
    //         // if (!eachButton.classList.contains('on')) {
    //         //     // .classList.contains 지정한 클래스가 있는지 확인한다.
    //         //     // 내가 누른 탭버튼에서 class on이 없으면 추가해라
    //         //     eachButton.classList.add("on");
    //         // }
    //     })
    // })






    // let tabButtons = document.querySelectorAll('.tabButton'); // 탭버튼 선언
    //     // 해당 클래스명을 가지고 있는 모든 dom을 유사배열로 가져온다. 진짜 배열이 아니어서 .forEach()같은 함수를 쓸 수 없다.
    //     // for문은 사용가능하나(인터넷에 돌아다니는 탭 자료들은 for문으로 제작됨)
    //     // .call()을 이용하여 .forEach()를 사용할 수 있다. Array.prototype.forEach.call()로 사용한다.
    //     Array.from(tabButtons).forEach((eachButton, index) => {
    //         eachButton.addEventListener('click', function() {
    //             let tabBoxs = document.querySelectorAll('.tabBox'); // 탭박스 선언
    //             for (var i = 0; i < tabBoxs.length; i++) {
    //                 tabBoxs[i].classList.remove("on");
    //                 tabButtons[i].classList.remove("on");
    //                 // 모든 버튼과 박스에서 on제거
    //             }
    //             tabBoxs[index].classList.add("on");
    //             // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
    //             this.classList.add("on");
    //         })
    //     })






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
        if (browser.match(/Trident/)) {
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
                simulateTouch: false,
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