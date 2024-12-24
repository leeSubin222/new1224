// 프랜차이즈 페이지 스크롤 관련

$(window).scroll(function(){

    let scrollValue = $(this).scrollTop();


    //scroll-1 이미지
    if (scrollValue > 600 ) {
        $(".scroll-1>li:first-child").animate({
            opacity : "1",
            // marginLeft : "20px"
        },500) 
        $(".scroll-1 li:first-child").css({transform:"translateX(-20px)"},500)


        $(".scroll-1 li:last-child").animate({
            opacity : "1",
        })
        $(".scroll-1 li:last-child").css({transform:"translateX(20px)"},500)

    }
    
    //scroll-2 이미지
    if (scrollValue > 1200 ) {
        $(".scroll-2 li:first-child").animate({
            opacity : "1",
        })
        $(".scroll-2 li:first-child").css({transform:"translateX(-20px)"},500)


        $(".scroll-2 li:last-child").animate({
            opacity : "1",
        })
        $(".scroll-2 li:last-child").css({transform:"translateX(20px)"},500)

    }


    //scroll-3 이미지
    if (scrollValue > 1800 ) {
        $(".scroll-3 li:first-child").animate({
            opacity : "1",
        })
        $(".scroll-3 li:first-child").css({transform:"translateX(-20px)"},500)


        $(".scroll-3 li:last-child").animate({
            opacity : "1",
        })
        $(".scroll-3 li:last-child").css({transform:"translateX(20px)"},500)
    }
})