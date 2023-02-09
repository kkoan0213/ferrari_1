$(document).ready(function(){


  //AOS 연결
  AOS.init();



    //스와이퍼
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      touchRatio: 0,
      autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".VideoSwiper", {
      loop: true,
      autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    $(window).scroll(function(){
      const sec1 = $('.sec-1').offset().top;
      const sec2 = $('.sec-2').offset().top;
      const sec3 = $('.sec-3').offset().top;
      const top1 = $('.l-1-box').offset().top;
      const top2 = $('.l-2-box').offset().top;
      const top3 = $('.l-3-box').offset().top;

      const sct = $(window).scrollTop();
      
      if(sct >= sec1 && sct < sec2){
          $('#header-area').removeClass('active');
      }else if(sct >= sec2 && sct < sec3){
          $('#header-area').addClass('active');
      }else if(sct >= sec3){
        $('#header-area').removeClass('active');
    }


    
    if(sct >= top1 && sct < top2){
        $('.l-1-box').fadeIn();
        $('.r-1-box').fadeIn();
    }else if(sct >= top2 && sct < top3){
      $('.l-2-box').fadeIn();
      $('.r-2-box').fadeIn();
    }else if(sct >= top3){
      $('.l-3-box').fadeIn();
      $('.r-3-box').fadeIn();
    }

  });





  // 햄버거버튼
  $('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('#hamburger span').toggleClass('active');
    $('.sub-menu-box').fadeToggle();
  });



  const t1 = $('.inner-txt1')
  const t2 = $('.inner-txt2')
  const t3 = $('.inner-txt3')
  const t4 = $('.inner-txt4')
  const t5 = $('.inner-txt5')
  
  $(t1).click(function(){
    $('.inner-txt1 .box-p').slideToggle();
  });
  $(t2).click(function(){
    $('.inner-txt2 .box-p').slideToggle();
  });
  $(t3).click(function(){
    $('.inner-txt3 .box-p').slideToggle();
  });
  $(t4).click(function(){
    $('.inner-txt4 .box-p').slideToggle();
  });
  $(t5).click(function(){
    $('.inner-txt5 .box-p').slideToggle();
  });

});