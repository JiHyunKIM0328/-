$(document).ready(function(){
    // GNB
    let oneDepth = $("#header .gnbArea .gnb > li"),
        twoDepth = oneDepth.find("div.twoD"),
        thrBt = twoDepth.find("a.thrBt"),
        gnbBG = $("#header .gnbBg");
        
    oneDepth.mouseenter(function(){
        twoDepth.show();
        gnbBG.show();
        $(this).addClass("on");
    });    

    oneDepth.mouseleave(function(){
        twoDepth.hide();
        gnbBG.hide();
        $(this).removeClass("on");
    });  
    
    thrBt.click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).next(".thrD").hide();
        }else{
            $(this).addClass("on");
            $(this).next(".thrD").show();
        }
    });

    // 모바일 메뉴
    let openBt = $(".mHeader .menuBtn"),
        mMenuArea = $(".mMenuArea"),
        closeBt = mMenuArea.find(".closeBt"),
        gnbArea  =  mMenuArea.children(".gnbArea"),  
        oneD = gnbArea.children(".oneD"),
        twoD = gnbArea.children(".twoD"),
        mthrBt = twoD.children(".thrBt"),
        thrD = twoD.children(".thrD");

    openBt.click(function(){
        mMenuArea.animate({"left":"0"},600);
    });
    
    closeBt.click(function(){
        mMenuArea.animate({"left":"-100%"},600);
    });

    console.log( twoD.children().is(".thrD")); // true
    console.log( !twoD.children().is(".thrD")); // false
    console.log( twoD.is("div")); // true
    console.log( twoD.is(":hidden")); // true
    console.log( twoD.is(":visible")); // false
    console.log( !twoD.is(":visible")); // true

    // 모바일 서브메뉴 - oneD 클릭시 twoD 나타나게
    oneD.click(function(){

        twoD.slideUp();
        oneD.removeClass("on");

        if(  !$(this).next(".twoD").is(":visible") ){
            $(this).next(".twoD").slideDown();
            $(this).addClass("on");
        }

    });

    // 모바일 서브메뉴 - mthrBt 클릭시 thrD 나타나게
    mthrBt.click(function(){
        $(this).toggleClass("on");
        $(this).next().slideToggle();
    });

    // swiper
    var mainSwiper = new Swiper("#mainVisual", {
        speed: 800,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
          nextEl: "#mainVisual .swiper-button-next",
          prevEl: "#mainVisual .swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    }); // swiper 내용 끝

    // 전시 배경이미지 교체
    let mainCon1List = $(".mainCon1List li"),
        mainCon1Bg =$(".mainCon1Bg > div");

    mainCon1List.each(function(idx){
        $(this).hover(function(){
            mainCon1Bg.eq(idx).fadeIn(600);
        } , function(){
            mainCon1Bg.eq(idx).fadeOut(600);
        });
    }); // each 내용 끝

    // 스크롤 모션
    $(window).scroll(function(){
        let winScrollT = $(window).scrollTop(),
            winH = $(window).height() /5 ,
            winScrollT2 = winScrollT + winH,

            mCon1T = $(".mainCon1").offset().top,
            mCon2T = $(".mainCon2").offset().top,
            mCon3T = $(".mainCon3").offset().top,
            ftT = $("#footer").offset().top;


        if( winScrollT > 100 ){
            $("#header").addClass("fixed");
        }else{
            $("#header").removeClass("fixed");
        }

        
        console.log( "윈도우스크롤값", "윈도우높이", "mCon1T" , "mCon2T", "mCon3T", "ftT" );    
        console.log( winScrollT, winH,  mCon1T , mCon2T, mCon3T, ftT );    
        
        // 스크롤한 값이 mCon1T의 위치값 보다 크거나 같다
        // && 그리고 :  두 조건이 모두 만족할 경우에만 문장을 실행한다. 
        // ||  또는 : 두 조건중 하나만 만족해도 문장을 실행한다.
        // 스크롤한 값이 mCon2T의 위치값 보다 작거나 같다
        // winScrollT >= mCon1T && winScrollT <= mCon2T

        if(winScrollT >= mCon1T && winScrollT <= mCon2T){
            $(".mainCon1 .mainTit").animate({"top" : "0", "opacity" : "1"},600,"swing");
            $(".mainCon1 .mainTxt").delay(200).animate({"top" : "0", "opacity" : "1"},600,"swing");    
            $(".mainCon1 .mainCon1List").delay(400).animate({"top" : "0", "opacity" : "1"},600,"swing");

        }else if(winScrollT >= mCon2T && winScrollT <= mCon3T){
            $(".mainCon2 .mainTit").animate({"top" : "0", "opacity" : "1"},600,"swing");
            $(".mainCon2 .mainTxt").delay(200).animate({"top" : "0", "opacity" : "1"},600,"swing"); 
            $(".mainCon2 .mainCon2List").delay(400).animate({"top" : "0", "opacity" : "1"},600,"swing");
 
        }else if(winScrollT >= mCon3T && winScrollT <= ftT){
            $(".mainCon3 .mainTit").animate({"top" : "0", "opacity" : "1"},600,"swing");
            $(".mainCon3 .mainTxt").delay(200).animate({"top" : "0", "opacity" : "1"},600,"swing"); 
            $(".mainCon3 .mainNews").delay(400).animate({"top" : "0", "opacity" : "1"},600,"swing");
        }

    });// window scroll 내용 끝

    // top 버튼 클릭하면
    let topBtn = $(".topBtn");
    
    topBtn.click(function(){
        $("html, body").animate({"scrollTop" : "0"},600,"swing");
    });


});// ready 내용 끝