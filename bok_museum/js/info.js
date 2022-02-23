$(document).ready(function () {


    // nav mouseenter/mouseleave  ≒ hover
    $("nav").mouseenter(function () {
        $(".lnb").addClass('on');
    }).mouseleave(function () {
        $(".lnb").removeClass('on');
    });


    // .lnb li 클릭하면, .lnb 닫힘
    $(".lnb li").click(function () {
        $(".lnb").removeClass('on');
    });

    

    // 전체메뉴 tab (id)
    $(".asideBox > li").click(function () {
        $(this).addClass('on').siblings().removeClass('on'); //.asideBox > li 중 클릭한 것만 선택
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on'); //.asideBox > li의 데이터 아이디랑 같은 아이디 찾아주기
        $(".inputText").text($(this).find('.changeText').text()); // 선택한 text로 변경
    });


    // //nav 클릭 (현재 페이지에서)
    // $("#gnb01 > li").click(function () {
    //     $("#" + $(this).data("id")).addClass('on').siblings().removeClass('on');
    //     $("#" + $("#" + $(this).data("id")).data('id')).addClass('on').siblings().removeClass('on');
    //     $(".inputText").text($("#" + $(this).data("id")).find('.changeText').text()); // 선택한 text로 변경
    //     return false;
    // });



    //aside 클릭 토글
    $(".asideBox > li > .Tab").click(function () {
        $(this).next().stop().slideToggle(300);
        // this 다음 요소를 슬라이드토글 (다음요소 -> .inside)
        $(".asideBox > li > .Tab").not(this).next().stop().slideUp(300);
        // this가 아니라면 다음 요소는 슬라이드업
        $(this).find('.material').text(function (e, text) {
            return text === 'expand_less' ? 'expand_more' : 'expand_less'
        }); //클릭하면 this의 자식요소(.find)인 .material 텍스트 변환
        $("#lnb1_02_A, .privateBook h2:first-child, .pri").addClass('on').siblings().removeClass('on');
         // 개인관람신청(.Tab)의 클릭했을 땐 항상 첫번째(inside 안에 있는 개인관람신청)로 나오도록
    });








    //개인관람신청 inside (인덱스번호)
    $("#lnb1_02 .inside > li").add(".privateBook h2").add("#gnb01 ul > li > a").click(function () {
         //3차 메뉴 (사이드 메뉴바에 있는 3차메뉴(inside), 탭, nav에 있는 3차메뉴) 클릭
        var tabindex = $(this).index(); // tabindex는 ↑의 인덱스 번호를 선언해줌
        $("#lnb1_02 .inside > li, .privateBook h2, .privateBook .private").removeClass('on'); //전부 다 on 제거
        $("#lnb1_02 .inside > li").eq(tabindex).addClass('on');
        $(".privateBook h2").eq(tabindex).addClass('on');
        $(".privateBook .private").eq(tabindex).addClass('on'); // 인덱스 번호 맞춰서 on 추가해줌
    });

    //nav a(2차 메뉴) 클릭했을 때 inside 열림/닫힘 (인덱스번호)
    $("#gnb01 > li > a").click(function () {
        var tabindex = $(this).index();
        $('.asideBox > li').eq(tabindex).find('.inside').slideDown(300); //사이드메뉴의 자식 .inside 슬라이드 다운
        $('.asideBox > li').eq(tabindex).siblings().find('.inside').slideUp(300); //사이드메뉴의 형제들은 .inside 슬라이드 업
    });

    //nav(3차 메뉴) 클릭했을 때 (인덱스번호)
    $('#gnb01 > li > ul > li').click(function() {
        var tabindex = $(this).index();
        $('.inside').slideDown(300); // .inside 열림
        $(".privateBook h2").eq(tabindex).addClass('on'); // 클릭한 3차 메뉴에 맞는 탭에 on 추가 
        $(".privateBook .private").eq(tabindex).addClass('on'); // 클릭한 3차 메뉴에 맞는 내용에 on 추가
    });




    //nav
    // 타 페이지에서 해시를 찾아 이동
    if (location.hash) { // 만약 location.hash 라면
        $('.inside').slideUp(300);
        $('.inside li, .privateBook h2, .private, .content > div').removeClass('on'); // 전부 on 끄고 시작
        if (location.hash == "#lnb1_01") {
            $('#lnb1_01, #Tab01').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb1_02_A") {
            $('#lnb1_02, #lnb1_02_A, #Tab02, .pri').addClass('on').siblings().removeClass('on');
            $('#lnb1_02 .inside').slideDown(300);
            $('.privateBook h2').eq(0).addClass('on');
        } else if (location.hash == "#lnb1_02_B") {
            $('#lnb1_02, #lnb1_02_B, #Tab02, .cancle').addClass('on').siblings().removeClass('on');
            $('#lnb1_02 .inside').slideDown(300);
            $('.privateBook h2').eq(1).addClass('on');
        } else if (location.hash == "#lnb1_03") {
            $('#lnb1_03, #Tab03').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb1_04") {
            $('#lnb1_04, #Tab04').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb1_05") {
            $('#lnb1_05, #Tab05').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb1_06") {
            $('#lnb1_06, #Tab06').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb1_07") {
            $('#lnb1_07, #Tab07').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb1_08") {
            $('#lnb1_08, #Tab08').addClass('on').siblings().removeClass('on');
        }
    }
    
    // 현재 페이지 nav에서 현재페이지 2차메뉴 해시를 찾아 이동
    $(".lnb .inner > ul > li > a").each(function() {
        $(this).click(function() {
            var thisHash = $(this).attr('href'); // 목적지 추출
            var thisHashTrim = thisHash.substr(thisHash.length - 8, 8); // 목적지에서 #포함 문자열만 추출
            // console.log(thisHashTrim);
            $(thisHashTrim).addClass('on').siblings().removeClass('on'); // 추출한 id에 on 추가
            $('#'+$(thisHashTrim).data('id')).addClass('on').siblings().removeClass('on');
        });
    });
    // 현재 페이지 nav에서 현재페이지 3차메뉴 해시를 찾아 이동
    $(".lnb .inner ul ul > li > a").each(function() {
        $(this).click(function() {
            var thisHash = $(this).attr('href'); // 목적지 추출
            var thisHashTrim10 = thisHash.substr(thisHash.length - 10, 10); // 목적지에서 #포함 문자열만 추출, 10자
            var thisHashTrim8 = thisHash.substr(thisHash.length - 10, 8); // 목적지에서 #포함 문자열만 추출, 8자, 10자아이디의 부모
            // console.log(thisHashTrim10);
            // console.log(thisHashTrim8);

            $(thisHashTrim8).add(thisHashTrim10).addClass('on').siblings().removeClass('on');

            var contentTabBox = '#' + $(thisHashTrim8).data('id');
            $(contentTabBox).addClass('on').siblings().removeClass('on');
            $('.inside li, .privateBook h2, .private').removeClass('on');
            var i = $(this).parent().index();
            $('.inside li, .privateBook h2, .private').eq(i).addClass('on');
            // if($(thisHashTrim8).find('.inside')){
            //     $(this).slideDown(300);
            // }
        });
    });






      




// datepicker

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

    var iw = window.innerWidth;
    if (iw < 769) { // 모바일 사이즈부터

        //클릭했을 때 nav 제거
        $(".lnb li").click(function() {
            $("nav").removeClass('on');
        });


    };





});





