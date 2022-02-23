// window.onload = () => {   // ie에서는 화살표함수 X  (=>)
window.onload = function () {

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






    // var tabButtons = document.querySelectorAll('.tabButton'); // 탭버튼 선언
    // // 해당 클래스명을 가지고 있는 모든 dom을 유사배열로 가져온다. 진짜 배열이 아니어서 .forEach()같은 함수를 쓸 수 없다.
    // // for문은 사용가능하나(인터넷에 돌아다니는 탭 자료들은 for문으로 제작됨)
    // // .call()을 이용하여 .forEach()를 사용할 수 있다. Array.prototype.forEach.call()로 사용한다.

    // // Array.prototype.forEach.call(tabButtons, (eachButton) => { // 탭버튼에게 각각 적용한다 // ie에서는 화살표 함수 X
    // Array.prototype.forEach.call(tabButtons, function (eachButton) { // 탭버튼에게 각각 적용한다
    //     eachButton.addEventListener('click', function () { //각 버튼을 클릭하면

    //         var tabBoxs = document.querySelectorAll('.tabBox'); // 탭박스 선언
    //         var tabNum = this.getAttribute('data-num'); // 내가 누른 탭버튼에서 data-num 값 추출

    //         for (var i = 0; i < tabBoxs.length; i++) {
    //             tabBoxs[i].classList.remove("on");
    //             tabButtons[i].classList.remove("on");
    //         }
    //         tabBoxs[tabNum].classList.add("on"); // 내가 누른 탭버튼에서 data-num 값을 인덱스 번호/아이템 번호로 갖는 탭박스에 class on추가
    //         // tabBoxs.item(tabNum).classList.add("on");
    //         this.classList.add("on");
    //         // if (!eachButton.classList.contains('on')) {
    //         //     // .classList.contains 지정한 클래스가 있는지 확인한다.
    //         //     // 내가 누른 탭버튼에서 class on이 없으면 추가해라
    //         //     eachButton.classList.add("on");
    //         // }
    //         customizedEdu();
    //         designSilde();
    //         menuSilde();
    //         if (iw < 769) {
    //             CSslide();
    //         };
    //     });
    // });     //  ---------------------> .botton div.tabButton 에  data-num="0 , .... , data-num="6" 추가 필요




    // data-id 와 id로 탭 만들기
    $(".botton > div.tabButton").click(function () {
        $(this).addClass('on').siblings().removeClass('on'); //.asideBox > li 중 클릭한 것만 선택
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on'); //.asideBox > li의 데이터 아이디랑 같은 아이디 찾아주기
        customizedEdu();
        designSilde();
        menuSilde();
        if (iw < 769) {
            CSslide();
        };
    });




    function customizedEdu() {
        new Swiper(".customizedEdu", {
            navigation: {
                nextEl: ".aa .swiper-button-next",
                prevEl: ".aa .swiper-button-prev",
            },
            observer: true,
            observeParents: true,
            //탭안의 스와이퍼 갱신
            simulateTouch: false, // 드래깅 X
            slidesPerView: 4,
            spaceBetween: 20,
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },

            },

        });
    };
    customizedEdu();






    function designSilde() {
        if ($('html').hasClass('is-ie')) {  //ie 에서만 적용
            if ($('html').hasClass('ie11')) { //ie11 적용
                new Swiper(".designSilde", {
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        // draggable: true,
                        // hide: true,
                    },
                    observer: true,
                    observeParents: true,
                    //탭안의 스와이퍼 갱신
                });
            } else {  // ie11 제외 ie적용
                new Swiper(".designSilde", {
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                        // hide: true,
                    },
                    simulateTouch: false, // 드래깅 X
                });
            }
            
        } else {
            new Swiper(".designSilde", {
                scrollbar: {
                    el: ".swiper-scrollbar",
                    // draggable: true,
                    // hide: true,
                },
                observer: true,
                observeParents: true,
                //탭안의 스와이퍼 갱신
            });
        }
        
    };
    designSilde();





    function menuSilde() {
        new Swiper(".menuSilde", {
            navigation: {
                nextEl: ".Mm .swiper-button-next",
                prevEl: ".Mm .swiper-button-prev",
            },
            observer: true,
            observeParents: true,
            //탭안의 스와이퍼 갱신
            simulateTouch: false, // 드래깅 X
            slidesPerView: 3.2,
            spaceBetween: 28,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            },
        });
    };
    menuSilde();




    // 타 페이지에서 해시를 찾아 이동, 29anotherTab
    if (location.hash == "#lnb3_01") {
        $('#lnb3_01')
    } else if (location.hash == "#lnb3_02") {
        $('#lnb3_02, .consulting').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb3_03") {
        $('#lnb3_03, .customizedEducation').addClass('on').siblings().removeClass('on');
        customizedEdu();
    } else if (location.hash == "#lnb3_04") {
        $('#lnb3_04, .manage').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb3_05") {
        $('#lnb3_05, .design').addClass('on').siblings().removeClass('on');
        designSilde();
    } else if (location.hash == "#lnb3_06") {
        $('#lnb3_06, .menu').addClass('on').siblings().removeClass('on');
        menuSilde();
    } else if (location.hash == "#lnb3_07") {
        $('#lnb3_07, .CS').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb3_08") {
        $('#lnb3_08, .curriculum').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb3_09") {
        $('#lnb3_09')
    }


    // 현재 페이지 nav에서 현재페이지 2차메뉴 해시를 찾아 이동
    $(".gnb > li > ul > li > a").each(function () {
        $(this).click(function () {
            var thisHash = $(this).attr('href'); // 목적지 추출
            var thisHashTrim = thisHash.substr(thisHash.length - 8, 8); // 목적지에서 #포함 문자열만 추출
            // console.log(thisHashTrim);
            $(thisHashTrim).addClass('on').siblings().removeClass('on');
            $('#' + $(thisHashTrim).data('id')).addClass('on').siblings().removeClass('on'); // 그 id에 있는 데이터 아이디( data-id="Tab01", ...)로 아이디 찾아줌 ( id="Tab01")

            customizedEdu();
            designSilde();
            menuSilde();
            if (iw < 769) {
                CSslide();
            };
        });
    });





    var iw = window.innerWidth;
    if (iw < 769) {

       

        function CSslide() {
            new Swiper(".CSslide", {
                navigation: {
                    nextEl: ".Cc .swiper-button-next",
                    prevEl: ".Cc .swiper-button-prev",
                },
                observer: true,
                observeParents: true,
                //탭안의 스와이퍼 갱신
                simulateTouch: false, // 드래깅 X
                slidesPerView: 2,
                spaceBetween: 10,
            });
        };
    
        CSslide();


        //클릭했을 때 nav 제거
        $(".gnb li").click(function () {
            $("nav").removeClass('on');
        });


    };

};