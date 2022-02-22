window.onload = () => {

    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });







    $("nav").mouseenter(function () {
        $(".lnb").addClass('on');
    }).mouseleave(function () {
        $(".lnb").removeClass('on');
    });

    $(".lnb li").click(function () {
        $(".lnb").removeClass('on');
    });

    

    // 전체메뉴 tab (id)
    $(".asideBox > li").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
        $(".inputText").text($(this).find('.changeText').text()); // 선택한 text로 변경
        //tab의 none/block 변화 시 슬라이드 포지션 오류 잡기(첫번째 축하메시지영상)
        // $('.message').slick('setPosition');
    });


    //nav 클릭 (현재 페이지에서)
    $("#gnb01 > li").click(function () {
        $("#" + $(this).data("id")).addClass('on').siblings().removeClass('on');
        $("#" + $("#" + $(this).data("id")).data('id')).addClass('on').siblings().removeClass('on');
        $(".inputText").text($("#" + $(this).data("id")).find('.changeText').text()); // 선택한 text로 변경
        return false;
    });



    //aside 클릭 토글
    $(".asideBox > li > .Tab").click(function () {
        $(this).next().stop().slideToggle(300);
        // this 다음 요소를 슬라이드토글3
        $(".asideBox > li > .Tab").not(this).next().stop().slideUp(300);
        // this가 아니라면 다음 요소는 슬라이드업
        $(this).find('.material').text(function (e, text) {
            return text === 'expand_less' ? 'expand_more' : 'expand_less'
        });
    });








    //개인관람신청 inside 
    $("#lnb1_02 .inside > li").add(".privateBook h2").add("#gnb01 ul > li").click(function () {
        var tabindex = $(this).index();
        $("#lnb1_02 .inside > li, .privateBook h2, .privateBook .private").removeClass('on');
        $("#lnb1_02 .inside > li").eq(tabindex).addClass('on');
        $(".privateBook h2").eq(tabindex).addClass('on');
        $(".privateBook .private").eq(tabindex).addClass('on');
    });

  







    //nav li 클릭했을 때 inside 열림/닫힘
    $("#gnb01 > li").click(function () {
        var tabindex = $(this).index();
        $('.asideBox > li').eq(tabindex).find('.inside').slideDown(300);
        $('.asideBox > li').eq(tabindex).siblings().find('.inside').slideUp(300);
    });




    //nav
    // 타 페이지에서 해시를 찾아 이동
    if (location.hash == "#lnb1_01") {
        $('#lnb1_01, #Tab01').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb1_02") {
        $('#lnb1_02, #Tab02').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    } else if (location.hash == "#lnb1_03") {
        $('#lnb1_03, #Tab03').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    } else if (location.hash == "#lnb1_04") {
        $('#lnb1_04, #Tab04').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    } else if (location.hash == "#lnb1_05") {
        $('#lnb1_05, #Tab05').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    } else if (location.hash == "#lnb1_06") {
        $('#lnb1_06, #Tab06').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    } else if (location.hash == "#lnb1_07") {
        $('#lnb1_07, #Tab07').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    } else if (location.hash == "#lnb1_08") {
        $('#lnb1_08, #Tab08').addClass('on').siblings().removeClass('on');
        $('.inside').slideUp(300);
    }






      //해시를 찾아 이동
      if (location.hash == "#lnb1_02_A") {
        $('#lnb1_02_A, .privateBook h2:nth-child(1), .privateBook .private:nth-child(1)').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb1_02_B") {
        $('#lnb1_02_B, .privateBook h2:nth-child(2), .privateBook .private:nth-child(2)').addClass('on').siblings().removeClass('on');
    } else if (location.hash == "#lnb1_03_A") {
        $('#lnb1_03_A, .groupBook h2, .privateBook .group').addClass('on').siblings().removeClass('on');
    }




// datapicker

var holidays = {
    "0101": {type: 0, title: "신정", year: ""},
    "0102": {type: 0, title: "휴일", year: ""},
    "0301": {type: 0, title: "삼일절", year: ""},
    "0505": {type: 0, title: "어린이날", year: ""},
    "0606": {type: 0, title: "현충일", year: ""},
    "0815": {type: 0, title: "광복절", year: ""},
    "1003": {type: 0, title: "개천절", year: ""},
    "1009": {type: 0, title: "한글날", year: ""},
    "1225": {type: 0, title: "크리스마스", year: ""},
    "1229": {type: 0, title: "휴일", year: ""},
    "1230": {type: 0, title: "휴일", year: ""},
    "1231": {type: 0, title: "휴일", year: ""},

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



//본인인증
$('.child').click(function() {
    $('.legal').addClass('on');
});
$('.adult').click(function() {
    $('.legal').removeClass('on');
});



$('.certificationBt').click(function() {
    alert('이 페이지는 포트폴리오로\n실제 인증은 불가능합니다.');
});













    //FAQ 클릭
    $(".FAQ > ul > li:first-child").click(function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
        // this 다음 요소를 토글
        $(".FAQ > ul > li:first-child").not(this).removeClass('on');
        $(".FAQ > ul > li:first-child").not(this).next().removeClass('on');
        // this가 아니라면 다음 요소는 remove
    });



    //자유게시판
    $('.noticeBoard > li > p').click(function() {
        alert('비공개 입니다.\n(포트폴리오 입니다.)');
    });






    










    //모바일-------------------------------------------------------------------------


    //모바일 메뉴 버튼
    $(".mMenuBt").click(function () {
        $("nav").addClass('on');
    });
    $(".mCloseBt").click(function () {
        $("nav").removeClass('on');
    });


    //모바일 메뉴 탭
    let iw = window.innerWidth;
    if (iw < 769) { // 모바일 사이즈부터

        $(".gnb li").click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on');
            return false; // .gnb a태그 X

        });


        //클릭했을 때 nav 제거
        $(".lnb li").click(function () {
            $("nav").removeClass('on');
        });


    };



    //mobile sns
    $(".mSns").on("hover click", function () {
        $(".mSns ul").toggleClass('on');
    });











};