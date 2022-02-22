window.onload = () => {
    // 쿠키이슈 제거
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";


    var lastWidth = $(window).width();
    $(window).resize(function() {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });




    // $('.slide').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true
    //   });


    // $('.slide').slick({
    // // slide: 'a',		//슬라이드 되어야 할 태그 ex) div, li 
    // infinite : true, 	//무한 반복 옵션	 
    // slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
    // slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    // speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    // arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    // dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    // autoplay : true,			// 자동 스크롤 사용 여부
    // autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    // pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    // vertical : false,		// 세로 방향 슬라이드 옵션
    // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    // nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    // dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    // draggable : true
    // });

    $('.slide').slick({
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slick-Prev'),
        nextArrow: $('.slick-Next'),
        arrow: true,
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        pauseOnHover: true,
        // customPaging: function (i) {
        //     return <div className="dot"></div>;
        //   },
        //   dotsClass: "slick-dots slick-thumb"
        // pagination: {
        //     el: ".swiper-pagination",
        //   },
        // dotsClass: 'bn-controller', // 사용자 css class ( 버튼들의 부모 엘리먼트 클래스를 가르킨다 )
        // customPaging: function (slide, i) {
        //     // console.log( slide.$slider[0] )
        //     //아래 마크업처럼 적용할 버튼들의 마크업을 대입하면 된다.

        //     // slick내부에서 슬라이드 개수 만큼 for문으로 생성 ( 슬라이드 개수 만큼 복제된다. )
        //     return '<div class="slide-banner">' +
        //         ' <div class="bn-item">' + (i + 1) + '</div>' +
        //         '</div>'
        // }




    });

    // 각 함수가 따로 실행되는 토글버튼메서드 제작
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
    // 적용, autoplay로 시작하므로 첫 클릭은 무조건 정지, 그 이후부턴 fuction 비교하여 토글링
    $('.controlBt').clickToggle(function() {
        $('.slide').slick('slickPause');
        $(this).html('play_arrow');
    }, function() {
        $('.slide').slick('slickPlay');
        $(this).html('pause');
    });














    // //vertical slick
    // $('.news').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     infinite: true,
    //     centerMode: true,
    //     vertical: true,
    //     focusOnSelect: true,
    //     verticalSwiping: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });


    //vertical slick
    $('.news').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // centerMode: true,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });








    // modal창 띄우기

    const modal = document.querySelector('.modal');
    const btnOpenPopup = document.querySelector('.modalBt');
    const btnClosePopup = document.querySelector('.modalCloseBt');

    btnOpenPopup.addEventListener('click', () => {
        modal.classList.toggle('on');
        $("html, body").addClass("not_scroll");
    });

    btnClosePopup.addEventListener('click', () => {
        modal.classList.toggle('on');
        $("html, body").removeClass("not_scroll");
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.toggle('on');
        }
        $("html, body").removeClass("not_scroll");
    });

    // window.addEventListener("keyup", (e) => {
    //     if (modal.style.display === "block" && e.key === "Escape") {
    //         modal.style.display = "none"
    //     }
    // })

    // document.addEventListener('keyup', function(e) {
    //     if (e.keyCode == 27) {
    //         modalClose();
    //     }
    // });

    // $(".modalBt").click(function() {
    //     $(".modal").addClass('on')
    //     $("html, body").addClass("not_scroll");
    // });
    // $(".modalCloseBt").click(function() {
    //     $(".modal").removeClass('on')
    //     $("html, body").removeClass("not_scroll");
    // });




    // datapicker

    var holidays = {
        "0101": {type: 0, title: "신정", year: ""},
        "0102": {type: 0, title: "", year: ""},
        "0301": {type: 0, title: "삼일절", year: ""},
        "0505": {type: 0, title: "어린이날", year: ""},
        "0606": {type: 0, title: "현충일", year: ""},
        "0815": {type: 0, title: "광복절", year: ""},
        "1003": {type: 0, title: "개천절", year: ""},
        "1009": {type: 0, title: "한글날", year: ""},
        "1225": {type: 0, title: "크리스마스", year: ""},
        "1229": {type: 0, title: "", year: ""},
        "1230": {type: 0, title: "", year: ""},
        "1231": {type: 0, title: "", year: ""},

        "0131": {type: 0, title: "설연휴", year: "2022"},
        "0201": {type: 0, title: "설연휴", year: "2022"},
        "0202": {type: 0, title: "설연휴", year: "2022"},
        "0508": {type: 0, title: "석가탄신일", year: "2022"},
        "0909": {type: 0, title: "추석연휴", year: "2022"},
        "0910": {type: 0, title: "추석연휴", year: "2022"},
        "0911": {type: 0, title: "추석연휴", year: "2022"},
        "0912": {type: 0, title: "대체휴일", year: "2022"},
        "1010": {type: 0, title: "대체휴일", year: "2022"},
        "0309": {type: 0, title: "선거일", year: "2022"},
        "0601": {type: 0, title: "선거일", year: "2022"}
    };





    $('.datapicker').datepicker({
        // showOtherMonths: true,
        // selectOtherMonths: true,
        dateFormat: 'yy-mm-dd',
        minDate: 0, // 오늘 날짜부터 선택
        changeMonth: false,
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        nextText: '다음 달',
        prevText: '이전 달',
        beforeShowDay: function(day) {
            var result;
            var holiday = holidays[$.datepicker.formatDate("mmdd", day)];
            var thisYear = $.datepicker.formatDate("yy", day);

            // exist holiday?
            if (holiday) {
                if (thisYear == holiday.year || holiday.year == "") {
                    result = [false, "date-holiday", holiday.title];
                }
            }

            if (!result) {
                switch (day.getDay()) {
                    case 1: // is monday?
                        result = [false, "date-sunday"];
                        break;

                    default:
                        result = [true, ""];
                        break;
                }
            }

            return result;
        }

    });




    // $('.timepicker').timepicker({
    //     timeFormat: 'hh:mm',
    //     interval: 30,
    //     minTime: '10',
    //     maxTime: '16:00',
    //     defaultTime: '9',
    //     startTime: '10:00',
    //     dynamic: false,
    //     dropdown: true,
    //     scrollbar: false
    // });




    // 예약시간
    $(".timepicker").click(function() {
        $(".timeSel").addClass('on')
    });
    $(".schedule").click(function() {
        $(".timeSel").removeClass('on')   
    });


    //  $('.modalBody').click(function() {
    //         $('.timeSel').removeClass('on')
    //     });


   




    $(".timeSel li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('input[name=time]').val($(this).html());
        $('.timeSel').removeClass('on')        
    });


    $('.modalBody').on('click', function(e){
        var $tgPoint = $(e.target);
        var $popCallBtn = $tgPoint.hasClass('.timepicker')
        // var $popArea = $tgPoint.hasClass('popup-box')
     
        // if ( !$popCallBtn && !$popArea ) {
            if ( !$popCallBtn) {
            $('.popup-box').removeClass('view');
        }
    });
    
    


    // $(document).click(function() {
    //     $(".timeSel").hide();
    // });
  
   
    //   $('.modalBody').click(function() {
    //     $('.timeSel').removeClass('on')
    // });

    // $(".timepicker").click(function() {
    //     $(".timeSel").toggle('on')
    // });



    // const timepicker = document.querySelector('.timepicker')
    // const timeSel = document.querySelector('.timeSel')

    // timepicker.click(function() {
    //     timeSel.toggle(

    //         function(){timeSel.addClass('.on')}, //클릭하면 show클래스 적용되서 보이기

    //         function(){timeSel.removeClass('.on')} //한 번 더 클릭하면 hide클래스가 숨기기

    //       );

    //     });







  
    // $('.modalBody').click(function(e){
    //     if( !$('.timepicker').has(e.target).length ) $('.timepicker').hide();
    // });



    // const timepicker = document.querySelector('.timepicker');

    // timepicker.addEventListener('click', (event) => {
    //     if (event.target === timepicker) {
    //         timepicker.classList.removeClass('on');
    //     }
    // });





    // $('.timeSel li').click(function(){
    //     var id_check = $(this).attr(".timepicker");
    // });

    // $(".timeSel li").click(function(){
    //     $(this).val();
    // });


    // $('.timepicker').on("click",".timeSel li",function(){
    //     var a = $(this).text();
    //     console.log(a);
    //     });









    // $('.timepicker').timepicker({
    //     timeFormat: 'HH:mm',
    //     interval: 30,
    //     minTime: '10',
    //     maxTime: '16:00',
    //     defaultTime: '11',
    //     startTime: '10:00',
    //     dynamic: false,
    //     dropdown: true,
    //     scrollbar: false
    // });


    // // function changewidth() {
  
    // //     // 1. 대상 element 선택
    // //     const element = document.getElementById('.ui-menu-item');
        
    // //     // 2. style 변경
    // //     element.style.width = '30%';
    // //   }


    //   document.getElementById('.ui-timepicker-standard .ui-menu-item').style="width:30%"








    // 연락처 자동 탭
    $('.input1').on('keyup', function() {
        if (this.value.length == 4) {
            $('.input2').focus()
        }
    });



    // 숫자만 입력
    $(".numberOnly").on("keyup", function(event) {
        if (event.which && (event.which > 47 && event.which < 58 || event.which > 95 && event.which < 106 || event.which == 8)) {
            return false;
        } else {
            // alert('숫자만 입력 가능합니다.');
            $(this).val($(this).val().replace(/[^0-9]/g, ""));
        }
    });

    // 한글만 입력
    $(".korean").keyup(function(event) {
        regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
        v = $(this).val();
        if (regexp.test(v)) {
            alert("한글만 입력 가능합니다.");
            $(this).val(v.replace(regexp, ''));
        }
    });



    $('.submitBt').click(function() {
        alert('이 페이지는 포트폴리오로\n실제 예약은 불가능합니다.')
    })







//모바일 메뉴 버튼
    $(".mMenuBt").click(function() {
        $("nav").addClass('on')
    });
    $(".mCloseBt").click(function() {
        $("nav").removeClass('on')   
    });


//모바일 메뉴 탭
    let iw = window.innerWidth;
    if (iw < 769) { // 모바일 사이즈부터

    $(".gnb li").click(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        return false; // .gnb a태그 X
    });

};



//mobile sns
    $(".mSns").on("hover click",function() {
        $(".mSns ul").toggleClass('on')
    });



};