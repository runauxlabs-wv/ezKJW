$(document).ready(function () {

    
    // 쿠키이슈 제거
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";




    $('.slide').slick({
        infinite: true,     // 무한반복
        speed: 500,         // 무한 반복 되는 속도 (autoplay)
        autoplay: true,     // 자동 스크롤 사용 여부
        autoplaySpeed: 2000, // 자동 스크롤 되는 속도
        prevArrow: $('.slick-Prev'),  // 좌 (이전) 화살표만 변경 (선택자 혹은 $(element))
        nextArrow: $('.slick-Next'),  // 우 (다음) 화살표만 변경 (선택자 혹은 $(element))
        arrow: true,        // 화살표(넘기기버튼) 여부 
        dots: true,         // 네비게이션버튼
        fade: true,         // fade 효과
        slidesToShow: 1,    // 한번에 보여지는 갯수
        slidesToScroll: 1,   // 한번에 넘겨지는 갯수
        cssEase: 'linear',   // css easing 모션 함수
        pauseOnHover: true,  // 마우스 호버 시 슬라이드 멈춤
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















    //vertical slick
    $('.news').slick({
        dots: false,           // 스크롤바 아래 점으로 페이지네이션 여부
        infinite: true,        // 무한 스와이프
        speed: 500,            // 슬라이드 속도
        slidesToShow: 1,       // 한 화면에 보여질 컨텐츠 개수
        arrows: false,         // 옆으로 이동하는 화살표 표시 여부
        vertical: true,        // 세로 방향 슬라이드
        verticalSwiping: true, // 세로방향 스와이프
        focusOnSelect: true,   // 선택한 요소에 focus여부(click), 하나의 슬라이드를 클릭하면 그 슬라이드로 이동함(focus)
        autoplay: true,        // 자동 슬라이드
        autoplaySpeed: 2000,   // 자동 슬라이드시, 한 슬라이드에 머무르는 시간
    });








    // modal창 띄우기

    var modal = document.querySelector('.modal');
    var btnOpenPopup = document.querySelector('.modalBt');
    var btnClosePopup = document.querySelector('.modalCloseBt');

    btnOpenPopup.addEventListener('click', function() {
        modal.classList.toggle('on');
        $("html, body").addClass("not_scroll");
    });

    btnClosePopup.addEventListener('click', function() {
        modal.classList.toggle('on');
        $("html, body").removeClass("not_scroll");
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.toggle('on');
        }
        $("html, body").removeClass("not_scroll");
    });

   

    // datepicker

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





    $('.datepicker').datepicker({
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







    // 예약시간
    $(".timepicker").click(function() {
        $(".timeSel").addClass('on');  
    });
    $(".schedule").click(function() {
        $(".timeSel").removeClass('on')   
    });



    //클릭한 값 넣기
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




//모바일-------------------------------------------------------------------------



});

