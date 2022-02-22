$(document).ready(function() {
    $('.work .inner, .about .inner, .contact .inner').hide();
    
    var menu = ['MAIN', 'ABOUT', 'PROJECT01', 'PROJECT02', 'CONTACT']


    var swiper = new Swiper(".fullswiper", {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        simulateTouch: false,
        eventsTarget: 'fullswiper',
        on: {
            slideChangeTransitionStart: function() {
                $(".about, .work, .contact").removeClass("on");
                if(this.realIndex == 1) {
                    $('.work .inner, .contact .inner').hide();
                } else if(this.realIndex == 2) {
                    $('.work02 .inner, .about .inner, .contact .inner').hide();
                } else if(this.realIndex == 3) {
                    $('.work01 .inner, .about .inner, .contact .inner').hide();
                } else if(this.realIndex == 4) {
                    $('.work .inner, .about .inner').hide();
                }
            },
            slideChangeTransitionEnd: function() {
                $(".about, .work, .contact").addClass("on");
                if(this.realIndex == 1) {
                    $('.about .inner').fadeIn(100);
                } else if(this.realIndex == 2) {
                    $('.work01 .inner').fadeIn(100);
                } else if(this.realIndex == 3) {
                    $('.work02 .inner').fadeIn(100);
                } else if(this.realIndex == 4) {
                    $('.contact .inner').fadeIn(100);
                }
            },
        },
    });





    var browsing = [1, 2, 3, 4, 5];

    var photo = "";
    $.each(browsing, function (idx, i) {
        photo += `<div class="img${i}"></div>`;
        // photo += "<div class=img"+ i +"></div>";
    });
    $('.browser').append(photo);



    $('.modal').click(function() {
        $('.work01 .work_R img:nth-child(1)').toggleClass('on')
    })








    $('.work01 .pc img:gt(0),.work01 .mobile img:gt(0)').hide(); // 인덱스 0번(첫번째 img) 이후에 있는 img hide -- gt(0)
    $('.work02 .pc img:gt(0),.work02 .mobile img:gt(0)').hide(); // 인덱스 0번(첫번째 img) 이후에 있는 img hide -- gt(0)


    $('.work01 .web p').click(function() {
        var webindex = $(this).index();
        $('.work01 .pc img').eq(webindex).stop().fadeIn(300).siblings().fadeOut(300);
        $('.work01 .mobile img').eq(webindex).stop().fadeIn(300).siblings().fadeOut(300);
        $(this).addClass('on').siblings().removeClass('on');
        // $('.pc img:first-child').hide();
    })
    $('.work02 .web p').click(function() {
        var webindex = $(this).index();
        $('.work02 .pc img').eq(webindex).stop().fadeIn(300).siblings().fadeOut(300);
        $('.work02 .mobile img').eq(webindex).stop().fadeIn(300).siblings().fadeOut(300);
        $(this).addClass('on').siblings().removeClass('on');
        // $('.pc img:first-child').hide();
    })


    // $('.web p').mouseleave(function() {
    //     $('.pc img:gt(0)').stop().fadeOut(300);
    //     // $('.pc img:first-child').show();
    // })




});