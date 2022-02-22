$(document).ready(function () {


    // nav mouseenter/mouseleave  ≒ hover
    $("nav").mouseenter(function() {
        $(".lnb").addClass('on');
    }).mouseleave(function() {
        $(".lnb").removeClass('on');
    });


    // .lnb li 클릭하면, .lnb 닫힘
    $(".lnb li").click(function() {
        $(".lnb").removeClass('on');
    });








    // 전체메뉴 tab (id)
    $(".asideBox > li").click(function() {
        $(this).addClass('on').siblings().removeClass('on'); //.asideBox > li 중 클릭한 것만 선택
        $("#" + $(this).data('id')).addClass('on').siblings().removeClass('on'); //.asideBox > li의 데이터 아이디랑 같은 아이디 찾아주기
        $(".inputText").text($(this).find('.changeText').text()); // 선택한 text로 변경
        
        //tab의 none/block 변화 시 슬라이드 포지션 오류 잡기(첫번째 축하메시지영상)
        $('.message').slick('setPosition');
    });


    // //nav 클릭 (현재 페이지에서)
    // $("#gnb06 > li > a").click(function() {
    //     $("#" + $(this).data("id")).addClass('on').siblings().removeClass('on');
    //     $("#" + $("#" + $(this).data("id")).data('id')).addClass('on').siblings().removeClass('on');
    //     $(".inputText").text($("#" + $(this).data("id")).find('.changeText').text()); // 선택한 text로 변경
    //     $('.message').slick('setPosition');
    //     return false;
    // });



    //aside 클릭 토글
    $(".asideBox > li > .Tab").click(function() {
        $(this).next().stop().slideToggle(300);
        // this 다음 요소를 슬라이드토글 (다음요소 -> .inside)
        $(".asideBox > li > .Tab").not(this).next().stop().slideUp(300);
        // this가 아니라면 다음 요소는 슬라이드업
        $(this).find('.material').text(function(e, text) {
            return text === 'expand_more' ? 'expand_less' : 'expand_more'
        }); //클릭하면 this의 자식요소인 .material 텍스트 변환
         $("#lnb6_01_A, .Box20th h2:first-child, .massageWrap").addClass('on').siblings().removeClass('on');
    });





    // 화폐박물관 20주년 tab과 aside (인덱스번호)
    $(".inside > li").add(".Box20th h2").click(function() {
        var tabindex = $(this).index();
        $(".inside > li, .Box20th h2, .Box20th .Tab20th").removeClass('on');
        $(".inside > li").eq(tabindex).addClass('on');
        $(".Box20th h2").eq(tabindex).addClass('on');
        $(".Box20th .Tab20th").eq(tabindex).addClass('on');
        //tab의 none/block 변화 시 슬라이드 포지션 오류 잡기
        $('.specialEvent01, .specialEvent02, .message').slick('setPosition');
    });


    //nav a(2차 메뉴) 클릭했을 때 inside 열림/닫힘
    $("#gnb06 > li > a").click(function () {
        var tabindex = $(this).index();
        $('.asideBox > li').eq(tabindex-1).siblings().find('.inside').slideUp(300);
    });

    //nav(3차 메뉴) 클릭했을 때
    $('#gnb06 > li > ul > li').click(function() {
        var tabindex = $(this).index();
        $('.inside').slideDown(300);
        $(".Box20th h2").eq(tabindex).addClass('on');
        $(".Box20th .Tab20th").eq(tabindex).addClass('on');
        //tab의 none/block 변화 시 슬라이드 포지션 오류 잡기
        $('.specialEvent01, .specialEvent02, .message').slick('setPosition');
    });




    // nav
    // 타 페이지에서 해시를 찾아 이동

    if (location.hash) {
        $('.inside').slideUp(300);
        $('.inside li, .Box20th h2, .Tab20th').removeClass('on');
        //tab의 none/block 변화 시 슬라이드 포지션 오류 잡기
        // $('.specialEvent01, .specialEvent02, .message').slick('setPosition');
        if (location.hash == "#lnb6_01_A") {
            $('#lnb6_01_A, #Tab01, .massageWrap').addClass('on');
            $('#lnb6_01 .inside').slideDown(300);
            $('.Box20th h2').eq(0).addClass('on');
        } else if (location.hash == "#lnb6_01_B") {
            $('#lnb6_01_B, #Tab01, .VR20th').addClass('on');
            $('#lnb6_01 .inside').slideDown(300);
            $('.Box20th h2').eq(1).addClass('on');
        } else if (location.hash == "#lnb6_01_C") {
            $('#lnb6_01_C, #Tab01, .specialEvent').addClass('on');
            $('#lnb6_01 .inside').slideDown(300);
            $('.Box20th h2').eq(2).addClass('on');
        } else if (location.hash == "#lnb6_01_D") {
            $('#lnb6_01_D, #Tab01, .video20th').addClass('on');
            $('#lnb6_01 .inside').slideDown(300);
            $('.Box20th h2').eq(3).addClass('on');
        } else if (location.hash == "#lnb6_02") {
            $('#lnb6_02, #Tab02').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb6_03") {
            $('#lnb6_03, #Tab03').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb6_04") {
            $('#lnb6_04, #Tab04').addClass('on').siblings().removeClass('on');
        } else if (location.hash == "#lnb6_05") {
            $('#lnb6_05, #Tab05').addClass('on').siblings().removeClass('on');
        }
    }


    // 현재 페이지 nav에서 현재페이지 2차메뉴 해시를 찾아 이동
    $(".lnb .inner > ul > li > a").each(function() {
        $(this).click(function() {
            var thisHash = $(this).attr('href'); // 목적지 추출
            var thisHashTrim = thisHash.substr(thisHash.length - 8, 8); // 목적지에서 #포함 문자열만 추출 ( #lnb6_01, ...)
            // console.log(thisHashTrim);
            $(thisHashTrim).addClass('on').siblings().removeClass('on'); // 추출 된 id 찾아서 on 추가, 그 형제들 on 제거 ( id="lnb6_01", ...)
            $('#' + $(thisHashTrim).data('id')).addClass('on').siblings().removeClass('on'); // 그 id에 있는 데이터 아이디( data-id="Tab01", ...)로 아이디 찾아줌 ( id="Tab01")
        });
    });
    // 현재 페이지 nav에서 현재페이지 3차메뉴 해시를 찾아 이동
    $(".lnb .inner ul ul > li > a").each(function() {
        $(this).click(function() {
            var thisHash = $(this).attr('href'); // 목적지 추출
            var thisHashTrim10 = thisHash.substr(thisHash.length - 10, 10); // 목적지에서 #포함 문자열만 추출, 10자 ( #lnb6_01_A, ...)
            var thisHashTrim8 = thisHash.substr(thisHash.length - 10, 8); // 목적지에서 #포함 문자열만 추출, 8자, 10자아이디의 부모 ( #lnb6_01 )
            // console.log(thisHashTrim10);
            // console.log(thisHashTrim8);

            $(thisHashTrim8).add(thisHashTrim10).addClass('on').siblings().removeClass('on');

            var contentTabBox = '#' + $(thisHashTrim8).data('id'); // '#lnb6_01'의 데이터 아이디( data-id="Tab01")로 아이디 찾아줌 ( id="Tab01")
            $(contentTabBox).addClass('on').siblings().removeClass('on'); // id="Tab01"에 on 추가, 형제들은 on 제거
            $('.inside li, .Box20th h2, .Tab20th').removeClass('on'); // 전부 끄고 시작
            var i = $(this).parent().index(); // this의 부모 인덱스 추출
            $('.inside li, .Box20th h2, .Tab20th').eq(i).addClass('on'); // 인덱스에 맞춰서 on 추가
        });
    });





  



    //20주년 축하메시지 슬라이드
    $('.message').slick({
        // slidesToShow: 1,      // 한 화면에 보여질 컨텐츠 개수
        // slidesToScroll: 1,    // 스크롤 한번에 움직일 컨텐츠 개수
        prevArrow: $('.massageWrap .prev'), // 좌 (이전) 화살표만 변경 (선택자 혹은 $(element))
        nextArrow: $('.massageWrap .next'), // 우 (다음) 화살표만 변경 (선택자 혹은 $(element))
        // cssEase: 'linear',    // css easing 모션 함수
        infinite: true,       // 무한 스와이프
        
    });



    //특별기획전 행사 이미지 삽입 & 슬라이드
    var specialEvent01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var photo = "";
    $.each(specialEvent01, function(idx, i){
        // photo += `<div class="img${i}"></div>`;
        photo += "<div class=img"+ i +"></div>";
    });
    $('.specialEvent01').append(photo);

    //슬라이드
    $('.specialEvent01').slick({
        slidesToShow: 1,      // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,    // 스크롤 한번에 움직일 컨텐츠 개수
        dots: true,           // 스크롤바 아래 점으로 페이지네이션 여부
        infinite: true,       // 무한 스와이프
        fade: true,           // fade 효과
        cssEase: 'linear',    // css easing 모션 함수
        prevArrow: $('.special .prev'),  // 좌 (이전) 화살표만 변경 (선택자 혹은 $(element))
        nextArrow: $('.special .next'),  // 우 (다음) 화살표만 변경 (선택자 혹은 $(element))
        
    });



    //특별기획전 행사 이미지 삽입 & 슬라이드
    var specialEvent02 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var photo = "";
    $.each(specialEvent02, function(idx, i){
    // for (var i of specialEvent02) {
        // photo += `<div class="img${i}"></div>`;
        photo += "<div class=img"+ i +"></div>";
    });
    $('.specialEvent02').append(photo);

    //슬라이드
    $('.specialEvent02').slick({
        slidesToShow: 1,      // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1,    // 스크롤 한번에 움직일 컨텐츠 개수
        dots: true,           // 스크롤바 아래 점으로 페이지네이션 여부
        infinite: true,       // 무한 스와이프
        fade: true,           // fade 효과
        cssEase: 'linear',    // css easing 모션 함수
        nextArrow: $('.event .next'),  // 좌 (이전) 화살표만 변경 (선택자 혹은 $(element))
        prevArrow: $('.event .prev'),  // 우 (다음) 화살표만 변경 (선택자 혹은 $(element))
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





