/* tab */
function openTab(tabIndex) {
  var i;
  var tabContents = document.getElementsByClassName("tab-cont");
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }
  document.getElementById("tab" + tabIndex).classList.add("active");
}

window.addEventListener('DOMContentLoaded', function(){
  //메인 상단 키비주얼 슬라이드
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
    
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 1000,
    },
      pagination: {
      el: '.swiper-pagination',
      type:"fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
      on: {
      init: function () {
        thisSlide = this;
        autoPlayBtn = document.querySelector('.swiper-autoplay-control > button');
        autoPlayBtn.addEventListener('click', e => {
          autoPlayState = autoPlayBtn.getAttribute('autoplay-pressed');
          if (autoPlayState === 'false') {
            autoPlayBtn.setAttribute('autoplay-pressed', 'true');
            thisSlide.autoplay.stop();
          } else if (autoPlayState === 'true') {
            autoPlayBtn.setAttribute('autoplay-pressed', 'false');
            thisSlide.autoplay.start();
          }
        });
      },
    },
    effect: "fade",      
  });
  
})

$(document).ready(function(){
  
  $('.sec2 .inner .tab-menu ul li').each(function(i){
    $(this).attr({
        "data-num": i,
    });
  }).click(function(){
    var num = $(this).attr("data-num");
    // => 클릭한 엘리먼트의 data-num값을 얻어옴
    console.log(num);
  
    // $('li').eq(num = "data-num").addClass('back');
  
    $('.sec2 .inner .tab-menu ul li').removeClass('active-bg'); // 빼주는 이벤트를 우선 작성
    $('.sec2 .inner .tab-menu ul li').eq(num).addClass('active-bg');
    
  });
});

////해당 영역으로 이동
function fnMove(seq){
 var offset = $("#div" + seq).offset();
 $('html, body').animate({scrollTop : offset.top}, 400);
}

//window.addEventListener('DOMContentLoaded', function(){
//
//  var swiper = new Swiper('.mySwiper2', {
//    spaceBetween: 24,
//    slidesPerView: 3,
//    freeMode: true,
//    watchSlidesProgress: true,
//    //breakpoints: {
//    //  768: {
//    //    spaceBetween: 24,  
//    //    slidesPerView: 3,
//    //  },
//    //},
//  });
//  var swiper2 = new Swiper('.mySwiper',{
//    loop: true,
//    pagination: {
//      el: '.swiper-pagination',
//      type:"fraction",
//    },
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
//    thumbs : {
//      swiper: swiper,
//    },
//    autoplay: {
//      delay: 5000,
//      disableOnInteraction: false,
//    },
//    on: {
//      init: function () {
//        thisSlide = this;
//        autoPlayBtn = document.querySelector('.swiper-autoplay-control > button');
//        autoPlayBtn.addEventListener('click', e => {
//          autoPlayState = autoPlayBtn.getAttribute('autoplay-pressed');
//          if (autoPlayState === 'false') {
//            autoPlayBtn.setAttribute('autoplay-pressed', 'true');
//            thisSlide.autoplay.stop();
//          } else if (autoPlayState === 'true') {
//            autoPlayBtn.setAttribute('autoplay-pressed', 'false');
//            thisSlide.autoplay.start();
//          }
//        });
//      },
//    },
//    effect: "fade",   
//  }); 
//});






/* test */
/* $('.btn li').each(function(i){
  $(this).attr({
      "data-num": i,
  });
}).click(function(){
  var num = $(this).attr("data-num");
  // => 클릭한 엘리먼트의 data-num값을 얻어옴
  console.log(num);

  $('.img_wrap').animate({
      left: -1000 * num
      // => 클릭한 num값을 곱하여 이동
  });

  // $('li').eq(num = "data-num").addClass('back');

  $('.btn li').removeClass('back'); // 빼주는 이벤트를 우선 작성
  $('.btn li').eq(num).addClass('back');


  $('.title').removeClass('title_active');
  $('.title').eq(num).addClass('title_active');
  
}); */


